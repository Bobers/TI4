#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@xenova/transformers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('   Please set SUPABASE_URL and SUPABASE_SERVICE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

console.log('🔄 Rebuilding Vector Database with GitHub Data...\n');

// Initialize the embedding model
let embedder = null;

async function initializeEmbedder() {
  console.log('🤖 Loading embedding model...');
  embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  console.log('✅ Model loaded successfully\n');
}

async function generateEmbedding(text) {
  const output = await embedder(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

async function clearExistingData() {
  console.log('🗑️ Clearing existing corrupted data...');
  
  const { error } = await supabase
    .from('vector_entries')
    .delete()
    .neq('id', -1); // Delete all entries
  
  if (error) {
    console.error('❌ Failed to clear existing data:', error);
    throw error;
  }
  
  console.log('✅ Existing data cleared\n');
}

async function processGitHubData() {
  const dataPath = path.join(__dirname, '../data/githubRulesData.json');
  
  if (!fs.existsSync(dataPath)) {
    throw new Error('GitHub rules data not found! Please run syncFromGitHub.js first.');
  }
  
  console.log('📁 Loading GitHub rules data...');
  const githubData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  console.log(`📊 Loaded ${githubData.length} entries from GitHub\n`);
  
  console.log('🔄 Processing entries and generating embeddings...\n');
  
  const vectorEntries = [];
  let processed = 0;
  
  for (const entry of githubData) {
    try {
      // Create search text for embedding
      const searchText = [
        entry.title || '',
        entry.type || '',
        entry.category || '',
        entry.content || ''
      ].filter(Boolean).join(' ');
      
      // Generate embedding
      const embedding = await generateEmbedding(searchText);
      
      // Create vector entry matching database schema
      const vectorEntry = {
        title: entry.title,
        content: entry.content,
        category: entry.category,
        type: entry.type || null,
        source: entry.source,
        keywords: [], // GitHub data doesn't have separate keywords
        "references": [], // Empty for now
        text: entry.content, // Use content as text field
        section: entry.category, // Use category as section
        embedding: embedding
      };
      
      vectorEntries.push(vectorEntry);
      processed++;
      
      if (processed % 50 === 0) {
        console.log(`  ⚡ Processed ${processed}/${githubData.length} entries...`);
      }
      
      // Small delay to prevent overloading
      if (processed % 10 === 0) {
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      
    } catch (error) {
      console.error(`❌ Failed to process entry "${entry.title}":`, error.message);
    }
  }
  
  console.log(`\n✅ Generated embeddings for ${vectorEntries.length} entries\n`);
  return vectorEntries;
}

async function uploadToSupabase(vectorEntries) {
  console.log('📤 Uploading to Supabase...');
  
  const batchSize = 100;
  let uploaded = 0;
  
  for (let i = 0; i < vectorEntries.length; i += batchSize) {
    const batch = vectorEntries.slice(i, i + batchSize);
    
    const { error } = await supabase
      .from('vector_entries')
      .insert(batch);
    
    if (error) {
      console.error(`❌ Failed to upload batch ${Math.floor(i/batchSize) + 1}:`, error);
      throw error;
    }
    
    uploaded += batch.length;
    console.log(`  📊 Uploaded ${uploaded}/${vectorEntries.length} entries...`);
  }
  
  console.log(`\n✅ Successfully uploaded all ${uploaded} entries to Supabase\n`);
}

async function verifyData() {
  console.log('🔍 Verifying uploaded data...');
  
  // Check total count
  const { count, error: countError } = await supabase
    .from('vector_entries')
    .select('*', { count: 'exact', head: true });
  
  if (countError) {
    console.error('❌ Failed to verify count:', countError);
    return;
  }
  
  console.log(`📊 Total entries in database: ${count}`);
  
  // Check for Icarus Drive specifically
  const { data: icarusEntries, error: searchError } = await supabase
    .from('vector_entries')
    .select('title, content, type, category')
    .or('title.ilike.%icarus%,content.ilike.%icarus%');
  
  if (searchError) {
    console.error('❌ Failed to search for Icarus Drive:', searchError);
    return;
  }
  
  console.log(`\n🔍 Found ${icarusEntries.length} entries mentioning "Icarus":`);
  icarusEntries.forEach((entry, i) => {
    console.log(`${i + 1}. ${entry.title} (${entry.type}) - ${entry.category}`);
  });
  
  // Check categories
  const { data: categoryData, error: catError } = await supabase
    .from('vector_entries')
    .select('category')
    .not('category', 'is', null);
  
  if (!catError && categoryData) {
    const categories = {};
    categoryData.forEach(row => {
      categories[row.category] = (categories[row.category] || 0) + 1;
    });
    
    console.log('\n📋 Categories in database:');
    Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .forEach(([cat, count]) => {
        console.log(`  ${cat}: ${count} entries`);
      });
  }
}

async function main() {
  try {
    await initializeEmbedder();
    await clearExistingData();
    
    const vectorEntries = await processGitHubData();
    await uploadToSupabase(vectorEntries);
    await verifyData();
    
    console.log('🎉 Vector database rebuild complete!');
    console.log('\n✅ The database now contains official, verified data from GitHub');
    console.log('✅ All corrupted entries have been replaced');
    console.log('✅ Icarus Drive and other missing content should now be available');
    console.log('\n🚀 Ready to test the application with clean data!');
    
  } catch (error) {
    console.error('❌ Rebuild failed:', error);
    process.exit(1);
  }
}

main().catch(console.error);