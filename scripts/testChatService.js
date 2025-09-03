#!/usr/bin/env node

import { localChatService } from '../services/nodeChatService.js';

console.log('🧪 Testing Chat Service...\n');

async function testChatService() {
  try {
    console.log('1️⃣ Initializing chat service...');
    await localChatService.initialize();
    console.log('✅ Chat service initialized\n');
    
    const testQueries = [
      "Hello",
      "What is the Creuss faction?",
      "Can fighters block ship movement?",
      "How do I win the game?",
      "What happens during space combat?"
    ];
    
    for (const query of testQueries) {
      console.log(`\n📝 Testing query: "${query}"`);
      console.log('─'.repeat(50));
      
      try {
        const messages = [
          { role: 'user', content: query }
        ];
        
        console.log('Sending message to chat service...');
        const stream = localChatService.sendMessage(messages);
        
        let response = '';
        let chunkCount = 0;
        
        console.log('Reading response stream...');
        for await (const chunk of stream) {
          response += chunk;
          chunkCount++;
          if (chunkCount % 100 === 0) {
            process.stdout.write('.');
          }
        }
        
        console.log(`\n✅ Received response (${response.length} chars, ${chunkCount} chunks)`);
        console.log('Response preview:');
        console.log(response.substring(0, 200) + (response.length > 200 ? '...' : ''));
        
      } catch (error) {
        console.error('❌ Error processing query:', error);
        console.error('Error stack:', error.stack);
      }
    }
    
    console.log('\n✅ All tests completed!');
    
  } catch (error) {
    console.error('❌ Fatal error in chat service test:', error);
    console.error('Error details:', error.stack);
    process.exit(1);
  }
}

// Also test the vector service directly
async function testVectorService() {
  console.log('\n\n🧪 Testing Vector Service Directly...\n');
  
  try {
    const { vectorService } = await import('../services/nodeVectorService.js');
    
    await vectorService.initialize();
    console.log('✅ Vector service initialized\n');
    
    const testQuery = "Creuss faction";
    console.log(`Testing search for: "${testQuery}"`);
    
    const results = await vectorService.search(testQuery, 3);
    console.log(`Found ${results.length} results:`);
    
    results.forEach((result, i) => {
      console.log(`\n${i + 1}. Score: ${result.score.toFixed(3)}`);
      console.log(`   Title: ${result.entry.title || result.entry.question || 'N/A'}`);
      console.log(`   Category: ${result.entry.category || 'N/A'}`);
      console.log(`   Source: ${result.entry.source || 'regular'}`);
      console.log(`   Has content: ${!!(result.entry.content || result.entry.answer || result.entry.text)}`);
    });
    
  } catch (error) {
    console.error('❌ Vector service test error:', error);
  }
}

// Run both tests
async function runAllTests() {
  await testChatService();
  await testVectorService();
}

runAllTests().catch(console.error);