import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@xenova/transformers';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase with service key for admin operations
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY
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

// Clean the entire database
async function cleanDatabase() {
  console.log('\n🧹 CLEANING DATABASE...');
  
  try {
    // Get count of existing entries
    const { count: beforeCount } = await supabase
      .from('vector_entries')
      .select('*', { count: 'exact', head: true });
    
    console.log(`  📊 Found ${beforeCount || 0} existing entries`);
    
    if (beforeCount > 0) {
      // Delete all existing entries
      console.log('  🗑️  Deleting all entries...');
      const { error } = await supabase
        .from('vector_entries')
        .delete()
        .gte('id', 0); // Delete all rows
      
      if (error) {
        console.error('  ❌ Error cleaning database:', error);
        throw error;
      }
      
      console.log('  ✅ Database cleaned successfully');
    } else {
      console.log('  ℹ️  Database is already empty');
    }
    
  } catch (error) {
    console.error('❌ Failed to clean database:', error);
    throw error;
  }
}

// Process a single markdown file
async function processWikiFile(filePath, category) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath, '.md');
  
  // Extract title (first # heading or filename)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : filename.replace(/_/g, ' ').replace(/-/g, ' ');
  
  // Clean content for embedding
  const cleanContent = content
    .replace(/^#+\s+/gm, '') // Remove markdown headers
    .replace(/\*\*/g, '') // Remove bold
    .replace(/\*/g, '') // Remove italics
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\n{3,}/g, '\n\n') // Normalize line breaks
    .trim();
  
  // Create searchable text (combine title and content for better search)
  const searchableText = `${title}\n${cleanContent}`.substring(0, 8000);
  
  // Generate embedding
  const embedding = await generateEmbedding(searchableText);
  
  return {
    title,
    content: cleanContent.substring(0, 5000),
    text: searchableText,
    category,
    type: 'wiki',
    source: 'local_wiki',
    embedding
  };
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
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Process all wiki files
async function processWikiFiles() {
  console.log('\n📚 PROCESSING WIKI FILES...');
  
  const wikiDir = path.join(__dirname, '../../wiki');
  const entries = [];
  
  // Define categories and their directories
  const categories = [
    { dir: 'factions/base_game', name: 'Base Game Factions' },
    { dir: 'factions/pok', name: 'POK Factions' },
    { dir: 'factions/codex', name: 'Codex Factions' },
    { dir: 'factions/thunders_edge', name: 'Thunder\'s Edge Factions' },
    { dir: 'factions', name: 'Factions', root: true },
    { dir: 'rules', name: 'Rules' },
    { dir: 'components/strategy_cards', name: 'Strategy Cards' },
    { dir: 'components/units', name: 'Units' },
    { dir: 'components', name: 'Components', root: true },
    { dir: 'technologies', name: 'Technologies' },
    { dir: 'game_mechanics', name: 'Game Mechanics' },
    { dir: 'variants', name: 'Variants' },
    { dir: 'expansions', name: 'Expansions' }
  ];
  
  for (const { dir, name, root } of categories) {
    const categoryPath = path.join(wikiDir, dir);
    if (!fs.existsSync(categoryPath)) {
      console.log(`  ⚠️  Directory not found: ${dir}`);
      continue;
    }
    
    console.log(`\n  📁 Processing ${name}...`);
    
    let files;
    if (root) {
      // Only process files in the root of this directory, not subdirectories
      files = fs.readdirSync(categoryPath)
        .filter(f => f.endsWith('.md'))
        .map(f => path.join(categoryPath, f));
    } else {
      files = await walkDirectory(categoryPath);
    }
    
    for (const file of files) {
      try {
        const entry = await processWikiFile(file, name);
        entries.push(entry);
        console.log(`    ✅ ${path.basename(file)}`);
      } catch (error) {
        console.error(`    ❌ Error processing ${file}:`, error.message);
      }
    }
  }
  
  // Process root level files
  const rootFiles = fs.readdirSync(wikiDir)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(wikiDir, f));
  
  console.log('\n  📁 Processing root files...');
  for (const file of rootFiles) {
    try {
      const entry = await processWikiFile(file, 'General');
      entries.push(entry);
      console.log(`    ✅ ${path.basename(file)}`);
    } catch (error) {
      console.error(`    ❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n✅ Processed ${entries.length} wiki files`);
  return entries;
}

// Process FAQ entries - DISABLED: FAQ should be separate from main content
async function processFAQEntries() {
  console.log('\n📋 FAQ PROCESSING SKIPPED (FAQ is for testing only)');
  return [];
  
  // Original code kept for reference but disabled
  /*
  const faqPath = path.join(__dirname, '../data/faqEntries.json');
  if (!fs.existsSync(faqPath)) {
    console.log('  ⚠️  FAQ file not found');
    return [];
  }
  
  const faqData = JSON.parse(fs.readFileSync(faqPath, 'utf-8'));
  // ... rest of the original code
  */
}

// Upload entries to Supabase
async function uploadToSupabase(entries) {
  console.log('\n📤 UPLOADING TO SUPABASE...');
  console.log(`  📊 Total entries to upload: ${entries.length}`);
  
  const batchSize = 50;
  let totalUploaded = 0;
  
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(entries.length / batchSize);
    
    try {
      const { data, error } = await supabase
        .from('vector_entries')
        .insert(batch)
        .select();
      
      if (error) {
        console.error(`  ❌ Error uploading batch ${batchNum}/${totalBatches}:`, error);
        console.error('    Error details:', error.message);
      } else {
        totalUploaded += batch.length;
        console.log(`  ✅ Batch ${batchNum}/${totalBatches} uploaded (${batch.length} entries)`);
      }
    } catch (err) {
      console.error(`  ❌ Exception uploading batch ${batchNum}:`, err);
    }
  }
  
  console.log(`\n✅ Upload complete! Uploaded ${totalUploaded}/${entries.length} entries`);
  return totalUploaded;
}

// Verify the upload
async function verifyUpload() {
  console.log('\n🔍 VERIFYING UPLOAD...');
  
  const { count, error } = await supabase
    .from('vector_entries')
    .select('*', { count: 'exact', head: true });
  
  if (error) {
    console.error('  ❌ Error verifying:', error);
    return;
  }
  
  console.log(`  ✅ Database now contains ${count} entries`);
  
  // Get breakdown by type
  const { data: types } = await supabase
    .from('vector_entries')
    .select('type');
  
  if (types) {
    const typeCounts = {};
    types.forEach(t => {
      typeCounts[t.type] = (typeCounts[t.type] || 0) + 1;
    });
    
    console.log('\n  📊 Breakdown by type:');
    Object.entries(typeCounts).forEach(([type, count]) => {
      console.log(`    ${type}: ${count} entries`);
    });
  }
}

// Main function
async function main() {
  try {
    console.log('=' .repeat(60));
    console.log('🚀 STARTING CLEAN REBUILD OF VECTOR DATABASE');
    console.log('=' .repeat(60));
    
    // Initialize embedding model
    await initModel();
    
    // Step 1: Clean the database
    await cleanDatabase();
    
    // Step 2: Process wiki files (Layer 1)
    const wikiEntries = await processWikiFiles();
    
    // Step 3: Skip FAQ (FAQ is for testing only, not part of main content)
    const faqEntries = await processFAQEntries();
    
    // Step 4: Only use wiki entries (Layer 1)
    // Layer 2 (GitHub) would be added via separate update script
    const allEntries = [...wikiEntries];
    console.log(`\n📊 Total entries prepared: ${allEntries.length} (Wiki Layer 1 only)`);
    
    // Step 5: Upload to Supabase
    await uploadToSupabase(allEntries);
    
    // Step 6: Verify the upload
    await verifyUpload();
    
    console.log('\n' + '=' .repeat(60));
    console.log('🎉 DATABASE REBUILD COMPLETE!');
    console.log('=' .repeat(60));
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the script
main();