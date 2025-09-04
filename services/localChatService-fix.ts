import { supabaseVectorService } from './supabaseVectorService';
import type { VectorEntry } from '../lib/supabase';
import type { ChatMessage } from '../types';

interface RuleContext {
  title: string;
  content: string;
  category?: string;
  score: number;
  isFAQ?: boolean;
  question?: string;
}

class LocalChatService {
  private initialized = false;
  private vectorService = supabaseVectorService;

  async initialize(): Promise<void> {
    if (this.initialized) return;
    
    try {
      await this.vectorService.initialize();
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize chat service:', error);
      throw error;
    }
  }

  async *sendMessage(messages: ChatMessage[]): AsyncGenerator<string> {
    if (!this.initialized) {
      await this.initialize();
    }

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== 'user') {
      yield "I can only respond to user messages.";
      return;
    }

    const query = lastMessage.content;
    
    // Search for relevant content
    const searchResults = await this.vectorService.search(query, 5);
    
    // Convert to RuleContext format with better filtering
    const contexts: RuleContext[] = searchResults
      .filter(result => result.score > 0.3) // Filter out low-relevance results
      .map(result => ({
        title: result.entry.title || 'Unknown',
        content: result.entry.answer || result.entry.content || result.snippet,
        category: result.entry.category,
        score: result.score,
        isFAQ: result.entry.type === 'faq',
        question: result.entry.question
      }));

    // Generate response based on context
    const response = this.generateResponse(query, contexts);
    
    // Stream the response
    const words = response.split(' ');
    for (let i = 0; i < words.length; i++) {
      yield words[i] + (i < words.length - 1 ? ' ' : '');
      await this.delay(20); // Small delay for streaming effect
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
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

    // Filter contexts based on query relevance
    const relevantContexts = this.filterRelevantContexts(query, contexts);

    // Determine query type and generate appropriate response
    if (this.isHowToQuestion(queryLower)) {
      return this.generateHowToResponse(query, relevantContexts);
    } else if (this.isWhatIsQuestion(queryLower)) {
      return this.generateDefinitionResponse(query, relevantContexts);
    } else if (this.isCanQuestion(queryLower)) {
      return this.generateCanDoResponse(query, relevantContexts);
    } else if (this.isWhenQuestion(queryLower)) {
      return this.generateTimingResponse(query, relevantContexts);
    } else if (this.isComparisonQuestion(queryLower)) {
      return this.generateComparisonResponse(query, relevantContexts);
    } else {
      return this.generateGeneralResponse(query, relevantContexts);
    }
  }

  private filterRelevantContexts(query: string, contexts: RuleContext[]): RuleContext[] {
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/);
    
    // Filter out FAQ entries that don't match the query topic
    return contexts.filter(context => {
      if (!context.isFAQ) return true;
      
      // Check if FAQ question is relevant to the query
      if (context.question) {
        const questionLower = context.question.toLowerCase();
        // Check for keyword overlap
        const overlap = queryWords.some(word => 
          word.length > 3 && questionLower.includes(word)
        );
        return overlap || context.score > 0.6;
      }
      
      return context.score > 0.5;
    });
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

  private generateDefinitionResponse(query: string, contexts: RuleContext[]): string {
    const mainContext = contexts[0];
    
    // Prefer wiki content for definitions
    const wikiContext = contexts.find(c => !c.isFAQ);
    if (wikiContext) {
      let response = `**${wikiContext.title}**\n\n`;
      response += this.getFirstSentences(wikiContext.content, 2) + "\n\n";
      
      // Add key details
      const details = this.extractKeyDetails(wikiContext.content);
      if (details.length > 0) {
        response += "**Key Details:**\n";
        details.forEach(detail => {
          response += `• ${detail}\n`;
        });
        response += "\n";
      }
      
      return response;
    }
    
    // Fallback to FAQ if no wiki content
    return this.generateGeneralResponse(query, contexts);
  }

  private generateHowToResponse(query: string, contexts: RuleContext[]): string {
    // Prefer wiki content for how-to questions
    const wikiContext = contexts.find(c => !c.isFAQ);
    if (wikiContext) {
      let response = `Here's how ${this.extractTopic(query)} works:\n\n`;
      
      // Extract steps or key points
      const steps = this.extractSteps(wikiContext.content);
      if (steps.length > 0) {
        response += "**Process:**\n";
        steps.forEach((step, i) => {
          response += `${i + 1}. ${step}\n`;
        });
      } else {
        response += this.summarizeContent(wikiContext.content);
      }
      response += "\n";
      
      // Add relevant FAQ if available
      const faqContext = contexts.find(c => c.isFAQ && c.score > 0.5);
      if (faqContext) {
        response += "\n**Related FAQ:**\n";
        response += `*Q: ${faqContext.question}*\n`;
        response += `A: ${faqContext.content}\n`;
      }
      
      return response;
    }
    
    return this.generateGeneralResponse(query, contexts);
  }

  private generateCanDoResponse(query: string, contexts: RuleContext[]): string {
    const mainContext = contexts[0];
    
    // Look for specific FAQ that answers the question
    const faqContext = contexts.find(c => c.isFAQ && c.score > 0.5);
    if (faqContext && faqContext.question?.toLowerCase().includes('can')) {
      let response = "**Official Ruling:**\n\n";
      response += `*Q: ${faqContext.question}*\n\n`;
      response += `**A:** ${faqContext.content}\n`;
      return response;
    }
    
    // Use wiki content
    const answer = this.determineCanAnswer(query, mainContext.content);
    let response = answer ? "**Yes**, " : "**No**, ";
    response += this.extractRelevantRule(query, mainContext.content) + "\n";
    
    return response;
  }

  private generateTimingResponse(query: string, contexts: RuleContext[]): string {
    const mainContext = contexts[0];
    let response = `**Timing for ${this.extractTopic(query)}:**\n\n`;
    
    // Extract timing information
    const timingInfo = this.extractTimingInfo(mainContext.content);
    if (timingInfo.length > 0) {
      timingInfo.forEach(info => {
        response += `• ${info}\n`;
      });
    } else {
      response += this.summarizeContent(mainContext.content);
    }
    
    return response;
  }

  private generateComparisonResponse(query: string, contexts: RuleContext[]): string {
    if (contexts.length < 2) {
      return this.generateGeneralResponse(query, contexts);
    }
    
    let response = "**Comparison:**\n\n";
    response += `**${contexts[0].title}:**\n`;
    response += `• ${this.getFirstSentences(contexts[0].content, 1)}\n\n`;
    
    response += `**${contexts[1].title}:**\n`;
    response += `• ${this.getFirstSentences(contexts[1].content, 1)}\n\n`;
    
    return response;
  }

  private generateGeneralResponse(query: string, contexts: RuleContext[]): string {
    const mainContext = contexts[0];
    
    // For general faction questions, prefer wiki content
    if (query.toLowerCase().includes('creuss') || 
        query.toLowerCase().includes('faction') || 
        query.toLowerCase().includes('playing')) {
      const wikiContext = contexts.find(c => !c.isFAQ && c.category?.includes('Faction'));
      if (wikiContext) {
        let response = `**${wikiContext.title}**\n\n`;
        response += this.summarizeContent(wikiContext.content) + "\n\n";
        
        // Add faction tips
        response += "**Key Points:**\n";
        const tips = this.extractFactionTips(wikiContext.content);
        tips.forEach(tip => {
          response += `• ${tip}\n`;
        });
        
        return response;
      }
    }
    
    // For unit questions, prefer wiki content
    if (query.toLowerCase().includes('mech') || 
        query.toLowerCase().includes('unit')) {
      const wikiContext = contexts.find(c => !c.isFAQ && 
        (c.title.toLowerCase().includes('mech') || c.category?.includes('Unit')));
      if (wikiContext) {
        let response = `**${wikiContext.title}**\n\n`;
        response += this.summarizeContent(wikiContext.content) + "\n";
        return response;
      }
    }
    
    // Default response
    let response = `Based on **${mainContext.title}**:\n\n`;
    response += this.summarizeContent(mainContext.content) + "\n";
    
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

**Factions & Units:**
• "Tell me about the Creuss faction"
• "What are the Arborec abilities?"
• "What is a mech unit?"

**Strategy Cards:**
• "How does the Technology card work?"
• "When should I use Imperial?"

Just ask naturally, and I'll find the relevant rules!`;
  }

  private generateFallbackResponse(query: string): string {
    return `I couldn't find specific information about "${query}" in the rules database. 

Please try rephrasing your question or being more specific. For example:
• Instead of vague terms, use specific game terms
• Include the faction name if asking about faction abilities
• Specify the phase or timing if relevant

You can also type "help" to see example questions.`;
  }

  // Helper methods
  private extractTopic(query: string): string {
    const words = query.toLowerCase().replace(/[?.,!]/g, '').split(' ');
    const skipWords = ['how', 'do', 'does', 'to', 'i', 'the', 'a', 'an', 'work', 'works', 'what', 'is', 'are', 'should', 'know'];
    const topic = words.filter(w => !skipWords.includes(w)).join(' ');
    return topic || 'this';
  }

  private extractSteps(content: string): string[] {
    const lines = content.split(/[.!]\s+/);
    const steps = lines
      .filter(line => line.length > 20)
      .filter(line => /^\d|^[A-Z]|^After|^Before|^During|^First|^Then|^Next|^Finally/.test(line))
      .slice(0, 5);
    return steps;
  }

  private extractKeyDetails(content: string): string[] {
    const lines = content.split(/[.!]\s+/);
    return lines
      .filter(line => line.length > 20 && line.length < 150)
      .slice(0, 3)
      .map(line => line.replace(/^\W+/, ''));
  }

  private extractFactionTips(content: string): string[] {
    const tips = [];
    
    // Look for abilities
    if (content.toLowerCase().includes('ability') || content.toLowerCase().includes('abilities')) {
      const abilityMatch = content.match(/(?:ability|abilities)[^.]*\./gi);
      if (abilityMatch) {
        tips.push(abilityMatch[0].replace(/ability:?/i, '').trim());
      }
    }
    
    // Look for starting units
    if (content.toLowerCase().includes('starting')) {
      tips.push("Check faction sheet for starting units and technologies");
    }
    
    // Look for special rules
    if (content.toLowerCase().includes('special') || content.toLowerCase().includes('unique')) {
      tips.push("This faction has unique mechanics - read carefully");
    }
    
    return tips.slice(0, 3);
  }

  private summarizeContent(content: string): string {
    const sentences = content.split(/[.!?]\s+/);
    const summary = sentences
      .filter(s => s.length > 20)
      .slice(0, 3)
      .join('. ');
    return summary + (summary.endsWith('.') ? '' : '.');
  }

  private getFirstSentences(content: string, count: number): string {
    const sentences = content.split(/[.!?]\s+/);
    return sentences.slice(0, count).join('. ') + '.';
  }

  private extractTimingInfo(content: string): string[] {
    const timingKeywords = ['during', 'before', 'after', 'at the start', 'at the end', 'when', 'phase', 'step'];
    const lines = content.split(/[.!]\s+/);
    return lines
      .filter(line => timingKeywords.some(kw => line.toLowerCase().includes(kw)))
      .slice(0, 3);
  }

  private determineCanAnswer(query: string, content: string): boolean {
    const contentLower = content.toLowerCase();
    return !contentLower.includes('cannot') && 
           !contentLower.includes('may not') && 
           !contentLower.includes('prohibited');
  }

  private extractRelevantRule(query: string, content: string): string {
    const queryWords = query.toLowerCase().split(/\s+/);
    const sentences = content.split(/[.!?]\s+/);
    
    // Find most relevant sentence
    const relevant = sentences.find(sentence => {
      const sentenceLower = sentence.toLowerCase();
      return queryWords.some(word => word.length > 3 && sentenceLower.includes(word));
    });
    
    return relevant || this.getFirstSentences(content, 1);
  }
}

export const localChatService = new LocalChatService();