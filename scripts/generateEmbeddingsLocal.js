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

// Use the same model that will be used for queries
const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';

async function generateAllEmbeddings() {
  console.log('🚀 Starting local embedding generation with Transformers.js...\n');
  
  // Load vector entries
  const entriesPath = path.join(__dirname, '../data/vectorEntries.json');
  if (!fs.existsSync(entriesPath)) {
    console.error('❌ vectorEntries.json not found. Run vectorDbSetup.js first.');
    process.exit(1);
  }
  
  const entries = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
  console.log(`📊 Loaded ${entries.length} entries`);
  
  // Initialize the model
  console.log('🔄 Loading embedding model...');
  const extractor = await pipeline('feature-extraction', MODEL_NAME);
  console.log('✅ Model loaded\n');
  
  // Process all entries
  let processed = 0;
  let failed = 0;
  
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    
    try {
      // Create rich text for embedding
      const embeddingText = `
Section: ${entry.section}
Category: ${entry.category || ''}
${entry.title ? `Title: ${entry.title}` : ''}

Content:
${entry.content}

Keywords: ${entry.metadata?.keywords ? entry.metadata.keywords.join(', ') : ''}
      `.trim();
      
      // Show progress
      if (i % 10 === 0) {
        console.log(`\n📦 Progress: ${i}/${entries.length} (${Math.round(i/entries.length*100)}%)`);
      }
      process.stdout.write(`  ${entry.title || entry.section.slice(0, 30)}... `);
      
      // Generate embedding
      const output = await extractor(embeddingText, { 
        pooling: 'mean',
        normalize: true 
      });
      
      entry.embedding = Array.from(output.data);
      processed++;
      
      console.log('✅');
    } catch (error) {
      console.log('❌');
      console.error(`    Error: ${error.message}`);
      failed++;
      entry.embedding = []; // Empty embedding to mark as attempted
    }
  }
  
  // Save all embeddings
  console.log('\n💾 Saving embeddings...');
  fs.writeFileSync(entriesPath, JSON.stringify(entries, null, 2));
  
  // Final statistics
  console.log('\n' + '='.repeat(60));
  console.log('📊 Embedding Generation Complete!');
  console.log('='.repeat(60));
  console.log(`✅ Successfully processed: ${processed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📁 Embedding dimensions: ${entries[0]?.embedding?.length || 'unknown'}`);
  console.log(`🎯 Model: ${MODEL_NAME}`);
  console.log('\n✨ Your vector database is ready for deployment!');
}

// Run the script
generateAllEmbeddings().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});