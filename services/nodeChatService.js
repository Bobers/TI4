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

    // No relevant context found or very low relevance
    if (contexts.length === 0 || contexts[0].score < 0.25) {
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


  generateFallbackResponse(query) {
    return `I couldn't find specific information about "${query}" in the rules database.

Please try rephrasing your question or being more specific. The database contains 503 entries covering all official rules and FAQ entries.`;
  }
}

export const localChatService = new LocalChatService();