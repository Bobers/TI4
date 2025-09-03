import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ollama API configuration
// Try different host options for WSL2 to Windows connection
const OLLAMA_HOSTS = [
  'http://192.168.240.1:11434',       // WSL2 Windows host IP
  'http://localhost:11434',           // If Ollama is running in WSL2
  'http://host.docker.internal:11434', // Docker Desktop method
  'http://172.17.0.1:11434',          // Common Docker bridge
];

let OLLAMA_URL = 'http://localhost:11434';

async function testOllamaConnection() {
  console.log('🔍 Testing Ollama connection...');
  
  for (const host of OLLAMA_HOSTS) {
    try {
      const response = await fetch(`${host}/api/tags`);
      if (response.ok) {
        OLLAMA_URL = host;
        console.log(`✅ Connected to Ollama at ${host}`);
        return true;
      }
    } catch (e) {
      // Silent fail, try next host
    }
  }
  
  console.log('❌ Could not connect to Ollama. Please ensure:');
  console.log('   1. Ollama is installed and running');
  console.log('   2. Run: ollama pull nomic-embed-text');
  console.log('   3. If on WSL2, Ollama should be running on Windows');
  return false;
}

async function generateEmbedding(text) {
  const response = await fetch(`${OLLAMA_URL}/api/embeddings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'nomic-embed-text',
      prompt: text
    })
  });
  
  if (!response.ok) {
    throw new Error(`Ollama API error: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.embedding;
}

async function generateAllEmbeddings() {
  // Test connection first
  if (!await testOllamaConnection()) {
    process.exit(1);
  }
  
  console.log('\n🚀 Starting embedding generation with Ollama...\n');
  
  // Load vector entries
  const entriesPath = path.join(__dirname, '../data/vectorEntries.json');
  if (!fs.existsSync(entriesPath)) {
    console.error('❌ vectorEntries.json not found. Run vectorDbSetup.js first.');
    process.exit(1);
  }
  
  const entries = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
  console.log(`📊 Loaded ${entries.length} entries`);
  
  // Check existing embeddings
  const withEmbeddings = entries.filter(e => e.embedding && e.embedding.length > 0);
  const needEmbeddings = entries.filter(e => !e.embedding || e.embedding.length === 0);
  
  console.log(`✅ Entries with embeddings: ${withEmbeddings.length}`);
  console.log(`🔄 Entries needing embeddings: ${needEmbeddings.length}`);
  
  if (needEmbeddings.length === 0) {
    console.log('🎉 All entries already have embeddings!');
    return;
  }
  
  // Process in batches
  const batchSize = 5;
  let processed = 0;
  let failed = 0;
  
  for (let i = 0; i < needEmbeddings.length; i += batchSize) {
    const batch = needEmbeddings.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(needEmbeddings.length / batchSize);
    
    console.log(`\n📦 Processing batch ${batchNum}/${totalBatches}`);
    
    for (const entry of batch) {
      try {
        // Create rich text for embedding
        const embeddingText = `
Section: ${entry.section}
Category: ${entry.category}
${entry.title ? `Title: ${entry.title}` : ''}

Content:
${entry.content}

Keywords: ${entry.metadata?.keywords ? entry.metadata.keywords.join(', ') : ''}
        `.trim();
        
        process.stdout.write(`  Embedding: ${entry.title || entry.section.slice(0, 50)}... `);
        
        const embedding = await generateEmbedding(embeddingText);
        entry.embedding = embedding;
        processed++;
        
        console.log('✅');
        
        // Small delay to avoid overwhelming the API
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.log('❌');
        console.error(`    Error: ${error.message}`);
        failed++;
        entry.embedding = []; // Empty embedding to mark as attempted
      }
    }
    
    // Save progress after each batch
    const allEntries = [...withEmbeddings, ...needEmbeddings];
    fs.writeFileSync(entriesPath, JSON.stringify(allEntries, null, 2));
    console.log(`💾 Saved progress (${processed} processed, ${failed} failed)`);
  }
  
  // Final statistics
  console.log('\n' + '='.repeat(60));
  console.log('📊 Embedding Generation Complete!');
  console.log('='.repeat(60));
  console.log(`✅ Successfully processed: ${processed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📁 Total entries with embeddings: ${withEmbeddings.length + processed}`);
  console.log('\n✨ Your vector database is ready for use!');
}

// Run the script
generateAllEmbeddings().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});