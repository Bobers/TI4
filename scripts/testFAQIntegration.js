#!/usr/bin/env node

import { vectorService } from '../services/nodeVectorService.js';

console.log('🧪 Testing FAQ Integration...\n');

async function testFAQSearch() {
  try {
    await vectorService.initialize();
    
    // Test queries that should match FAQ entries
    const testQueries = [
      "Do ten sided dice use 0 as 10?",
      "Do players start with commodities?",
      "Can fighters block ship movement?",
      "Can I use Political Secret on faction abilities?",
      "When can units be picked up and transported?",
      "How does Infantry II resurrection work?",
      "Can PDS fire through wormholes?",
      "Does Planetary Shield stop X-89?",
      "Do I need multiple units for objectives that say units?"
    ];
    
    console.log('Running FAQ-specific queries:\n');
    
    for (const query of testQueries) {
      console.log(`📝 Query: "${query}"`);
      const results = await vectorService.search(query, 3);
      
      // Check if we found FAQ entries
      const faqResults = results.filter(r => r.entry.source === 'official_faq');
      const regularResults = results.filter(r => r.entry.source !== 'official_faq');
      
      if (faqResults.length > 0) {
        console.log(`✅ Found ${faqResults.length} FAQ answers:`);
        faqResults.forEach((result, i) => {
          console.log(`   ${i + 1}. [Score: ${result.score.toFixed(3)}] ${result.entry.question || result.entry.title}`);
          if (result.entry.answer) {
            console.log(`      → ${result.entry.answer.substring(0, 100)}...`);
          }
        });
      } else {
        console.log(`⚠️  No FAQ entries found`);
      }
      
      if (regularResults.length > 0) {
        console.log(`📚 Also found ${regularResults.length} regular rule entries`);
      }
      
      console.log('');
    }
    
    // Statistics
    console.log('\n📊 Database Statistics:');
    const allEntries = await vectorService.getAllEntries();
    const faqCount = allEntries.filter(e => e.source === 'official_faq').length;
    const ruleCount = allEntries.filter(e => e.source !== 'official_faq').length;
    
    console.log(`  Total entries: ${allEntries.length}`);
    console.log(`  FAQ entries: ${faqCount}`);
    console.log(`  Rule entries: ${ruleCount}`);
    
    // Verify FAQ entries have proper structure
    const faqEntries = allEntries.filter(e => e.source === 'official_faq');
    const withQuestions = faqEntries.filter(e => e.question).length;
    const withAnswers = faqEntries.filter(e => e.answer).length;
    const withEmbeddings = faqEntries.filter(e => e.embedding && e.embedding.length > 0).length;
    
    console.log(`\n🔍 FAQ Entry Quality:`);
    console.log(`  With questions: ${withQuestions}/${faqCount}`);
    console.log(`  With answers: ${withAnswers}/${faqCount}`);
    console.log(`  With embeddings: ${withEmbeddings}/${faqCount}`);
    
    if (withEmbeddings === faqCount) {
      console.log('\n✅ All FAQ entries have embeddings!');
    } else {
      console.log(`\n⚠️  ${faqCount - withEmbeddings} FAQ entries missing embeddings!`);
    }
    
  } catch (error) {
    console.error('❌ Error during FAQ integration test:', error);
    process.exit(1);
  }
}

testFAQSearch().catch(console.error);