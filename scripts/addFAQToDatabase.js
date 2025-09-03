#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@xenova/transformers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase setup
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://nyplaclhdjggctufspuk.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55cGxhY2xoZGpnZ2N0dWZzcHVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Njg5Mjg4MiwiZXhwIjoyMDcyNDY4ODgyfQ.lSshvbthvgDfdL8dOxn689Fi6MGvGeX_-GehfUVZocY';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

console.log('📚 Adding FAQ Data to Supabase Database...\n');

let embedder = null;

async function initializeEmbedder() {
  console.log('🤖 Loading embedding model...');
  embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  console.log('✅ Model loaded\n');
}

async function generateEmbedding(text) {
  const output = await embedder(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

async function checkExistingFAQData() {
  console.log('🔍 Checking for existing FAQ data...');
  
  const { data, error } = await supabase
    .from('vector_entries')
    .select('source')
    .eq('source', 'official_faq')
    .limit(1);
  
  if (error) {
    console.error('❌ Error checking existing data:', error);
    return false;
  }
  
  const hasFAQData = data && data.length > 0;
  console.log(`${hasFAQData ? '⚠️' : '✅'} ${hasFAQData ? 'FAQ data already exists' : 'No existing FAQ data found'}\n`);
  
  return hasFAQData;
}

async function processFAQData() {
  const dataPath = path.join(__dirname, '../data/faqEntries.json');
  
  if (!fs.existsSync(dataPath)) {
    throw new Error('FAQ entries data not found!');
  }
  
  console.log('📁 Loading FAQ data...');
  const faqData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  console.log(`📊 Loaded ${faqData.length} FAQ entries\n`);
  
  console.log('🔄 Processing FAQ entries and generating embeddings...\n');
  
  const vectorEntries = [];
  let processed = 0;
  
  for (const entry of faqData) {
    try {
      // Create search text for embedding using question and answer
      const searchText = [
        entry.question || entry.title || '',
        entry.answer || entry.content || '',
        entry.category || '',
        entry.text || ''
      ].filter(Boolean).join(' ');
      
      // Generate embedding
      const embedding = await generateEmbedding(searchText);
      
      // Create vector entry matching database schema
      const vectorEntry = {
        title: entry.title || entry.question,
        question: entry.question,
        answer: entry.answer,
        content: entry.text || (entry.question + ' ' + entry.answer),
        text: entry.text || (entry.question + ' ' + entry.answer),
        category: entry.category,
        type: entry.type || 'FAQ',
        source: entry.source || 'official_faq',
        section: entry.category,
        keywords: [],
        "references": [],
        embedding: embedding
      };
      
      vectorEntries.push(vectorEntry);
      processed++;
      
      if (processed % 25 === 0) {
        console.log(`  ⚡ Processed ${processed}/${faqData.length} FAQ entries...`);
      }
      
      // Small delay to prevent overloading
      if (processed % 10 === 0) {
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      
    } catch (error) {
      console.error(`❌ Failed to process FAQ entry "${entry.question}":`, error.message);
    }
  }
  
  console.log(`\n✅ Generated embeddings for ${vectorEntries.length} FAQ entries\n`);
  return vectorEntries;
}

async function uploadFAQToSupabase(vectorEntries) {
  console.log('📤 Uploading FAQ data to Supabase...');
  
  const batchSize = 50;
  let uploaded = 0;
  
  for (let i = 0; i < vectorEntries.length; i += batchSize) {
    const batch = vectorEntries.slice(i, i + batchSize);
    
    const { error } = await supabase
      .from('vector_entries')
      .insert(batch);
    
    if (error) {
      console.error(`❌ Failed to upload FAQ batch ${Math.floor(i/batchSize) + 1}:`, error);
      throw error;
    }
    
    uploaded += batch.length;
    console.log(`  📊 Uploaded ${uploaded}/${vectorEntries.length} FAQ entries...`);
  }
  
  console.log(`\n✅ Successfully uploaded ${uploaded} FAQ entries to Supabase\n`);
}

async function verifyFinalData() {
  console.log('🔍 Verifying final database state...');
  
  // Check total count
  const { count, error: countError } = await supabase
    .from('vector_entries')
    .select('*', { count: 'exact', head: true });
  
  if (countError) {
    console.error('❌ Failed to verify count:', countError);
    return;
  }
  
  console.log(`📊 Total entries in database: ${count}`);
  
  // Check sources
  const { data: sourceData, error: sourceError } = await supabase
    .from('vector_entries')
    .select('source')
    .not('source', 'is', null);
  
  if (!sourceError && sourceData) {
    const sources = {};
    sourceData.forEach(row => {
      sources[row.source] = (sources[row.source] || 0) + 1;
    });
    
    console.log('\n📋 Data sources in database:');
    Object.entries(sources)
      .sort((a, b) => b[1] - a[1])
      .forEach(([source, count]) => {
        console.log(`  ${source}: ${count} entries`);
      });
  }
  
  // Test one of the failed questions from our previous test
  const { data: hiddenInfoEntries } = await supabase
    .from('vector_entries')
    .select('title, question, answer')
    .or('title.ilike.%hidden information%,question.ilike.%hidden information%,answer.ilike.%hidden information%');
  
  console.log(`\n🎯 Found ${hiddenInfoEntries?.length || 0} entries about "hidden information":`);
  hiddenInfoEntries?.slice(0, 2).forEach((entry, i) => {
    console.log(`${i + 1}. ${entry.title || entry.question}`);
  });
}

async function main() {
  try {
    await initializeEmbedder();
    
    // Check if FAQ data already exists
    const hasFAQ = await checkExistingFAQData();
    
    if (hasFAQ) {
      console.log('ℹ️  FAQ data already exists. Skipping upload.');
      console.log('   If you want to refresh FAQ data, please clear the database first.\n');
      await verifyFinalData();
      return;
    }
    
    const faqVectorEntries = await processFAQData();
    await uploadFAQToSupabase(faqVectorEntries);
    await verifyFinalData();
    
    console.log('🎉 FAQ integration complete!');
    console.log('\n✅ The database now contains both GitHub rules AND FAQ data');
    console.log('✅ This should provide complete coverage for all TI4 questions');
    console.log('\n🧪 Run the FAQ validation test again to see improved results!');
    
  } catch (error) {
    console.error('❌ FAQ integration failed:', error);
    process.exit(1);
  }
}

main().catch(console.error);