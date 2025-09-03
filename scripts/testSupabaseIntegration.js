#!/usr/bin/env node

import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@xenova/transformers';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env.local');
  process.exit(1);
}

console.log('🧪 Testing Supabase Integration...\n');

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabaseConnection() {
  console.log('1️⃣ Testing Supabase Connection...');
  console.log(`   URL: ${supabaseUrl}`);
  
  try {
    // Test database connection by counting entries
    const { count, error } = await supabase
      .from('vector_entries')
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      throw error;
    }
    
    console.log(`   ✅ Connected! Found ${count} entries in database\n`);
    return count;
  } catch (error) {
    console.error('   ❌ Connection failed:', error.message);
    throw error;
  }
}

async function testDataStructure() {
  console.log('2️⃣ Testing Data Structure...');
  
  try {
    // Get sample entries of different types
    const { data: faqEntries, error: faqError } = await supabase
      .from('vector_entries')
      .select('*')
      .eq('source', 'official_faq')
      .limit(2);
    
    if (faqError) throw faqError;
    
    const { data: ruleEntries, error: ruleError } = await supabase
      .from('vector_entries')
      .select('*')
      .not('source', 'eq', 'official_faq')
      .limit(2);
    
    if (ruleError) throw ruleError;
    
    console.log(`   ✅ FAQ entries: ${faqEntries.length}`);
    console.log(`   ✅ Rule entries: ${ruleEntries.length}`);
    
    // Check FAQ structure
    if (faqEntries.length > 0) {
      const faq = faqEntries[0];
      console.log('\n   📋 Sample FAQ Entry:');
      console.log(`      Question: ${faq.question?.substring(0, 60)}...`);
      console.log(`      Answer: ${faq.answer?.substring(0, 60)}...`);
      console.log(`      Embedding length: ${faq.embedding?.length || 0}`);
    }
    
    // Check Rule structure
    if (ruleEntries.length > 0) {
      const rule = ruleEntries[0];
      console.log('\n   📋 Sample Rule Entry:');
      console.log(`      Title: ${rule.title || 'N/A'}`);
      console.log(`      Section: ${rule.section || 'N/A'}`);
      console.log(`      Content: ${(rule.content || rule.text || '').substring(0, 60)}...`);
      console.log(`      Embedding length: ${rule.embedding?.length || 0}`);
    }
    
    console.log();
    return { faqEntries, ruleEntries };
  } catch (error) {
    console.error('   ❌ Data structure test failed:', error.message);
    throw error;
  }
}

async function testVectorSearch() {
  console.log('3️⃣ Testing Vector Search...');
  
  try {
    // Initialize embedding model
    console.log('   Loading embedding model...');
    const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    
    // Test query
    const query = "How do I win the game?";
    console.log(`   Testing query: "${query}"`);
    
    // Generate embedding
    const output = await extractor(query, { 
      pooling: 'mean',
      normalize: true 
    });
    const queryEmbedding = Array.from(output.data);
    console.log(`   Generated embedding: ${queryEmbedding.length} dimensions`);
    
    // Load all entries for similarity comparison
    const { data: entries, error } = await supabase
      .from('vector_entries')
      .select('*')
      .order('id');
    
    if (error) throw error;
    
    // Calculate similarities
    const results = [];
    for (const entry of entries) {
      const score = cosineSimilarity(queryEmbedding, entry.embedding);
      results.push({ entry, score });
    }
    
    // Sort and get top results
    results.sort((a, b) => b.score - a.score);
    const topResults = results.slice(0, 5);
    
    console.log(`\n   📊 Top 5 Results:`);
    topResults.forEach((result, i) => {
      const title = result.entry.title || result.entry.question || result.entry.section || 'Unknown';
      console.log(`      ${i + 1}. [Score: ${result.score.toFixed(3)}] ${title.substring(0, 60)}...`);
    });
    
    console.log('\n   ✅ Vector search working!\n');
    return topResults;
  } catch (error) {
    console.error('   ❌ Vector search test failed:', error.message);
    throw error;
  }
}

function cosineSimilarity(a, b) {
  if (!a || !b || a.length !== b.length) return 0;
  
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

async function testStatistics() {
  console.log('4️⃣ Database Statistics...');
  
  try {
    // Count by source
    const { count: faqCount } = await supabase
      .from('vector_entries')
      .select('*', { count: 'exact', head: true })
      .eq('source', 'official_faq');
    
    const { count: totalCount } = await supabase
      .from('vector_entries')
      .select('*', { count: 'exact', head: true });
    
    const ruleCount = totalCount - faqCount;
    
    console.log(`   📊 Total entries: ${totalCount}`);
    console.log(`   📋 FAQ entries: ${faqCount}`);
    console.log(`   📚 Rule entries: ${ruleCount}`);
    
    // Check for missing embeddings
    const { data: missingEmbeddings } = await supabase
      .from('vector_entries')
      .select('id', { count: 'exact' })
      .is('embedding', null);
    
    if (missingEmbeddings && missingEmbeddings.length > 0) {
      console.log(`   ⚠️  ${missingEmbeddings.length} entries missing embeddings!`);
    } else {
      console.log(`   ✅ All entries have embeddings!`);
    }
    
    console.log();
    return { totalCount, faqCount, ruleCount };
  } catch (error) {
    console.error('   ❌ Statistics test failed:', error.message);
    throw error;
  }
}

async function runAllTests() {
  try {
    console.log('Starting Supabase integration tests...\n');
    console.log('═'.repeat(60));
    console.log();
    
    // Run tests in sequence
    await testSupabaseConnection();
    await testDataStructure();
    await testVectorSearch();
    await testStatistics();
    
    console.log('═'.repeat(60));
    console.log('\n✅ All tests passed successfully!');
    console.log('\n🎉 Supabase integration is working correctly!\n');
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Test suite failed:', error);
    process.exit(1);
  }
}

// Run tests
runAllTests().catch(console.error);