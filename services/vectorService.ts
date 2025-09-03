import { GoogleGenAI } from "@google/genai";

// Vector database entry interface
export interface VectorEntry {
    id: string;
    type: 'rule' | 'component' | 'faction';
    category: string;
    title: string;
    section: 'rules_reference' | 'notes' | 'related_topics' | 'full';
    content: string;
    metadata: {
        ruleNumber?: number;
        keywords: string[];
        crossReferences: string[];
        difficulty: 'basic' | 'intermediate' | 'advanced';
    };
    embedding?: number[];
}

export interface SearchResult {
    entry: VectorEntry;
    similarity: number;
    relevanceScore: number;
}

class VectorService {
    private entries: VectorEntry[] = [];
    private ai: GoogleGenAI;
    private isInitialized = false;

    constructor() {
        const API_KEY = import.meta.env.VITE_API_KEY || '';
        if (!API_KEY) {
            throw new Error("VITE_API_KEY required for vector embeddings");
        }
        this.ai = new GoogleGenAI({ apiKey: API_KEY });
    }

    async initialize(): Promise<void> {
        if (this.isInitialized) return;
        
        console.log('🔄 Initializing Vector Service...');
        
        try {
            // Load vector entries
            const response = await fetch('/data/vectorEntries.json');
            this.entries = await response.json();
            
            // Check if embeddings exist
            const hasEmbeddings = this.entries.some(entry => entry.embedding);
            
            if (!hasEmbeddings) {
                console.log('📊 No embeddings found, generating...');
                await this.generateAllEmbeddings();
            }
            
            this.isInitialized = true;
            console.log(`✅ Vector Service initialized with ${this.entries.length} entries`);
        } catch (error) {
            console.error('❌ Failed to initialize Vector Service:', error);
            throw error;
        }
    }

    /**
     * Generate embeddings for all entries using Google's embedding API
     */
    private async generateAllEmbeddings(): Promise<void> {
        const model = this.ai.getGenerativeModel({ model: "text-embedding-004" });
        const batchSize = 10; // Process in batches to avoid rate limits
        
        console.log(`🔄 Generating embeddings for ${this.entries.length} entries...`);
        
        for (let i = 0; i < this.entries.length; i += batchSize) {
            const batch = this.entries.slice(i, i + batchSize);
            
            console.log(`📊 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(this.entries.length / batchSize)}`);
            
            const embedPromises = batch.map(async (entry) => {
                try {
                    // Create rich text for embedding
                    const embeddingText = `${entry.title}\n\n${entry.content}`;
                    const result = await model.embedContent(embeddingText);
                    entry.embedding = result.embedding.values;
                    return entry;
                } catch (error) {
                    console.error(`❌ Failed to embed entry ${entry.id}:`, error);
                    return entry; // Return without embedding
                }
            });
            
            await Promise.all(embedPromises);
            
            // Small delay to respect rate limits
            if (i + batchSize < this.entries.length) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        
        // Save embeddings to file
        const fs = await import('fs');
        const path = await import('path');
        
        const dataPath = './data/vectorEntries.json';
        fs.writeFileSync(dataPath, JSON.stringify(this.entries, null, 2));
        
        console.log('✅ Embeddings generated and saved');
    }

    /**
     * Calculate cosine similarity between two vectors
     */
    private cosineSimilarity(a: number[], b: number[]): number {
        if (a.length !== b.length) return 0;
        
        let dotProduct = 0;
        let normA = 0;
        let normB = 0;
        
        for (let i = 0; i < a.length; i++) {
            dotProduct += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }
        
        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }

    /**
     * Calculate keyword-based relevance score
     */
    private keywordRelevance(query: string, entry: VectorEntry): number {
        const queryWords = new Set(query.toLowerCase().split(/\s+/).filter(w => w.length > 2));
        const entryKeywords = new Set(entry.metadata.keywords.map(k => k.toLowerCase()));
        const titleWords = new Set(entry.title.toLowerCase().split(/\s+/).filter(w => w.length > 2));
        
        let score = 0;
        
        // Score keyword matches
        for (const word of queryWords) {
            if (entryKeywords.has(word)) score += 3;
            if (titleWords.has(word)) score += 5;
            if (entry.content.toLowerCase().includes(word)) score += 1;
        }
        
        return score;
    }

    /**
     * Search for relevant rules using vector similarity
     */
    async search(query: string, options: {
        topK?: number;
        minSimilarity?: number;
        categories?: string[];
        sections?: string[];
        includeNotes?: boolean;
    } = {}): Promise<SearchResult[]> {
        await this.initialize();
        
        const {
            topK = 5,
            minSimilarity = 0.1,
            categories = [],
            sections = [],
            includeNotes = true
        } = options;
        
        // Generate query embedding
        const model = this.ai.getGenerativeModel({ model: "text-embedding-004" });
        const queryResult = await model.embedContent(query);
        const queryEmbedding = queryResult.embedding.values;
        
        // Filter entries based on options
        let filteredEntries = this.entries.filter(entry => {
            if (!includeNotes && entry.section === 'notes') return false;
            if (categories.length > 0 && !categories.includes(entry.category)) return false;
            if (sections.length > 0 && !sections.includes(entry.section)) return false;
            return entry.embedding && entry.embedding.length > 0;
        });
        
        // Calculate similarities and relevance scores
        const results: SearchResult[] = filteredEntries.map(entry => {
            const similarity = this.cosineSimilarity(queryEmbedding, entry.embedding!);
            const keywordScore = this.keywordRelevance(query, entry);
            
            // Combined relevance score (weighted)
            const relevanceScore = (similarity * 0.7) + (keywordScore * 0.3);
            
            return {
                entry,
                similarity,
                relevanceScore
            };
        });
        
        // Sort by relevance and filter by minimum similarity
        const sortedResults = results
            .filter(result => result.similarity >= minSimilarity)
            .sort((a, b) => b.relevanceScore - a.relevanceScore)
            .slice(0, topK);
        
        return sortedResults;
    }

    /**
     * Get all entries for a specific rule (main + notes + related)
     */
    async getCompleteRule(ruleId: string): Promise<VectorEntry[]> {
        await this.initialize();
        
        return this.entries.filter(entry => 
            entry.id.startsWith(`rule_${ruleId}_`) || 
            entry.id === `rule_${ruleId}`
        );
    }

    /**
     * Find similar rules based on an existing rule
     */
    async findSimilarRules(ruleId: string, topK: number = 3): Promise<SearchResult[]> {
        await this.initialize();
        
        const sourceEntry = this.entries.find(entry => 
            entry.id === `rule_${ruleId}_full` || entry.id === `rule_${ruleId}_main`
        );
        
        if (!sourceEntry || !sourceEntry.embedding) {
            return [];
        }
        
        const results: SearchResult[] = this.entries
            .filter(entry => entry.id !== sourceEntry.id && entry.embedding)
            .map(entry => ({
                entry,
                similarity: this.cosineSimilarity(sourceEntry.embedding!, entry.embedding!),
                relevanceScore: this.cosineSimilarity(sourceEntry.embedding!, entry.embedding!)
            }))
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, topK);
        
        return results;
    }

    /**
     * Get statistics about the vector database
     */
    getStats() {
        const stats = {
            totalEntries: this.entries.length,
            withEmbeddings: this.entries.filter(e => e.embedding).length,
            byType: {} as Record<string, number>,
            byCategory: {} as Record<string, number>,
            bySection: {} as Record<string, number>
        };
        
        this.entries.forEach(entry => {
            stats.byType[entry.type] = (stats.byType[entry.type] || 0) + 1;
            stats.byCategory[entry.category] = (stats.byCategory[entry.category] || 0) + 1;
            stats.bySection[entry.section] = (stats.bySection[entry.section] || 0) + 1;
        });
        
        return stats;
    }
}

export const vectorService = new VectorService();