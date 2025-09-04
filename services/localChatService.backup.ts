import { supabaseVectorService as vectorService } from './supabaseVectorService';
import type { ChatMessage } from '../types';

interface RuleContext {
  title: string;
  content: string;
  category: string;
  score: number;
  isFAQ?: boolean;
  question?: string;
}

export class LocalChatService {
  private initialized = false;

  async initialize() {
    if (this.initialized) return;
    await vectorService.initialize();
    this.initialized = true;
  }

  async *sendMessage(messages: ChatMessage[]): AsyncGenerator<string> {
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
    const contexts: RuleContext[] = [];
    
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

  private generateResponse(query: string, contexts: RuleContext[]): string {
    const queryLower = query.toLowerCase();
    
    // Check for greeting
    if (this.isGreeting(queryLower)) {
      return "Greetings, Commander! I'm your Twilight Imperium 4 rules assistant. I can help you understand the game rules, explain how different mechanics work, and guide you through complex interactions. What would you like to know about?";
    }

    // Check for help request
    if (queryLower.includes('help') && queryLower.split(' ').length < 5) {
      return this.getHelpMessage();
    }

    // No relevant context found or very low relevance
    if (contexts.length === 0 || contexts[0].score < 0.25) {
      return this.generateFallbackResponse(query);
    }

    // Determine query type and generate appropriate response
    if (this.isHowToQuestion(queryLower)) {
      return this.generateHowToResponse(query, contexts);
    } else if (this.isWhatIsQuestion(queryLower)) {
      return this.generateDefinitionResponse(query, contexts);
    } else if (this.isCanQuestion(queryLower)) {
      return this.generateCanDoResponse(query, contexts);
    } else if (this.isWhenQuestion(queryLower)) {
      return this.generateTimingResponse(query, contexts);
    } else if (this.isComparisonQuestion(queryLower)) {
      return this.generateComparisonResponse(query, contexts);
    } else {
      return this.generateGeneralResponse(query, contexts);
    }
  }

  private isGreeting(text: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening'];
    const words = text.toLowerCase().split(/\s+/);
    return greetings.some(g => words.includes(g)) || text.toLowerCase().trim() === 'hi';
  }

  private isHowToQuestion(text: string): boolean {
    return text.includes('how do') || text.includes('how to') || text.includes('how can') || text.includes('how does');
  }

  private isWhatIsQuestion(text: string): boolean {
    return text.startsWith('what is') || text.startsWith('what are') || text.startsWith("what's");
  }

  private isCanQuestion(text: string): boolean {
    return text.startsWith('can i') || text.startsWith('can you') || text.includes('am i allowed') || text.includes('is it possible');
  }

  private isWhenQuestion(text: string): boolean {
    return text.startsWith('when') || text.includes('what phase') || text.includes('what step');
  }

  private isComparisonQuestion(text: string): boolean {
    return text.includes('difference between') || text.includes('vs') || text.includes('versus') || text.includes('compare');
  }


  private generateHowToResponse(query: string, contexts: RuleContext[]): string {
    // Check for FAQ first
    const faqContext = contexts.find(c => c.isFAQ && c.score > 0.4);
    if (faqContext) {
      let response = "**Official FAQ Answer:**\n\n";
      if (faqContext.question) {
        response += `*Q: ${faqContext.question}*\n\n`;
      }
      response += `**A:** ${faqContext.content}\n\n`;
      
      // Add any steps if we can extract them
      const steps = this.extractSteps(faqContext.content);
      if (steps.length > 0) {
        response += "**Key Points:**\n";
        steps.forEach((step, i) => {
          response += `${i + 1}. ${step}\n`;
        });
        response += "\n";
      }
      
      // Add helpful tip for newcomers
      response += this.getNewcomerTip(faqContext.category);
      return response;
    }
    
    // Regular rule-based response
    const mainContext = contexts[0];
    let response = `Here's how ${this.extractTopic(query)} works in Twilight Imperium 4:\n\n`;
    
    // Extract key points from the content
    const steps = this.extractSteps(mainContext.content);
    if (steps.length > 0) {
      response += "**Steps:**\n";
      steps.forEach((step, i) => {
        response += `${i + 1}. ${step}\n`;
      });
      response += "\n";
    } else {
      response += this.summarizeContent(mainContext.content) + "\n\n";
    }

    // Add related information if highly relevant
    if (contexts.length > 1 && contexts[1].score > 0.5) {
      const prefix = contexts[1].isFAQ ? "(FAQ) " : "";
      response += `**Related Rule:** ${prefix}${contexts[1].title}\n`;
      response += this.getFirstSentences(contexts[1].content, 2) + "\n\n";
    }

    // Add helpful tip for newcomers
    response += this.getNewcomerTip(mainContext.category);

    return response;
  }

  private generateDefinitionResponse(query: string, contexts: RuleContext[]): string {
    const mainContext = contexts[0];
    const queryLower = query.toLowerCase();
    
    // Check if this is a mech/unit query
    if (mainContext.type === 'Mech' || queryLower.includes('mech')) {
      let response = `**${mainContext.title}** (${mainContext.type || 'Unit'})\n`;
      response += `*Faction: ${mainContext.category}*\n\n`;
      response += `**Ability:** ${mainContext.content}\n\n`;
      
      // Add tactical advice for mechs
      if (mainContext.title.includes('Icarus')) {
        response += "💡 **Tactical Note:** The Icarus Drive can create wormholes for strategic positioning.\n";
      }
      
      return response;
    }
    
    // Standard definition response
    let response = `**${mainContext.title}**\n\n`;
    
    response += this.summarizeContent(mainContext.content) + "\n\n";

    // Add examples or clarifications if available
    const examples = this.extractExamples(mainContext.content);
    if (examples.length > 0) {
      response += "**Examples:**\n";
      examples.forEach(ex => {
        response += `• ${ex}\n`;
      });
      response += "\n";
    }

    // Add context about when this is important
    response += this.getImportanceContext(mainContext.category);

    return response;
  }

  private generateCanDoResponse(query: string, contexts: RuleContext[]): string {
    const mainContext = contexts[0];
    const content = mainContext.content.toLowerCase();
    
    // Try to determine if the answer is yes or no
    const canDo = !content.includes('cannot') && !content.includes('may not') && !content.includes('prohibited');
    
    let response = canDo ? "**Yes**, " : "**No**, ";
    response += `based on the rules for ${mainContext.title}:\n\n`;
    
    response += this.extractRelevantRule(mainContext.content, query) + "\n\n";

    // Add any conditions or exceptions
    const conditions = this.extractConditions(mainContext.content);
    if (conditions.length > 0) {
      response += "**Important conditions:**\n";
      conditions.forEach(cond => {
        response += `• ${cond}\n`;
      });
    }

    return response;
  }

  private generateTimingResponse(query: string, contexts: RuleContext[]): string {
    const mainContext = contexts[0];
    let response = `**Timing for ${mainContext.title}:**\n\n`;
    
    // Extract timing information
    const timingInfo = this.extractTimingInfo(mainContext.content);
    response += timingInfo + "\n\n";

    // Add phase/step context if relevant
    if (mainContext.category.includes('phase') || mainContext.category.includes('action')) {
      response += this.getPhaseContext(mainContext.category);
    }

    return response;
  }

  private generateComparisonResponse(query: string, contexts: RuleContext[]): string {
    let response = "**Comparison:**\n\n";
    
    // Compare the top relevant contexts
    contexts.slice(0, 2).forEach(context => {
      response += `**${context.title}:**\n`;
      response += this.getFirstSentences(context.content, 2) + "\n\n";
    });

    response += "**Key Differences:**\n";
    response += this.identifyDifferences(contexts[0], contexts[1]);

    return response;
  }

  private generateGeneralResponse(query: string, contexts: RuleContext[]): string {
    const mainContext = contexts[0];
    let response = "";
    
    // Check if we have an official FAQ answer
    const faqContext = contexts.find(c => c.isFAQ && c.score > 0.4);
    if (faqContext) {
      response = "**Official FAQ Answer:**\n\n";
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
    } else {
      // No FAQ, use regular rules
      response = `Based on the rules for **${mainContext.title}**:\n\n`;
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
    }

    // Add strategic advice for newcomers
    response += this.getStrategicAdvice(mainContext.category);

    return response;
  }

  private getHelpMessage(): string {
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

  private generateFallbackResponse(query: string): string {
    return `I couldn't find specific information about "${query}" in the rules database. 

Please try rephrasing your question or being more specific. For example:
• Instead of "tell me about X", try "how does X work?"
• Instead of "X rules", try "when can I use X?"
• Include context like phase names or component types

The database contains ${this.vectorService.getAllEntries().then(e => e.length).catch(() => '500+')} entries covering all official rules and FAQ entries.`;
  }

  // Helper methods for content extraction and generation

  private extractTopic(query: string): string {
    const words = query.toLowerCase().replace(/[?.,!]/g, '').split(' ');
    const skipWords = ['how', 'do', 'does', 'to', 'i', 'the', 'a', 'an', 'work', 'works'];
    const topic = words.filter(w => !skipWords.includes(w)).join(' ');
    return topic || 'this rule';
  }

  private extractSteps(content: string): string[] {
    const steps: string[] = [];
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.match(/^\d+\./) || line.match(/^[a-z]\)/) || line.includes('Step')) {
        steps.push(line.replace(/^[\d\.a-z\)]+\s*/, '').trim());
      }
    }
    
    return steps.slice(0, 5); // Max 5 steps
  }

  private summarizeContent(content: string): string {
    // For short content (like mech abilities), return the full content
    if (content.length < 300) {
      return content.trim();
    }
    
    // For longer content, get meaningful sentences
    const sentences = content
      .split(/[.!?]\s+/)
      .filter(s => s.length > 10) // Lower threshold to catch more content
      .slice(0, 4) // Get more sentences for context
      .join('. ');
    
    // If we didn't get enough content, just return the first 300 chars
    if (sentences.length < 100) {
      return content.substring(0, 300).trim() + '...';
    }
    
    return sentences + (sentences.endsWith('.') ? '' : '.');
  }

  private getFirstSentences(content: string, count: number): string {
    const sentences = content.split(/[.!?]\s+/).slice(0, count);
    return sentences.join('. ') + '.';
  }

  private extractExamples(content: string): string[] {
    const examples: string[] = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes('example') || lines[i].toLowerCase().includes('e.g.')) {
        examples.push(lines[i].replace(/^.*example:?\s*/i, '').trim());
      }
    }
    
    return examples.slice(0, 2);
  }

  private extractConditions(content: string): string[] {
    const conditions: string[] = [];
    const keywords = ['if', 'when', 'unless', 'must', 'require', 'only'];
    
    const sentences = content.split(/[.!?]\s+/);
    for (const sentence of sentences) {
      if (keywords.some(k => sentence.toLowerCase().includes(k))) {
        conditions.push(sentence.trim());
      }
    }
    
    return conditions.slice(0, 3);
  }

  private extractRelevantRule(content: string, query: string): string {
    const queryWords = query.toLowerCase().split(' ');
    const sentences = content.split(/[.!?]\s+/);
    
    // Find sentence with most query word matches
    let bestMatch = sentences[0];
    let bestScore = 0;
    
    for (const sentence of sentences) {
      const sentLower = sentence.toLowerCase();
      let score = 0;
      for (const word of queryWords) {
        if (sentLower.includes(word)) score++;
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = sentence;
      }
    }
    
    return bestMatch;
  }

  private extractTimingInfo(content: string): string {
    const timingKeywords = ['during', 'after', 'before', 'at the start', 'at the end', 'phase', 'step', 'window'];
    const sentences = content.split(/[.!?]\s+/);
    
    for (const sentence of sentences) {
      if (timingKeywords.some(k => sentence.toLowerCase().includes(k))) {
        return sentence;
      }
    }
    
    return this.getFirstSentences(content, 1);
  }

  private identifyDifferences(context1: RuleContext, context2: RuleContext): string {
    // Simple comparison based on categories and content
    let differences = "";
    
    if (context1.category !== context2.category) {
      differences += `• ${context1.title} relates to ${context1.category}, while ${context2.title} relates to ${context2.category}\n`;
    }
    
    // Look for key distinguishing words
    const key1 = this.extractKeywords(context1.content);
    const key2 = this.extractKeywords(context2.content);
    
    const unique1 = key1.filter(k => !key2.includes(k));
    const unique2 = key2.filter(k => !key1.includes(k));
    
    if (unique1.length > 0) {
      differences += `• ${context1.title} involves: ${unique1.slice(0, 3).join(', ')}\n`;
    }
    if (unique2.length > 0) {
      differences += `• ${context2.title} involves: ${unique2.slice(0, 3).join(', ')}\n`;
    }
    
    return differences || "• Both rules serve different purposes in the game\n";
  }

  private extractKeywords(content: string): string[] {
    const importantWords = ['combat', 'movement', 'production', 'influence', 'resources', 'victory', 'objective', 'action', 'tactical', 'strategic'];
    const contentLower = content.toLowerCase();
    return importantWords.filter(w => contentLower.includes(w));
  }

  private getNewcomerTip(category: string): string {
    const tips: Record<string, string> = {
      combat: "💡 **Tip for new players:** Remember that space combat happens before ground combat, and you can't retreat from ground combat!",
      movement: "💡 **Tip for new players:** Always check system adjacency and your fleet supply before moving ships.",
      objectives: "💡 **Tip for new players:** Focus on scoring objectives rather than just conquering systems - victory points win the game!",
      actions: "💡 **Tip for new players:** Think carefully about when to pass - you can't take actions after passing.",
      strategy: "💡 **Tip for new players:** The order you pick strategy cards matters - lower numbers go first but higher numbers are often more powerful.",
      default: "💡 **Tip for new players:** Don't try to memorize everything at once - learn the basics and reference specific rules as they come up."
    };
    
    const key = Object.keys(tips).find(k => category.toLowerCase().includes(k)) || 'default';
    return tips[key];
  }

  private getImportanceContext(category: string): string {
    const contexts: Record<string, string> = {
      combat: "This is crucial during combat encounters, which often determine control of key systems.",
      objectives: "Understanding this helps you score victory points more effectively.",
      movement: "This affects how you position your fleets and expand your empire.",
      production: "This determines how quickly you can build up your forces.",
      politics: "This becomes important during the agenda phase when laws are voted on.",
      default: "This rule helps ensure smooth gameplay and prevents disputes."
    };
    
    const key = Object.keys(contexts).find(k => category.toLowerCase().includes(k)) || 'default';
    return "**Why this matters:** " + contexts[key];
  }

  private getPhaseContext(category: string): string {
    if (category.includes('status')) {
      return "The Status Phase happens at the end of each game round, after all players have passed.";
    } else if (category.includes('action')) {
      return "This occurs during the Action Phase, which is the main part of each game round.";
    } else if (category.includes('strategy')) {
      return "This happens during the Strategy Phase at the beginning of each round.";
    } else if (category.includes('agenda')) {
      return "This occurs during the Agenda Phase, which only happens after Mecatol Rex is claimed.";
    }
    return "";
  }

  private getStrategicAdvice(category: string): string {
    const advice: Record<string, string> = {
      combat: "💭 **Strategic consideration:** Combat is expensive - sometimes the threat is more powerful than the fight itself.",
      objectives: "💭 **Strategic consideration:** Always plan 1-2 rounds ahead for objectives - some require setup.",
      resources: "💭 **Strategic consideration:** Balance resource planets for production with influence planets for politics.",
      technology: "💭 **Strategic consideration:** Tech paths should align with your faction strengths and objective requirements.",
      default: "💭 **Strategic consideration:** Every action should work toward scoring objectives or preventing opponents from scoring theirs."
    };
    
    const key = Object.keys(advice).find(k => category.toLowerCase().includes(k)) || 'default';
    return advice[key];
  }
}

export const localChatService = new LocalChatService();