#!/usr/bin/env node

import { localChatService } from '../services/localChatService.js';
import { vectorService } from '../services/clientVectorService.js';

console.log('🧪 Testing TI4 App Components...\n');

async function testVectorService() {
  console.log('1️⃣ Testing Vector Service...');
  try {
    await vectorService.initialize();
    const results = await vectorService.search('how to win', 3);
    if (results.length > 0) {
      console.log('   ✅ Vector service works!');
      console.log(`   Found ${results.length} results`);
      return true;
    } else {
      console.log('   ❌ No results from vector search');
      return false;
    }
  } catch (error) {
    console.log('   ❌ Vector service error:', error.message);
    return false;
  }
}

async function testChatService() {
  console.log('\n2️⃣ Testing Chat Service...');
  try {
    await localChatService.initialize();
    const messages = [
      { role: 'user', content: 'Hello' }
    ];
    
    const stream = localChatService.sendMessage(messages);
    let response = '';
    
    for await (const chunk of stream) {
      response += chunk;
    }
    
    if (response.length > 0) {
      console.log('   ✅ Chat service works!');
      console.log(`   Response length: ${response.length} chars`);
      console.log(`   First 100 chars: "${response.substring(0, 100)}..."`);
      return true;
    } else {
      console.log('   ❌ Empty response from chat');
      return false;
    }
  } catch (error) {
    console.log('   ❌ Chat service error:', error.message);
    return false;
  }
}

async function checkDataFiles() {
  console.log('\n3️⃣ Checking Data Files...');
  try {
    const fs = await import('fs');
    const path = await import('path');
    const { fileURLToPath } = await import('url');
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const vectorEntriesPath = path.join(__dirname, '../data/vectorEntries.json');
    
    if (fs.existsSync(vectorEntriesPath)) {
      const data = JSON.parse(fs.readFileSync(vectorEntriesPath, 'utf8'));
      const withEmbeddings = data.filter(e => e.embedding && e.embedding.length > 0);
      console.log(`   ✅ Vector entries found: ${data.length} total, ${withEmbeddings.length} with embeddings`);
      
      if (withEmbeddings.length === 0) {
        console.log('   ⚠️  WARNING: No embeddings found!');
        return false;
      }
      return true;
    } else {
      console.log('   ❌ vectorEntries.json not found');
      return false;
    }
  } catch (error) {
    console.log('   ❌ Data file error:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('Starting tests...\n');
  
  const results = {
    data: await checkDataFiles(),
    vector: await testVectorService(),
    chat: await testChatService()
  };
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 TEST RESULTS:');
  console.log('='.repeat(60));
  console.log(`Data Files:      ${results.data ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Vector Service:  ${results.vector ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Chat Service:    ${results.chat ? '✅ PASS' : '❌ FAIL'}`);
  
  const allPass = Object.values(results).every(r => r === true);
  
  if (allPass) {
    console.log('\n🎉 All tests passed! App is ready for deployment.');
  } else {
    console.log('\n⚠️  Some tests failed. Please fix issues before deployment.');
    process.exit(1);
  }
}

runTests().catch(error => {
  console.error('Fatal test error:', error);
  process.exit(1);
});