import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from '@xenova/transformers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';

class NodeVectorService {
  constructor() {
    this.entries = [];
    this.extractor = null;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;

    try {
      console.log('🔄 Loading vector database...');
      
      // Load pre-computed embeddings
      const vectorPath = path.join(__dirname, '../data/vectorEntries.json');
      const data = fs.readFileSync(vectorPath, 'utf8');
      this.entries = JSON.parse(data);
      
      // Filter out entries without embeddings
      this.entries = this.entries.filter(e => e.embedding && e.embedding.length > 0);
      
      console.log(`✅ Loaded ${this.entries.length} vector entries`);
      
      // Initialize the embedding model for queries
      console.log('🔄 Loading embedding model...');
      this.extractor = await pipeline('feature-extraction', MODEL_NAME);
      console.log('✅ Model ready');
      
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize vector service:', error);
      throw error;
    }
  }

  cosineSimilarity(a, b) {
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

  async embedQuery(text) {
    if (!this.extractor) {
      throw new Error('Model not initialized');
    }
    
    const output = await this.extractor(text, { 
      pooling: 'mean',
      normalize: true 
    });
    
    return Array.from(output.data);
  }

  async search(query, limit = 5) {
    if (!this.initialized) {
      await this.initialize();
    }
    
    console.log(`🔍 Searching for: "${query}"`);
    
    // Generate embedding for the query
    const queryEmbedding = await this.embedQuery(query);
    
    // Calculate similarities
    const results = [];
    
    for (const entry of this.entries) {
      const score = this.cosineSimilarity(queryEmbedding, entry.embedding);
      results.push({ entry, score });
    }
    
    // Sort by score and return top results
    results.sort((a, b) => b.score - a.score);
    
    const topResults = results.slice(0, limit);
    
    console.log(`Found ${topResults.length} results with scores:`, 
      topResults.map(r => r.score.toFixed(3)));
    
    return topResults;
  }

  async getAllEntries() {
    if (!this.initialized) {
      await this.initialize();
    }
    return this.entries;
  }
}

export const vectorService = new NodeVectorService();