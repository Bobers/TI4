import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check for API key
const API_KEY = process.env.VITE_API_KEY || process.env.API_KEY;
if (!API_KEY) {
    console.error('❌ Error: API key not found');
    console.log('Please set VITE_API_KEY environment variable or create .env file with:');
    console.log('VITE_API_KEY=your_gemini_api_key_here');
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

async function generateEmbeddings() {
    console.log('🚀 Starting embedding generation...\n');
    
    // Load vector entries
    const entriesPath = path.join(__dirname, '../data/vectorEntries.json');
    if (!fs.existsSync(entriesPath)) {
        console.error('❌ vectorEntries.json not found. Run vectorDbSetup.js first.');
        process.exit(1);
    }
    
    const entries = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
    console.log(`📊 Loaded ${entries.length} entries`);
    
    // Check how many already have embeddings
    const withEmbeddings = entries.filter(entry => entry.embedding && entry.embedding.length > 0);
    const needEmbeddings = entries.filter(entry => !entry.embedding || entry.embedding.length === 0);
    
    console.log(`✅ Entries with embeddings: ${withEmbeddings.length}`);
    console.log(`🔄 Entries needing embeddings: ${needEmbeddings.length}`);
    
    if (needEmbeddings.length === 0) {
        console.log('🎉 All entries already have embeddings!');
        return;
    }
    
    const model = ai.getGenerativeModel({ model: "text-embedding-004" });
    const batchSize = 5; // Conservative batch size for rate limiting
    
    console.log(`\n🔄 Generating embeddings in batches of ${batchSize}...\n`);
    
    for (let i = 0; i < needEmbeddings.length; i += batchSize) {
        const batch = needEmbeddings.slice(i, i + batchSize);
        const batchNum = Math.floor(i / batchSize) + 1;
        const totalBatches = Math.ceil(needEmbeddings.length / batchSize);
        
        console.log(`📦 Processing batch ${batchNum}/${totalBatches} (${batch.length} entries)`);
        
        const embedPromises = batch.map(async (entry, batchIndex) => {
            try {
                // Create rich text for embedding including metadata
                const embeddingText = `
Title: ${entry.title}
Category: ${entry.category}
Section: ${entry.section}
Content: ${entry.content}
Keywords: ${entry.metadata.keywords.join(', ')}
`.trim();
                
                const result = await model.embedContent(embeddingText);
                entry.embedding = result.embedding.values;
                
                console.log(`  ✅ ${i + batchIndex + 1}/${needEmbeddings.length}: ${entry.title}`);
                return true;
            } catch (error) {
                console.error(`  ❌ ${i + batchIndex + 1}/${needEmbeddings.length}: Failed to embed "${entry.title}":`, error.message);
                return false;
            }
        });
        
        const results = await Promise.all(embedPromises);
        const successful = results.filter(Boolean).length;
        console.log(`  📊 Batch ${batchNum} complete: ${successful}/${batch.length} successful\n`);
        
        // Rate limiting delay
        if (i + batchSize < needEmbeddings.length) {
            console.log('⏳ Waiting 2 seconds to respect rate limits...');
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
    
    // Save updated entries with embeddings
    fs.writeFileSync(entriesPath, JSON.stringify(entries, null, 2));
    
    const finalWithEmbeddings = entries.filter(entry => entry.embedding && entry.embedding.length > 0);
    console.log(`\n🎉 Embedding generation complete!`);
    console.log(`📊 Total entries with embeddings: ${finalWithEmbeddings.length}/${entries.length}`);
    console.log(`💾 Updated vector database saved to: ${entriesPath}`);
    
    // Generate some statistics
    const embeddingDimensions = finalWithEmbeddings[0]?.embedding?.length || 0;
    const totalSize = entries.length * embeddingDimensions * 4; // 4 bytes per float
    
    console.log(`\n📈 Vector Database Stats:`);
    console.log(`- Embedding dimensions: ${embeddingDimensions}`);
    console.log(`- Estimated size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`- Ready for semantic search! 🚀`);
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    generateEmbeddings().catch(error => {
        console.error('❌ Fatal error:', error);
        process.exit(1);
    });
}