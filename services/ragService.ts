import { RULEBOOK_DATA } from '../data/rulebook';

class RAGService {
    private chunks: string[] = [];

    constructor() {
        console.log("Initializing RAG Service with keyword-based search...");
        
        const CHUNK_SIZE_SENTENCES = 8;
        const CHUNK_OVERLAP_SENTENCES = 2;
        
        const textChunks: string[] = [];
        const documents = RULEBOOK_DATA
            .split(/--- START OF DOCUMENT: |--- END OF DOCUMENT: /)
            .map(s => s.trim())
            .filter(s => s && s.length > 100);

        for (const doc of documents) {
            const lines = doc.split('\n');
            const docName = lines[0];
            const content = lines.slice(1).join('\n');
            
            const sentences = content
                .replace(/(\r\n|\n|\r)/gm, " ")
                .replace(/\s+/g, " ")
                .match(/[^.!?]+[.!?]+(\s|$)/g) || [];
            
            if (sentences.length === 0) continue;
            
            const step = CHUNK_SIZE_SENTENCES - CHUNK_OVERLAP_SENTENCES;
            
            for (let i = 0; i < sentences.length; i += step) {
                const chunkSentences = sentences.slice(i, i + CHUNK_SIZE_SENTENCES);
                if (chunkSentences.length > 0) {
                    const chunkText = chunkSentences.map(s => s.trim()).join(' ');
                    textChunks.push(`Source: ${docName}\n\n${chunkText}`);
                }
            }
        }
        
        this.chunks = textChunks.filter(chunk => chunk.split(' ').length > 20);
        console.log(`RAG Service Initialized with ${this.chunks.length} text chunks.`);
    }

    /**
     * Retrieves relevant context chunks from the rulebook based on a keyword search.
     * This method is synchronous and does not make any API calls.
     * @param query The user's search query.
     * @param topK The number of top chunks to return.
     * @returns An array of strings, where each string is a relevant chunk of the rulebook.
     */
    getContext(query: string, topK = 5): string[] {
        const queryWords = new Set(query.toLowerCase().split(/\s+/).filter(w => w.length > 2));
        if (queryWords.size === 0) {
            return this.chunks.slice(0, topK); // Return top chunks if query is empty
        }

        const scoredChunks = this.chunks.map(chunk => {
            const lowerChunk = chunk.toLowerCase();
            let score = 0;
            for (const word of queryWords) {
                if (lowerChunk.includes(word)) {
                    score++;
                }
            }
            return { content: chunk, score };
        });

        scoredChunks.sort((a, b) => b.score - a.score);
        
        const topChunks = scoredChunks.slice(0, topK)
            .filter(c => c.score > 0) // Only return chunks that actually matched
            .map(chunk => chunk.content);
        
        return topChunks;
    }
}

export const ragService = new RAGService();