import { vectorService } from './nodeVectorService.js';

export class LocalChatService {
  constructor() {
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;
    await vectorService.initialize();
    this.initialized = true;
  }

  async *sendMessage(messages) {
    if (!this.initialized) {
      await this.initialize();
    }

    const lastUserMessage = messages[messages.length - 1];
    if (lastUserMessage.role !== 'user') {
      throw new Error('Last message must be from user');
    }

    const query = lastUserMessage.content;
    
    // Get relevant context from vector search (increased to 8 for better coverage)
    const searchResults = await vectorService.search(query, 8);
    
    // Separate FAQ entries from regular rules for prioritization
    const faqResults = searchResults.filter(r => r.entry.source === 'official_faq');
    const ruleResults = searchResults.filter(r => r.entry.source !== 'official_faq');
    
    // Build contexts with FAQ entries prioritized
    const contexts = [];
    
    // Add FAQ entries first (official rulings have priority)
    faqResults.forEach(r => {
      contexts.push({
        title: r.entry.title || r.entry.question || r.entry.section || '',
        content: r.entry.answer || r.entry.content || r.entry.text || '',
        category: r.entry.category || r.entry.section || '',
        score: r.score,
        isFAQ: true,
        question: r.entry.question
      });
    });
    
    // Then add regular rule entries
    ruleResults.forEach(r => {
      contexts.push({
        title: r.entry.title || r.entry.section || '',
        content: r.entry.content || r.entry.text || '',
        category: r.entry.category || r.entry.section || '',
        score: r.score,
        isFAQ: false
      });
    });

    // Generate response based on query type and context
    const response = this.generateResponse(query, contexts);
    
    // Stream the response character by character for effect
    for (const char of response) {
      await new Promise(resolve => setTimeout(resolve, 5));
      yield char;
    }
  }

  generateResponse(query, contexts) {
    const queryLower = query.toLowerCase();
    
    // Check for greeting
    if (this.isGreeting(queryLower)) {
      return "Greetings, Commander! I'm your Twilight Imperium 4 rules assistant. I can help you understand the game rules, explain how different mechanics work, and guide you through complex interactions. What would you like to know about?";
    }

    // Check for help request
    if (queryLower.includes('help') && queryLower.split(' ').length < 5) {
      return this.getHelpMessage();
    }

    // Check if we should use fallback for common queries even if we have search results
    if (this.shouldUseFallback(query, contexts)) {
      return this.generateFallbackResponse(query);
    }

    // No relevant context found or very low relevance
    if (contexts.length === 0 || contexts[0].score < 0.3) {
      return this.generateFallbackResponse(query);
    }

    // Check if we have an official FAQ answer
    const faqContext = contexts.find(c => c.isFAQ && c.score > 0.4);
    if (faqContext) {
      let response = "**Official FAQ Answer:**\n\n";
      if (faqContext.question) {
        response += `*Q: ${faqContext.question}*\n\n`;
      }
      response += `**A:** ${faqContext.content}\n\n`;
      
      // Add related rules if available
      const relatedRules = contexts.filter(c => !c.isFAQ && c.score > 0.4).slice(0, 2);
      if (relatedRules.length > 0) {
        response += "**Related Rules:**\n";
        relatedRules.forEach(rule => {
          response += `• **${rule.title}**: ${this.getFirstSentences(rule.content, 1)}\n`;
        });
        response += "\n";
      }
      return response;
    }

    // Regular response
    const mainContext = contexts[0];
    let response = `Based on the rules for **${mainContext.title}**:\n\n`;
    response += this.summarizeContent(mainContext.content) + "\n\n";
    
    // Add related rules if relevant
    if (contexts.length > 1) {
      const relatedContexts = contexts.slice(1, 3).filter(ctx => ctx.score > 0.4);
      if (relatedContexts.length > 0) {
        response += "**Related Rules:**\n";
        relatedContexts.forEach(ctx => {
          const prefix = ctx.isFAQ ? "(FAQ) " : "";
          response += `• ${prefix}**${ctx.title}**: ${this.getFirstSentences(ctx.content, 1)}\n`;
        });
        response += "\n";
      }
    }

    return response;
  }

  isGreeting(text) {
    const greetings = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening'];
    const words = text.toLowerCase().split(/\s+/);
    return greetings.some(g => words.includes(g)) || text.toLowerCase().trim() === 'hi';
  }

  getHelpMessage() {
    return `I can help you with Twilight Imperium 4 rules! Here are some things you can ask me:

**Basic Questions:**
• "How do I win the game?"
• "What happens during the status phase?"
• "How does space combat work?"

**Specific Rules:**
• "Can I move through enemy ships?"
• "When can I score objectives?"
• "What is the difference between tactics and strategy tokens?"

**Strategy & Tips:**
• "How should I use the Technology strategy card?"
• "What are good starting moves?"
• "How important is Mecatol Rex?"

**Component Information:**
• "What does the Warfare strategy card do?"
• "Tell me about the Hacan faction"
• "What technologies should I research first?"

Just ask naturally, and I'll find the relevant rules and explain them clearly!`;
  }

  summarizeContent(content) {
    if (!content) return "Information available in the rulebook.";
    
    // Take first 2-3 sentences
    const sentences = content.match(/[^.!?]+[.!?]+/g) || [content];
    return sentences.slice(0, 3).join(' ').trim();
  }

  getFirstSentences(content, count) {
    if (!content) return "";
    const sentences = content.match(/[^.!?]+[.!?]+/g) || [content];
    return sentences.slice(0, count).join(' ').trim();
  }

  shouldUseFallback(query, contexts) {
    const queryLower = query.toLowerCase();
    
    // Check for "how to win" queries that don't match well
    if (queryLower.includes('how') && (queryLower.includes('win') || queryLower.includes('victory'))) {
      // If the best match is about combat or other irrelevant topics, use fallback
      const bestMatch = contexts[0];
      if (bestMatch && bestMatch.score < 0.5) {
        const content = (bestMatch.content || '').toLowerCase();
        if (content.includes('combat') || content.includes('retreat') || content.includes('impossible')) {
          return true;
        }
      }
    }
    
    // Check for faction queries that don't match well
    if (queryLower.includes('what') && (queryLower.includes('faction') || queryLower.includes('creuss'))) {
      const bestMatch = contexts[0];
      if (bestMatch && bestMatch.score < 0.6) {
        // If it's just a specific FAQ about the faction rather than an overview, use fallback
        if (bestMatch.isFAQ && bestMatch.question && bestMatch.question.length > 50) {
          return true;
        }
      }
    }
    
    return false;
  }

  generateFallbackResponse(query) {
    const queryLower = query.toLowerCase();
    
    // Handle common queries that might not have good vector matches
    if (queryLower.includes('how') && (queryLower.includes('win') || queryLower.includes('victory'))) {
      return `**How to Win Twilight Imperium 4:**

The first player to accumulate **10 Victory Points** wins the game immediately.

**Ways to Score Victory Points:**
• **Public Objectives** - Revealed each round, usually worth 1-2 points each
• **Secret Objectives** - Personal goals you draw, usually worth 1 point each
• **Imperial Strategy Card** - Score 1 point for controlling Mecatol Rex
• **Support for the Throne** - Trade other players' promissory notes for points
• **Agenda Cards** - Some political outcomes award victory points
• **Technology/Relics** - A few special items provide victory points

**Strategy Tips:**
• Focus on objectives early - they're your primary point source
• Control Mecatol Rex when you have the Imperial card
• Don't neglect secret objectives - they're often easier than public ones
• Trading and diplomacy can be crucial for victory point exchanges`;
    }
    
    if (queryLower.includes('creuss') || (queryLower.includes('ghost') && queryLower.includes('faction'))) {
      return `**The Ghosts of Creuss:**

The Ghosts of Creuss are a unique faction focused on **wormhole manipulation** and mobility.

**Faction Abilities:**
• **Quantum Entanglement** - You treat all systems that contain a wormhole token as adjacent
• **Creuss Gate** - Your home system has a special wormhole that connects to the Creuss Gate token
• **Slipstream** - After you activate a system containing a wormhole, you may produce ships there

**Key Units:**
• **Prototype War Sun I** - A cheaper War Sun that starts damaged
• **Dimensional Splicer I** - A cruiser that can create wormhole tokens

**Strategy:**
• Use your wormhole mobility to strike unexpected targets
• The Creuss Gate gives you a "backdoor" into the galaxy
• Focus on controlling key wormhole systems
• Your mobility makes you excellent at hit-and-run tactics`;
    }
    
    return `I couldn't find specific rules about "${query}" in my database. Could you rephrase your question or ask about something else? 

**Topics I can help with:**
• Victory conditions and scoring  
• Combat (space and ground)
• Strategy cards and actions
• Movement and fleet logistics  
• Technology and upgrades
• Political phase and voting
• Trade and negotiations
• Faction abilities and strategies

**Try asking:**
• "How do I win the game?"
• "What does the [faction name] do?"
• "How does space combat work?"
• "When can I score objectives?"`;
  }
}

export const localChatService = new LocalChatService();