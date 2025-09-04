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

// Load FAQ test data
function loadFAQTestData() {
  const faqPath = path.join(__dirname, '../data/faqEntries.json');
  if (!fs.existsSync(faqPath)) {
    throw new Error('FAQ file not found');
  }
  
  const faqData = JSON.parse(fs.readFileSync(faqPath, 'utf-8'));
  console.log(`✅ Loaded ${faqData.length} FAQ entries for testing`);
  return faqData;
}

// Test vector search accuracy
async function testVectorSearch(faqEntries, sampleSize = 20) {
  console.log(`\n🧪 Testing Vector Search with ${sampleSize} FAQ questions...\n`);
  
  // Select random FAQ entries for testing
  const testEntries = faqEntries
    .sort(() => Math.random() - 0.5)
    .slice(0, sampleSize);
  
  const results = {
    total: testEntries.length,
    correct: 0,
    partiallyCorrect: 0,
    incorrect: 0,
    accuracyByCategory: {},
    details: []
  };
  
  for (let i = 0; i < testEntries.length; i++) {
    const faq = testEntries[i];
    console.log(`\n📝 Test ${i + 1}/${testEntries.length}`);
    console.log(`  Question: "${faq.question.substring(0, 80)}..."`);
    
    // Generate embedding for the question
    const queryEmbedding = await generateEmbedding(faq.question);
    
    // Search using hybrid search
    const { data, error } = await supabase.rpc('hybrid_search', {
      query_text: faq.question,
      query_embedding_array: queryEmbedding,
      match_count: 5,
      full_text_weight: 1.0,
      semantic_weight: 1.0,
      rrf_k: 50
    });
    
    if (error) {
      console.error('  ❌ Search error:', error);
      results.incorrect++;
      continue;
    }
    
    // Check if the correct answer was found
    const correctAnswer = faq.answer.toLowerCase().trim();
    let matchFound = false;
    let partialMatch = false;
    let matchRank = -1;
    
    for (let j = 0; j < data.length; j++) {
      const result = data[j];
      const resultContent = (result.content || result.answer || '').toLowerCase().trim();
      
      // Check for exact match
      if (resultContent === correctAnswer) {
        matchFound = true;
        matchRank = j + 1;
        break;
      }
      
      // Check for partial match (significant overlap)
      const overlap = calculateOverlap(correctAnswer, resultContent);
      if (overlap > 0.7) {
        partialMatch = true;
        matchRank = j + 1;
      }
    }
    
    // Update results
    const category = faq.category || 'General';
    if (!results.accuracyByCategory[category]) {
      results.accuracyByCategory[category] = { total: 0, correct: 0, partial: 0 };
    }
    results.accuracyByCategory[category].total++;
    
    if (matchFound) {
      results.correct++;
      results.accuracyByCategory[category].correct++;
      console.log(`  ✅ Correct! Found at rank #${matchRank}`);
    } else if (partialMatch) {
      results.partiallyCorrect++;
      results.accuracyByCategory[category].partial++;
      console.log(`  🔶 Partial match at rank #${matchRank}`);
    } else {
      results.incorrect++;
      console.log(`  ❌ Not found in top 5 results`);
      console.log(`  Expected: "${correctAnswer.substring(0, 100)}..."`);
      if (data.length > 0) {
        console.log(`  Got: "${(data[0].content || data[0].answer || '').substring(0, 100)}..."`);
      }
    }
    
    // Store detailed results
    results.details.push({
      question: faq.question,
      expectedAnswer: faq.answer,
      matchFound,
      partialMatch,
      matchRank,
      topResult: data[0] ? (data[0].content || data[0].answer) : null
    });
  }
  
  return results;
}

// Calculate text overlap ratio
function calculateOverlap(text1, text2) {
  const words1 = new Set(text1.split(/\s+/));
  const words2 = new Set(text2.split(/\s+/));
  
  let overlap = 0;
  for (const word of words1) {
    if (words2.has(word)) overlap++;
  }
  
  return overlap / Math.max(words1.size, words2.size);
}

// Test different search configurations
async function testSearchConfigurations(faqEntries) {
  console.log('\n🔧 Testing Different Search Configurations...\n');
  
  const configs = [
    { name: 'Semantic Only', fullText: 0, semantic: 1 },
    { name: 'Full-text Only', fullText: 1, semantic: 0 },
    { name: 'Balanced (50/50)', fullText: 0.5, semantic: 0.5 },
    { name: 'Semantic Heavy (70/30)', fullText: 0.3, semantic: 0.7 },
    { name: 'Full-text Heavy (70/30)', fullText: 0.7, semantic: 0.3 }
  ];
  
  const testQueries = faqEntries.slice(0, 10).map(f => f.question);
  const results = {};
  
  for (const config of configs) {
    console.log(`\nTesting ${config.name}...`);
    let correctCount = 0;
    
    for (const query of testQueries) {
      const queryEmbedding = await generateEmbedding(query);
      
      const { data, error } = await supabase.rpc('hybrid_search', {
        query_text: query,
        query_embedding_array: queryEmbedding,
        match_count: 3,
        full_text_weight: config.fullText,
        semantic_weight: config.semantic,
        rrf_k: 50
      });
      
      if (!error && data && data.length > 0) {
        // Simple check: if FAQ result is in top 3
        const hasFAQ = data.some(d => d.type === 'faq');
        if (hasFAQ) correctCount++;
      }
    }
    
    results[config.name] = {
      accuracy: (correctCount / testQueries.length * 100).toFixed(1) + '%',
      correct: correctCount,
      total: testQueries.length
    };
  }
  
  return results;
}

// Generate performance report
function generateReport(testResults, configResults) {
  console.log('\n' + '='.repeat(60));
  console.log('📊 VECTOR DATABASE PERFORMANCE REPORT');
  console.log('='.repeat(60));
  
  console.log('\n📈 Overall Accuracy:');
  const accuracy = ((testResults.correct + testResults.partiallyCorrect * 0.5) / testResults.total * 100).toFixed(1);
  console.log(`  Total Accuracy: ${accuracy}%`);
  console.log(`  Exact Matches: ${testResults.correct}/${testResults.total} (${(testResults.correct / testResults.total * 100).toFixed(1)}%)`);
  console.log(`  Partial Matches: ${testResults.partiallyCorrect}/${testResults.total} (${(testResults.partiallyCorrect / testResults.total * 100).toFixed(1)}%)`);
  console.log(`  Failed: ${testResults.incorrect}/${testResults.total} (${(testResults.incorrect / testResults.total * 100).toFixed(1)}%)`);
  
  console.log('\n📂 Accuracy by Category:');
  for (const [category, stats] of Object.entries(testResults.accuracyByCategory)) {
    const catAccuracy = ((stats.correct + stats.partial * 0.5) / stats.total * 100).toFixed(1);
    console.log(`  ${category}: ${catAccuracy}% (${stats.correct}/${stats.total} exact)`);
  }
  
  console.log('\n⚙️ Search Configuration Performance:');
  for (const [config, stats] of Object.entries(configResults)) {
    console.log(`  ${config}: ${stats.accuracy} accuracy (${stats.correct}/${stats.total})`);
  }
  
  // Find problematic queries
  const failures = testResults.details.filter(d => !d.matchFound && !d.partialMatch);
  if (failures.length > 0) {
    console.log('\n⚠️ Failed Queries (sample):');
    failures.slice(0, 3).forEach(f => {
      console.log(`  Q: "${f.question.substring(0, 60)}..."`);
      console.log(`  Expected: "${f.expectedAnswer.substring(0, 60)}..."`);
      if (f.topResult) {
        console.log(`  Got: "${f.topResult.substring(0, 60)}..."`);
      }
      console.log();
    });
  }
  
  // Save detailed report
  const reportPath = path.join(__dirname, '../reports/vector_test_report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    summary: {
      accuracy,
      exactMatches: testResults.correct,
      partialMatches: testResults.partiallyCorrect,
      failures: testResults.incorrect,
      total: testResults.total
    },
    byCategory: testResults.accuracyByCategory,
    configurations: configResults,
    details: testResults.details
  }, null, 2));
  
  console.log(`\n💾 Detailed report saved to: reports/vector_test_report.json`);
}

// Main function
async function main() {
  try {
    // Initialize model
    await initModel();
    
    // Load FAQ test data
    const faqEntries = loadFAQTestData();
    
    // Test vector search accuracy
    console.log('\n' + '='.repeat(60));
    console.log('🚀 STARTING VECTOR DATABASE TESTING');
    console.log('='.repeat(60));
    
    const testResults = await testVectorSearch(faqEntries, 30);
    
    // Test different configurations
    const configResults = await testSearchConfigurations(faqEntries);
    
    // Generate report
    generateReport(testResults, configResults);
    
    console.log('\n✅ Testing complete!');
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the script
main();