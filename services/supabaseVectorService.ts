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
      console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
      
      // Load vector entries from Supabase
      const { data: entries, error, status, statusText } = await supabase
        .from('vector_entries')
        .select('*')
        .order('id');

      console.log('Supabase response status:', status, statusText);

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
          status,
          statusText
        });
        throw new Error(`Failed to load vector database: ${error.message} (${error.code})`);
      }

      if (!entries || entries.length === 0) {
        console.error('No entries returned from Supabase');
        throw new Error('Vector database is empty');
      }

      this.entries = entries;
      console.log(`✅ Loaded ${this.entries.length} vector entries from Supabase`);
      
      // Initialize embedding model
      console.log('🔄 Loading embedding model...');
      this.extractor = await pipeline('feature-extraction', MODEL_NAME);
      console.log('✅ Model ready');
      
      this.initialized = true;
      
    } catch (error) {
      console.error('Failed to initialize vector service:', error);
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
    
    console.log(`🔍 Searching for: "${query}" (using hybrid search)`);
    
    try {
      // Generate embedding for the query
      const queryEmbedding = await this.embedQuery(query);
      
      // Use the official Supabase hybrid search function
      const { data, error } = await supabase.rpc('hybrid_search', {
        query_text: query,
        query_embedding_array: queryEmbedding, // Pass as array
        match_count: limit,
        full_text_weight: 1.0,
        semantic_weight: 1.0,
        rrf_k: 50
      });

      if (error) {
        console.error('Hybrid search error:', error);
        // Fallback to local semantic search
        return this.fallbackSemanticSearch(query, queryEmbedding, limit);
      }

      if (!data || data.length === 0) {
        console.log('No hybrid results found');
        return [];
      }

      console.log(`Found ${data.length} hybrid results`);

      // Convert to SearchResult format
      const results: SearchResult[] = data.map((entry: VectorEntry, index: number) => {
        // Create snippet - use answer for FAQ entries, content for regular entries
        const textContent = entry.answer || entry.content || entry.text || '';
        const snippet = this.createSnippet(textContent, query);
        
        return {
          entry,
          score: 1.0 - (index * 0.1), // Score based on rank position
          snippet
        };
      });
      
      return results;
      
    } catch (err) {
      console.error('Hybrid search exception:', err);
      // Fallback to local semantic search
      const queryEmbedding = await this.embedQuery(query);
      return this.fallbackSemanticSearch(query, queryEmbedding, limit);
    }
  }

  // Fallback to local semantic search if hybrid fails
  private fallbackSemanticSearch(query: string, queryEmbedding: number[], limit: number): SearchResult[] {
    console.log('⚠️ Falling back to local semantic search');
    
    const results: SearchResult[] = [];
    
    for (const entry of this.entries) {
      const score = this.cosineSimilarity(queryEmbedding, entry.embedding);
      
      // Create snippet
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
    
    console.log(`Found ${topResults.length} fallback results with scores:`, 
      topResults.map(r => r.score.toFixed(3)));
    
    return topResults;
  }

  private createSnippet(text: string, query: string, maxLength: number = 200): string {
    const cleanText = text.replace(/\s+/g, ' ').trim();
    
    // Try to find query terms in text for context
    const queryWords = query.toLowerCase().split(' ');
    const textLower = cleanText.toLowerCase();
    
    let bestIndex = 0;
    for (const word of queryWords) {
      const index = textLower.indexOf(word);
      if (index > 0) {
        bestIndex = Math.max(0, index - 50);
        break;
      }
    }
    
    const snippet = cleanText.slice(bestIndex, bestIndex + maxLength);
    return snippet + (cleanText.length > bestIndex + maxLength ? '...' : '');
  }

  async getAllEntries(): Promise<VectorEntry[]> {
    if (!this.initialized) {
      await this.initialize();
    }
    return this.entries;
  }
}

// Export singleton instance
export const supabaseVectorService = new SupabaseVectorService();