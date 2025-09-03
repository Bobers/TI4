#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// You'll need to set these environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Please set SUPABASE_URL and SUPABASE_SERVICE_KEY environment variables');
  console.log('You can find these in your Supabase project settings under API');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('🚀 Uploading vector data to Supabase...\n');

async function uploadVectorData() {
  try {
    // Load vector entries
    const vectorEntriesPath = path.join(__dirname, '../data/vectorEntries.json');
    const vectorEntries = JSON.parse(fs.readFileSync(vectorEntriesPath, 'utf8'));
    
    console.log(`📊 Found ${vectorEntries.length} vector entries to upload`);

    // First, create the table if it doesn't exist (this might require SQL access)
    console.log('🔧 Ensuring table exists...');
    
    // Clear existing data
    const { error: deleteError } = await supabase
      .from('vector_entries')
      .delete()
      .neq('id', 0); // Delete all rows
      
    if (deleteError && !deleteError.message.includes('relation "vector_entries" does not exist')) {
      console.log('⚠️  Warning clearing existing data:', deleteError.message);
    }

    // Insert data in batches to avoid timeout
    const batchSize = 100;
    let inserted = 0;
    
    for (let i = 0; i < vectorEntries.length; i += batchSize) {
      const batch = vectorEntries.slice(i, i + batchSize);
      
      // Prepare batch data
      const batchData = batch.map(entry => ({
        title: entry.title || null,
        section: entry.section || null,
        category: entry.category,
        content: entry.content || null,
        text: entry.text || null,
        keywords: entry.keywords || null,
        embedding: entry.embedding,
        "references": entry.references || null,
        source: entry.source || null,
        question: entry.question || null,
        answer: entry.answer || null,
        type: entry.type || null
      }));
      
      const { data, error } = await supabase
        .from('vector_entries')
        .insert(batchData);
        
      if (error) {
        console.error(`❌ Error inserting batch ${i + 1}-${i + batch.length}:`, error);
        throw error;
      }
      
      inserted += batch.length;
      console.log(`✅ Uploaded batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(vectorEntries.length / batchSize)} (${inserted}/${vectorEntries.length} entries)`);
    }
    
    // Verify the upload
    const { count, error: countError } = await supabase
      .from('vector_entries')
      .select('*', { count: 'exact', head: true });
      
    if (countError) {
      console.error('❌ Error verifying upload:', countError);
    } else {
      console.log(`\n🎉 Successfully uploaded ${count} vector entries to Supabase!`);
      
      // Show some statistics
      const { data: faqCount } = await supabase
        .from('vector_entries')
        .select('*', { count: 'exact', head: true })
        .eq('source', 'official_faq');
        
      const faqTotal = faqCount ? faqCount.length : 0;
      const ruleTotal = count - faqTotal;
      
      console.log(`📊 Database contains:`);
      console.log(`   • ${faqTotal} FAQ entries`);
      console.log(`   • ${ruleTotal} rule entries`);
      console.log(`   • ${count} total entries`);
    }
    
  } catch (error) {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  }
}

console.log(`🔗 Connecting to Supabase: ${supabaseUrl}`);
uploadVectorData();