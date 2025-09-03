import { supabase, type VectorEntry } from '../lib/supabase';
import { pipeline, env } from '@xenova/transformers';

// Configure Transformers.js for client-side use
env.allowLocalModels = false;
env.useBrowserCache = true;

// Lightweight model for client-side embeddings
const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';

export interface SearchResult {
  entry: VectorEntry;
  score: number;
  snippet: string;
}

class SupabaseVectorService {
  private entries: VectorEntry[] = [];
  private extractor: any = null;
  private initialized = false;

  async initialize() {
    if (this.initialized) return;

    try {
      console.log('🔄 Loading vector database from Supabase...');
      
      // Load vector entries from Supabase
      const { data: entries, error } = await supabase
        .from('vector_entries')
        .select('*')
        .order('id');

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(`Failed to load vector database: ${error.message}`);
      }

      if (!entries || entries.length === 0) {
        throw new Error('No vector entries found in database');
      }

      this.entries = entries;
      
      console.log(`✅ Loaded ${this.entries.length} vector entries from Supabase`);
      
      // Initialize the embedding model for queries
      console.log('🔄 Loading embedding model...');
      this.extractor = await pipeline('feature-extraction', MODEL_NAME);
      console.log('✅ Model ready');
      
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize Supabase vector service:', error);
      throw error;
    }
  }

  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
      console.warn('Embedding dimension mismatch:', a.length, 'vs', b.length);
      return 0;
    }
    
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    
    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    
    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  private async embedQuery(text: string): Promise<number[]> {
    if (!this.extractor) {
      throw new Error('Model not initialized');
    }
    
    const output = await this.extractor(text, { 
      pooling: 'mean',
      normalize: true 
    });
    
    return Array.from(output.data);
  }

  async search(query: string, limit: number = 5): Promise<SearchResult[]> {
    if (!this.initialized) {
      await this.initialize();
    }
    
    console.log(`🔍 Searching for: "${query}"`);
    
    // Generate embedding for the query
    const queryEmbedding = await this.embedQuery(query);
    
    // Calculate similarities
    const results: SearchResult[] = [];
    
    for (const entry of this.entries) {
      const score = this.cosineSimilarity(queryEmbedding, entry.embedding);
      
      // Create snippet - use answer for FAQ entries, content for regular entries
      const textContent = entry.answer || entry.content || entry.text || '';
      const snippet = this.createSnippet(textContent, query);
      
      results.push({
        entry,
        score,
        snippet
      });
    }
    
    // Sort by score and return top results
    results.sort((a, b) => b.score - a.score);
    
    const topResults = results.slice(0, limit);
    
    console.log(`Found ${topResults.length} results with scores:`, 
      topResults.map(r => r.score.toFixed(3)));
    
    return topResults;
  }

  async getAllEntries(): Promise<VectorEntry[]> {
    if (!this.initialized) {
      await this.initialize();
    }
    return this.entries;
  }

  private createSnippet(content: string, query: string, maxLength: number = 200): string {
    // Try to find query terms in content
    const queryWords = query.toLowerCase().split(/\s+/);
    const contentLower = content.toLowerCase();
    
    let bestStart = 0;
    let bestScore = 0;
    
    // Find the best position that contains most query words
    for (let i = 0; i < content.length - maxLength; i++) {
      const snippet = contentLower.substring(i, i + maxLength);
      let score = 0;
      
      for (const word of queryWords) {
        if (snippet.includes(word)) {
          score++;
        }
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestStart = i;
      }
    }
    
    // Create snippet
    let snippet = content.substring(bestStart, bestStart + maxLength);
    
    // Try to end at a word boundary
    const lastSpace = snippet.lastIndexOf(' ');
    if (lastSpace > maxLength * 0.8) {
      snippet = snippet.substring(0, lastSpace);
    }
    
    // Add ellipsis if needed
    if (bestStart > 0) snippet = '...' + snippet;
    if (bestStart + maxLength < content.length) snippet = snippet + '...';
    
    return snippet.trim();
  }
}

export const supabaseVectorService = new SupabaseVectorService();