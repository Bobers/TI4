import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline, env } from '@xenova/transformers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure for Node.js environment
env.localURL = 'node_modules/@xenova/transformers/';
env.allowRemoteModels = true;
env.allowLocalModels = false;

const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';

// Test queries
const TEST_QUERIES = [
  "How do I win the game?",
  "What happens during the status phase?",
  "How does space combat work?",
  "Can I use bombardment against ground forces?",
  "How do command tokens work?",
  "What is a tactical action?",
];

function cosineSimilarity(a, b) {
  if (a.length !== b.length) return 0;
  
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

async function testVectorSearch() {
  console.log('🧪 Testing Vector Search System\n');
  console.log('=' .repeat(60));
  
  // Load vector entries
  const entriesPath = path.join(__dirname, '../data/vectorEntries.json');
  if (!fs.existsSync(entriesPath)) {
    console.error('❌ vectorEntries.json not found');
    process.exit(1);
  }
  
  let entries = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
  
  // Check if embeddings exist
  const withEmbeddings = entries.filter(e => e.embedding && e.embedding.length > 0);
  
  if (withEmbeddings.length === 0) {
    console.error('❌ No embeddings found. Please run:');
    console.error('   node scripts/generateEmbeddingsOllama.js');
    console.error('\nMake sure Ollama is running with nomic-embed-text model');
    process.exit(1);
  }
  
  console.log(`✅ Loaded ${withEmbeddings.length} entries with embeddings`);
  console.log(`📊 Embedding dimensions: ${withEmbeddings[0].embedding.length}`);
  
  // Initialize the model
  console.log('\n🔄 Loading embedding model...');
  const extractor = await pipeline('feature-extraction', MODEL_NAME);
  console.log('✅ Model loaded\n');
  
  // Test each query
  for (const query of TEST_QUERIES) {
    console.log('=' .repeat(60));
    console.log(`🔍 Query: "${query}"`);
    console.log('-' .repeat(60));
    
    // Generate query embedding
    const output = await extractor(query, { pooling: 'mean', normalize: true });
    const queryEmbedding = Array.from(output.data);
    
    // Calculate similarities
    const results = [];
    for (const entry of withEmbeddings) {
      const score = cosineSimilarity(queryEmbedding, entry.embedding);
      results.push({ entry, score });
    }
    
    // Sort and get top 3
    results.sort((a, b) => b.score - a.score);
    const top3 = results.slice(0, 3);
    
    console.log('\n📋 Top 3 Results:');
    
    top3.forEach((result, i) => {
      console.log(`\n  ${i + 1}. Score: ${result.score.toFixed(4)}`);
      console.log(`     Section: ${result.entry.section}`);
      console.log(`     Category: ${result.entry.category}`);
      if (result.entry.title) {
        console.log(`     Title: ${result.entry.title}`);
      }
      console.log(`     Preview: ${result.entry.content.substring(0, 100)}...`);
    });
    
    console.log();
  }
  
  // Summary statistics
  console.log('=' .repeat(60));
  console.log('📊 Search Quality Metrics');
  console.log('=' .repeat(60));
  
  // Test embedding consistency
  const testText = "This is a test sentence for embedding consistency";
  const embedding1 = await extractor(testText, { pooling: 'mean', normalize: true });
  const embedding2 = await extractor(testText, { pooling: 'mean', normalize: true });
  const consistency = cosineSimilarity(Array.from(embedding1.data), Array.from(embedding2.data));
  
  console.log(`✅ Embedding consistency: ${consistency.toFixed(6)} (should be ~1.0)`);
  console.log(`✅ Database entries: ${withEmbeddings.length}`);
  console.log(`✅ Embedding dimensions: ${withEmbeddings[0].embedding.length}`);
  console.log(`✅ Model: ${MODEL_NAME}`);
  
  console.log('\n🎉 Vector search test complete!');
}

// Run the test
testVectorSearch().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});