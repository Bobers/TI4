import { GoogleGenAI, Chat } from "@google/genai";
import { ragService } from './ragService';
import { codexData } from '../data/codex';
import { aliasMap } from '../data/aliases';
import type { ChatMessage, CodexEntry } from "../types";

// For Vite, we need to use import.meta.env instead of process.env
const API_KEY = import.meta.env.VITE_API_KEY || '';

if (!API_KEY) {
    throw new Error("VITE_API_KEY environment variable not set. Please add it to your .env file.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// A much simpler system prompt that instructs the AI to use the provided context.
const systemInstruction = `You are a helpful and an exceptionally accurate Twilight Imperium: Fourth Edition rules expert. 
Your knowledge is based *exclusively* on the comprehensive library of rule documents and specific component data provided in the <CONTEXT>. 
When answering the user's <QUESTION>, be clear, concise, and reference the rule numbers or document sections if possible. 
Prioritize information from any 'Direct Component Lookup' section in the context, as it is the most specific.
Do not use any external knowledge. If the answer cannot be found in the provided text, state that the information is not available in the provided documents.
Format your response using markdown for readability (e.g., lists, bolding).`;


const chat: Chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: 8192,
        thinkingConfig: { thinkingBudget: 1024 },
    },
    history: []
});


async function* streamGenerator(stream: AsyncGenerator<any>) {
    for await (const chunk of stream) {
        yield chunk.text;
    }
}

/**
 * Formats a component's data into a clean, human-readable string for the AI prompt.
 * @param entry The CodexEntry to format.
 * @returns A string summary of the component.
 */
function formatComponentData(entry: CodexEntry): string {
    const data = entry.data as any;
    let output = '';

    const simpleProps: {[key: string]: string} = {
        'text': 'Text', 'condition': 'Condition', 'points': 'Points',
        'commodities': 'Commodities', 'resources': 'Resources', 'influence': 'Influence',
        'trait': 'Trait', 'tech': 'Tech Specialty', 'initiative': 'Initiative',
        'primary': 'Primary Ability', 'secondary': 'Secondary Ability',
        'home': 'Home System ID',
    };

    for (const prop in simpleProps) {
        if (data[prop] !== undefined && data[prop] !== null) {
            output += `${simpleProps[prop]}: ${data[prop]}\n`;
        }
    }

    if (data.abilities) {
        output += 'Abilities:\n';
        if (Array.isArray(data.abilities)) {
             data.abilities.forEach((a: any) => {
                 if (typeof a === 'string') {
                    output += `- ${a}\n`;
                 } else if (a.name) {
                    output += `- ${a.name}: ${a.text}\n`;
                 }
             });
        }
    }

    if (data.stats) {
        output += `Cost: ${data.stats.cost ?? 'N/A'}, Combat: ${data.stats.combat ?? 'N/A'}, Move: ${data.stats.move ?? 'N/A'}, Capacity: ${data.stats.capacity ?? 'N/A'}\n`;
    }
    
    if (data.leaders) {
        output += 'Leaders:\n';
        output += `  Agent: ${data.leaders.agents[0].name} - ${data.leaders.agents[0].text}\n`;
        output += `  Commander: ${data.leaders.commanders[0].name} - ${data.leaders.commanders[0].text}\n`;
        output += `  Hero: ${data.leaders.heroes[0].name} - ${data.leaders.heroes[0].text}\n`;
    }
    
    if (data.promissory) {
        output += `Promissory Note (${data.promissory.name}): ${data.promissory.text}\n`;
    }
    
    if (data.starting) {
        if (data.starting.tech?.length > 0) {
            output += `Starting Tech: ${data.starting.tech.join(', ')}\n`;
        }
        if (data.starting.fleet && Object.keys(data.starting.fleet).length > 0) {
            const fleet = data.starting.fleet as { [key: string]: number };
            output += `Starting Fleet: ${Object.entries(fleet).map(([unit, count]) => `${count} ${unit}`).join(', ')}\n`;
        }
    }
    
    if (data.units && Array.isArray(data.units) && data.units.length > 0) {
        output += 'Faction-Specific Units:\n';
        data.units.forEach((u: { name: string, type: string, text: string }) => {
            output += `- ${u.name} (${u.type}): ${u.text}\n`;
        });
    }

    if (data.technologies && Array.isArray(data.technologies) && data.technologies.length > 0) {
        output += 'Faction-Specific Technologies:\n';
        data.technologies.forEach((t: { name: string, type: string, text: string }) => {
            output += `- ${t.name} (${t.type}): ${t.text}\n`;
        });
    }

    if (data.setup && Array.isArray(data.setup) && data.setup.length > 0) {
        output += `Setup: ${data.setup.join(' ')}\n`;
    }

    return output.trim();
}

// This function is exported for testing purposes ONLY.
export async function _forTesting_generateContext(history: ChatMessage[]): Promise<string> {
    const userMessages = history.filter(m => m.role === 'user').map(m => m.content);
    const contextualQuery = userMessages.slice(-2).join(' ');
    const lowerCaseMessage = contextualQuery.toLowerCase();

    // --- NEW, MORE INTELLIGENT LOOKUP LOGIC WITH SCORING & ALIASES ---
    
    // 1. Normalize query with aliases for full phrase replacement
    let normalizedMessage = lowerCaseMessage;
    for (const alias in aliasMap) {
        const regex = new RegExp(`\\b${alias}\\b`, 'g');
        normalizedMessage = normalizedMessage.replace(regex, aliasMap[alias].toLowerCase());
    }

    const messageKeywords = new Set(normalizedMessage.split(/[\s(),.?!_]+/).filter(word => word.length > 2));
    
    const typeSynonyms: { [key: string]: CodexEntry['type'] } = {
        'fraction': 'Faction', 'race': 'Faction', 'faction': 'Faction',
        'tech': 'Technology', 'technology': 'Technology',
        'unit': 'Unit', 'ship': 'Unit',
        'planet': 'Planet',
        'agenda': 'Agenda',
        'objective': 'Objective'
    };
    const mentionedTypes = new Set<CodexEntry['type']>();
    for (const keyword of messageKeywords) {
        if (typeSynonyms[keyword]) {
            mentionedTypes.add(typeSynonyms[keyword]);
        }
    }

    const scoredEntries = codexData.map(entry => {
        let score = 0;
        const entryNameLower = entry.name.toLowerCase();

        // Score based on how many words from the component name are in the query
        const nameWords = new Set(entryNameLower.split(/[\s(),.?!_]+/));
        let matchCount = 0;
        for (const keyword of messageKeywords) {
            if (nameWords.has(keyword)) {
                matchCount++;
            }
        }
        score += matchCount * 10;
        
        // Bonus for containing the full name
        if (normalizedMessage.includes(entryNameLower)) {
            score += 10;
        }

        // Boost score if the component type is also mentioned
        if (mentionedTypes.has(entry.type)) {
            score += 15;
        }
        
        return { entry, score };
    }).filter(item => item.score > 0);

    // Sort by score and take the best matches
    scoredEntries.sort((a, b) => b.score - a.score);

    const bestScore = scoredEntries.length > 0 ? scoredEntries[0].score : 0;
    const finalMatches = scoredEntries
        .filter(item => item.score >= bestScore * 0.75 && item.score > 5) // Stricter thresholding
        .slice(0, 4) // Limit to max 4 matches
        .map(item => item.entry);

    const uniqueMatches = Array.from(new Map(finalMatches.map(item => [item.id, item])).values());
    
    let directLookupContext = '';
    if (uniqueMatches.length > 0) {
        directLookupContext = 'Direct Component Lookup:\n' +
            'The following data sheets were identified as relevant to the user\'s question.\n\n' +
            uniqueMatches.map(entry => 
            `Component: ${entry.name} (Type: ${entry.type})\n` +
            '---\n' +
            formatComponentData(entry)
        ).join('\n\n');
    }

    // 2. RAG for general context from rulebooks
    const contextChunks = ragService.getContext(contextualQuery);
    const ragContext = 'Rulebook Excerpts:\n' + 
        'The following are relevant excerpts from the rulebooks based on a semantic search.\n\n' + 
        contextChunks.join('\n\n---\n\n');

    // 3. Combine contexts, prioritizing the direct lookup
    return (directLookupContext ? directLookupContext + '\n\n' : '') + ragContext;
}

/**
 * Sends a message to the stateful chat session and returns the response stream.
 * It now uses a hybrid RAG and direct lookup approach to provide context-specific information to the model.
 * @param history The full chat history, including the latest user message.
 * @returns An async generator that yields the text chunks of the AI's response.
 */
export async function sendMessage(history: ChatMessage[]): Promise<AsyncGenerator<string>> {
    const message = history[history.length - 1].content;
    const finalContext = await _forTesting_generateContext(history);

    const augmentedPrompt = `
<CONTEXT>
${finalContext}
</CONTEXT>

<QUESTION>
${message}
</QUESTION>
`;

    const stream = await chat.sendMessageStream({ message: augmentedPrompt });
    return streamGenerator(stream);
}