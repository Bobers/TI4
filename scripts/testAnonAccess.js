#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('🔍 Testing Anonymous Key Access...\n');
console.log(`URL: ${supabaseUrl}`);
console.log(`Key: ${supabaseAnonKey?.substring(0, 20)}...`);
console.log('\n' + '='.repeat(60) + '\n');

// Create client with anon key (same as browser would)
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testAccess() {
  try {
    // Test 1: Check if table exists and is accessible
    console.log('1️⃣ Testing table access with anon key...');
    const { data, error, status, statusText } = await supabase
      .from('vector_entries')
      .select('*')
      .limit(1);

    console.log(`   Status: ${status} ${statusText}`);
    
    if (error) {
      console.error('   ❌ Error:', error);
      console.error('   Error code:', error.code);
      console.error('   Error message:', error.message);
      console.error('   Error details:', error.details);
      console.error('   Error hint:', error.hint);
      
      if (error.code === '42P01') {
        console.error('\n   ⚠️  Table "vector_entries" does not exist!');
        console.error('   Run the SQL script to create the table first.');
      } else if (error.message.includes('row-level security')) {
        console.error('\n   ⚠️  Row Level Security is blocking access!');
        console.error('   Need to update RLS policies.');
      }
      
      return false;
    }

    console.log('   ✅ Table accessible!');
    console.log(`   Found ${data?.length || 0} entries\n`);

    // Test 2: Count total entries
    console.log('2️⃣ Counting total entries...');
    const { count, error: countError } = await supabase
      .from('vector_entries')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('   ❌ Count error:', countError);
      return false;
    }

    console.log(`   ✅ Total entries: ${count}\n`);

    // Test 3: Check if we can read FAQ entries
    console.log('3️⃣ Testing FAQ entry access...');
    const { data: faqData, error: faqError } = await supabase
      .from('vector_entries')
      .select('*')
      .eq('source', 'official_faq')
      .limit(1);

    if (faqError) {
      console.error('   ❌ FAQ error:', faqError);
      return false;
    }

    console.log(`   ✅ Can read FAQ entries: ${faqData?.length > 0}\n`);

    // Test 4: Check embedding field
    console.log('4️⃣ Testing embedding field access...');
    const { data: embData, error: embError } = await supabase
      .from('vector_entries')
      .select('id, embedding')
      .limit(1);

    if (embError) {
      console.error('   ❌ Embedding error:', embError);
      return false;
    }

    if (embData && embData.length > 0) {
      const hasEmbedding = embData[0].embedding && embData[0].embedding.length > 0;
      console.log(`   ✅ Embeddings accessible: ${hasEmbedding}`);
      if (hasEmbedding) {
        console.log(`   Embedding dimensions: ${embData[0].embedding.length}`);
      }
    }

    return true;

  } catch (error) {
    console.error('❌ Unexpected error:', error);
    return false;
  }
}

async function checkRLSPolicies() {
  console.log('\n' + '='.repeat(60));
  console.log('\n📋 Checking RLS Policies...\n');

  // This query will fail with anon key but shows if RLS is the issue
  const { data, error } = await supabase
    .from('vector_entries')
    .select('*')
    .limit(1);

  if (error && error.message.includes('row-level security')) {
    console.log('❌ RLS is enabled but blocking access!');
    console.log('\nTo fix this, run this SQL in Supabase:');
    console.log('```sql');
    console.log('-- Allow public read access to vector_entries');
    console.log('CREATE POLICY "Allow public read access" ON vector_entries');
    console.log('  FOR SELECT USING (true);');
    console.log('```');
  } else if (!error) {
    console.log('✅ RLS policies are correctly configured for read access');
  }
}

async function main() {
  const success = await testAccess();
  
  if (!success) {
    await checkRLSPolicies();
    console.log('\n' + '='.repeat(60));
    console.log('\n❌ Anonymous access test failed!');
    console.log('\nPossible fixes:');
    console.log('1. Check if the table exists in Supabase');
    console.log('2. Verify RLS policies allow public SELECT');
    console.log('3. Ensure the anon key is correct');
    process.exit(1);
  }

  console.log('\n' + '='.repeat(60));
  console.log('\n✅ All tests passed! Anonymous access is working correctly.');
  console.log('The app should work in Vercel now.\n');
}

main().catch(console.error);