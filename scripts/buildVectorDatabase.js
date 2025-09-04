import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@xenova/transformers';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Model for embeddings
const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';
let extractor;

// Initialize the embedding model
async function initModel() {
  console.log('🔄 Loading embedding model...');
  extractor = await pipeline('feature-extraction', MODEL_NAME);
  console.log('✅ Model loaded');
}

// Generate embedding for text
async function generateEmbedding(text) {
  const output = await extractor(text, { 
    pooling: 'mean',
    normalize: true 
  });
  return Array.from(output.data);
}

// Process a single markdown file
async function processWikiFile(filePath, category) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath, '.md');
  
  // Extract title (first # heading or filename)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : filename.replace(/_/g, ' ');
  
  // Clean content for embedding
  const cleanContent = content
    .replace(/^#+\s+/gm, '') // Remove markdown headers
    .replace(/\*\*/g, '') // Remove bold
    .replace(/\*/g, '') // Remove italics
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\n{3,}/g, '\n\n') // Normalize line breaks
    .trim();
  
  // Create searchable text
  const searchableText = `${title}\n${cleanContent}`.substring(0, 8000); // Limit size
  
  // Generate embedding
  const embedding = await generateEmbedding(searchableText);
  
  return {
    title,
    content: cleanContent.substring(0, 5000), // Store truncated content
    text: searchableText,
    category,
    type: 'wiki',
    source: 'local_wiki',
    file_path: filePath.replace(/^.*\/wiki\//, 'wiki/'),
    embedding
  };
}

// Process all wiki files
async function processWikiLayer() {
  console.log('\n📚 Processing Wiki Layer (Layer 1)...');
  
  const wikiDir = path.join(__dirname, '../../wiki');
  const entries = [];
  
  // Define categories and their directories
  const categories = [
    { dir: 'factions', name: 'Factions' },
    { dir: 'rules', name: 'Rules' },
    { dir: 'components', name: 'Components' },
    { dir: 'technologies', name: 'Technologies' },
    { dir: 'game_mechanics', name: 'Game Mechanics' },
    { dir: 'variants', name: 'Variants' },
    { dir: 'expansions', name: 'Expansions' }
  ];
  
  for (const { dir, name } of categories) {
    const categoryPath = path.join(wikiDir, dir);
    if (!fs.existsSync(categoryPath)) continue;
    
    console.log(`\n  Processing ${name}...`);
    const files = await walkDirectory(categoryPath);
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        try {
          const entry = await processWikiFile(file, name);
          entries.push(entry);
          console.log(`    ✅ ${path.basename(file)}`);
        } catch (error) {
          console.error(`    ❌ Error processing ${file}:`, error.message);
        }
      }
    }
  }
  
  // Process root level files
  const rootFiles = fs.readdirSync(wikiDir)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(wikiDir, f));
  
  for (const file of rootFiles) {
    try {
      const entry = await processWikiFile(file, 'General');
      entries.push(entry);
      console.log(`  ✅ ${path.basename(file)}`);
    } catch (error) {
      console.error(`  ❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n✅ Processed ${entries.length} wiki files`);
  return entries;
}

// Walk directory recursively
async function walkDirectory(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...await walkDirectory(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Process FAQ for testing
async function processFAQ() {
  console.log('\n🧪 Processing FAQ for testing...');
  
  const faqPath = path.join(__dirname, '../data/faqEntries.json');
  if (!fs.existsSync(faqPath)) {
    console.log('  ⚠️ FAQ file not found, skipping');
    return [];
  }
  
  const faqData = JSON.parse(fs.readFileSync(faqPath, 'utf-8'));
  const entries = [];
  
  for (const faq of faqData.slice(0, 50)) { // Process first 50 FAQs for testing
    const searchableText = `${faq.question}\n${faq.answer}`;
    const embedding = await generateEmbedding(searchableText);
    
    entries.push({
      title: faq.question,
      content: faq.answer,
      text: searchableText,
      category: faq.category || 'FAQ',
      type: 'faq',
      source: 'official_faq',
      embedding
    });
  }
  
  console.log(`✅ Processed ${entries.length} FAQ entries`);
  return entries;
}

// Upload to Supabase
async function uploadToSupabase(entries) {
  console.log('\n📤 Uploading to Supabase...');
  
  // Clear existing entries
  console.log('  🗑️ Clearing existing entries...');
  const { error: deleteError } = await supabase
    .from('vector_entries')
    .delete()
    .neq('id', 0); // Delete all
  
  if (deleteError) {
    console.error('  ❌ Error clearing entries:', deleteError);
    return;
  }
  
  // Upload in batches
  const batchSize = 50;
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    
    const { data, error } = await supabase
      .from('vector_entries')
      .insert(batch);
    
    if (error) {
      console.error(`  ❌ Error uploading batch ${i / batchSize + 1}:`, error);
    } else {
      console.log(`  ✅ Uploaded batch ${i / batchSize + 1} (${batch.length} entries)`);
    }
  }
  
  console.log(`\n✅ Upload complete! Total entries: ${entries.length}`);
}

// Test the vector search
async function testVectorSearch(testQueries) {
  console.log('\n🧪 Testing Vector Search...');
  
  for (const query of testQueries) {
    console.log(`\n  Query: "${query}"`);
    
    // Generate query embedding
    const queryEmbedding = await generateEmbedding(query);
    
    // Search using Supabase RPC
    const { data, error } = await supabase.rpc('hybrid_search', {
      query_text: query,
      query_embedding_array: queryEmbedding,
      match_count: 3,
      full_text_weight: 1.0,
      semantic_weight: 1.0,
      rrf_k: 50
    });
    
    if (error) {
      console.error('  ❌ Search error:', error);
      continue;
    }
    
    console.log(`  Found ${data.length} results:`);
    data.forEach((result, i) => {
      console.log(`    ${i + 1}. ${result.title} (${result.type})`);
    });
  }
}

// Main function
async function main() {
  try {
    // Initialize model
    await initModel();
    
    // Process Layer 1: Wiki
    const wikiEntries = await processWikiLayer();
    
    // Process FAQ for testing
    const faqEntries = await processFAQ();
    
    // Combine all entries
    const allEntries = [...wikiEntries, ...faqEntries];
    
    // Upload to Supabase
    await uploadToSupabase(allEntries);
    
    // Test with sample queries
    const testQueries = [
      "How does space combat work?",
      "What are the Arborec faction abilities?",
      "Can fighters be produced during combat?",
      "How many trade goods do I get?",
      "What happens during the status phase?"
    ];
    
    await testVectorSearch(testQueries);
    
    console.log('\n🎉 Vector database build complete!');
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the script
main();