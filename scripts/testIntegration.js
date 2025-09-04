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
  process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

// Test results tracker
const testResults = {
  passed: 0,
  failed: 0,
  warnings: 0,
  details: []
};

// Helper function to log test results
function logTest(name, status, message = '') {
  const symbol = status === 'pass' ? '✅' : status === 'fail' ? '❌' : '⚠️';
  const color = status === 'pass' ? colors.green : status === 'fail' ? colors.red : colors.yellow;
  
  console.log(`  ${symbol} ${color}${name}${colors.reset} ${message}`);
  
  if (status === 'pass') testResults.passed++;
  else if (status === 'fail') testResults.failed++;
  else testResults.warnings++;
  
  testResults.details.push({ name, status, message });
}

// Test 1: Environment Configuration
async function testEnvironment() {
  console.log('\n📋 Testing Environment Configuration...');
  
  // Check required environment variables
  const required = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY'
  ];
  
  for (const key of required) {
    if (process.env[key]) {
      logTest(`Environment: ${key}`, 'pass', 'configured');
    } else {
      logTest(`Environment: ${key}`, 'fail', 'missing');
    }
  }
  
  // Check optional service key
  if (process.env.SUPABASE_SERVICE_KEY) {
    logTest('Environment: Service Key', 'pass', 'configured (admin access)');
  } else {
    logTest('Environment: Service Key', 'warn', 'not configured (limited access)');
  }
}

// Test 2: Supabase Connection
async function testSupabaseConnection() {
  console.log('\n🔌 Testing Supabase Connection...');
  
  try {
    // Test basic connection
    const { count, error } = await supabase
      .from('vector_entries')
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      logTest('Supabase Connection', 'fail', error.message);
      return false;
    }
    
    logTest('Supabase Connection', 'pass', `Connected (${count} entries)`);
    
    // Test RPC function availability
    try {
      const { error: rpcError } = await supabase.rpc('hybrid_search', {
        query_text: 'test',
        query_embedding_array: new Array(384).fill(0),
        match_count: 1,
        full_text_weight: 0.5,
        semantic_weight: 0.5,
        rrf_k: 50
      });
      
      if (rpcError) {
        logTest('Hybrid Search RPC', 'warn', 'not available');
      } else {
        logTest('Hybrid Search RPC', 'pass', 'available');
      }
    } catch (e) {
      logTest('Hybrid Search RPC', 'warn', 'not configured');
    }
    
    return true;
  } catch (error) {
    logTest('Supabase Connection', 'fail', error.message);
    return false;
  }
}

// Test 3: Vector Database Content
async function testVectorContent() {
  console.log('\n📚 Testing Vector Database Content...');
  
  try {
    // Check content breakdown
    const { data: types, error } = await supabase
      .from('vector_entries')
      .select('type');
    
    if (error) {
      logTest('Content Query', 'fail', error.message);
      return;
    }
    
    const typeCounts = {};
    types.forEach(t => {
      typeCounts[t.type] = (typeCounts[t.type] || 0) + 1;
    });
    
    // Check wiki content (Layer 1)
    if (typeCounts.wiki >= 140) {
      logTest('Wiki Content (Layer 1)', 'pass', `${typeCounts.wiki} entries`);
    } else if (typeCounts.wiki > 0) {
      logTest('Wiki Content (Layer 1)', 'warn', `Only ${typeCounts.wiki} entries (expected 147)`);
    } else {
      logTest('Wiki Content (Layer 1)', 'fail', 'no wiki entries found');
    }
    
    // Check for GitHub content (Layer 2)
    if (typeCounts.github > 0) {
      logTest('GitHub Content (Layer 2)', 'pass', `${typeCounts.github} entries`);
    } else {
      logTest('GitHub Content (Layer 2)', 'warn', 'Layer 2 not configured');
    }
    
    // FAQ should NOT be in main database
    if (typeCounts.faq > 0) {
      logTest('FAQ Separation', 'fail', `${typeCounts.faq} FAQ entries found (should be separate)`);
    } else {
      logTest('FAQ Separation', 'pass', 'FAQ correctly separated from main content');
    }
    
  } catch (error) {
    logTest('Content Check', 'fail', error.message);
  }
}

// Test 4: Embedding Model
async function testEmbeddingModel() {
  console.log('\n🧠 Testing Embedding Model...');
  
  try {
    const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';
    
    console.log('  Loading model (this may take a moment)...');
    const extractor = await pipeline('feature-extraction', MODEL_NAME);
    logTest('Model Loading', 'pass', MODEL_NAME);
    
    // Test embedding generation
    const testText = 'How does space combat work in Twilight Imperium?';
    const output = await extractor(testText, {
      pooling: 'mean',
      normalize: true
    });
    
    const embedding = Array.from(output.data);
    
    if (embedding.length === 384) {
      logTest('Embedding Generation', 'pass', `384 dimensions`);
    } else {
      logTest('Embedding Generation', 'fail', `Wrong dimensions: ${embedding.length}`);
    }
    
  } catch (error) {
    logTest('Embedding Model', 'fail', error.message);
  }
}

// Test 5: Search Functionality
async function testSearchFunctionality() {
  console.log('\n🔍 Testing Search Functionality...');
  
  try {
    const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';
    const extractor = await pipeline('feature-extraction', MODEL_NAME);
    
    const testQueries = [
      {
        query: "What are the Arborec faction abilities?",
        expectedType: 'wiki',
        expectedCategory: /faction/i
      },
      {
        query: "Can fighters be produced during combat?",
        expectedType: 'faq',
        expectedCategory: /units|production/i
      },
      {
        query: "How does the status phase work?",
        expectedType: 'wiki',
        expectedCategory: /rules/i
      }
    ];
    
    for (const test of testQueries) {
      // Generate embedding
      const output = await extractor(test.query, {
        pooling: 'mean',
        normalize: true
      });
      const embedding = Array.from(output.data);
      
      // Try hybrid search
      const { data, error } = await supabase.rpc('hybrid_search', {
        query_text: test.query,
        query_embedding_array: embedding,
        match_count: 3,
        full_text_weight: 0.5,
        semantic_weight: 0.5,
        rrf_k: 50
      });
      
      if (error) {
        // Fallback to text search
        const { data: textResults, error: textError } = await supabase
          .from('vector_entries')
          .select('*')
          .textSearch('text', test.query)
          .limit(3);
        
        if (textError) {
          logTest(`Search: "${test.query.substring(0, 30)}..."`, 'fail', 'search failed');
        } else if (textResults && textResults.length > 0) {
          logTest(`Search: "${test.query.substring(0, 30)}..."`, 'warn', 'text search only');
        } else {
          logTest(`Search: "${test.query.substring(0, 30)}..."`, 'fail', 'no results');
        }
      } else {
        if (data && data.length > 0) {
          const topResult = data[0];
          const typeMatch = topResult.type === test.expectedType;
          const categoryMatch = test.expectedCategory.test(topResult.category || '');
          
          if (typeMatch && categoryMatch) {
            logTest(`Search: "${test.query.substring(0, 30)}..."`, 'pass', `found in ${topResult.type}`);
          } else {
            logTest(`Search: "${test.query.substring(0, 30)}..."`, 'warn', `found but type/category mismatch`);
          }
        } else {
          logTest(`Search: "${test.query.substring(0, 30)}..."`, 'fail', 'no results');
        }
      }
    }
    
  } catch (error) {
    logTest('Search Tests', 'fail', error.message);
  }
}

// Test 6: Local Files
async function testLocalFiles() {
  console.log('\n📁 Testing Local Files...');
  
  // Check wiki directory
  const wikiDir = path.join(__dirname, '../../wiki');
  if (fs.existsSync(wikiDir)) {
    const files = fs.readdirSync(wikiDir);
    const mdFiles = files.filter(f => f.endsWith('.md'));
    if (mdFiles.length > 0) {
      logTest('Wiki Directory', 'pass', `${mdFiles.length} markdown files`);
    } else {
      logTest('Wiki Directory', 'warn', 'exists but no markdown files');
    }
  } else {
    logTest('Wiki Directory', 'fail', 'not found');
  }
  
  // Check FAQ file
  const faqPath = path.join(__dirname, '../data/faqEntries.json');
  if (fs.existsSync(faqPath)) {
    const faqData = JSON.parse(fs.readFileSync(faqPath, 'utf-8'));
    logTest('FAQ Data', 'pass', `${faqData.length} entries`);
  } else {
    logTest('FAQ Data', 'fail', 'file not found');
  }
  
  // Check main app files
  const appFiles = [
    '../App.tsx',
    '../services/supabaseVectorService.ts',
    '../lib/supabase.ts'
  ];
  
  for (const file of appFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      logTest(`App File: ${path.basename(file)}`, 'pass', 'exists');
    } else {
      logTest(`App File: ${path.basename(file)}`, 'fail', 'not found');
    }
  }
}

// Test 7: API Response Times
async function testPerformance() {
  console.log('\n⚡ Testing Performance...');
  
  try {
    // Test database query speed
    const dbStart = Date.now();
    const { data, error } = await supabase
      .from('vector_entries')
      .select('id, title, type')
      .limit(10);
    const dbTime = Date.now() - dbStart;
    
    if (error) {
      logTest('Database Query Speed', 'fail', error.message);
    } else if (dbTime < 500) {
      logTest('Database Query Speed', 'pass', `${dbTime}ms`);
    } else if (dbTime < 1000) {
      logTest('Database Query Speed', 'warn', `${dbTime}ms (slow)`);
    } else {
      logTest('Database Query Speed', 'fail', `${dbTime}ms (too slow)`);
    }
    
    // Test search speed
    const searchStart = Date.now();
    const { data: searchData } = await supabase
      .from('vector_entries')
      .select('*')
      .textSearch('text', 'combat')
      .limit(5);
    const searchTime = Date.now() - searchStart;
    
    if (searchTime < 1000) {
      logTest('Search Speed', 'pass', `${searchTime}ms`);
    } else if (searchTime < 2000) {
      logTest('Search Speed', 'warn', `${searchTime}ms (slow)`);
    } else {
      logTest('Search Speed', 'fail', `${searchTime}ms (too slow)`);
    }
    
  } catch (error) {
    logTest('Performance Tests', 'fail', error.message);
  }
}

// Generate final report
function generateReport() {
  console.log('\n' + '=' .repeat(60));
  console.log('📊 INTEGRATION TEST REPORT');
  console.log('=' .repeat(60));
  
  const total = testResults.passed + testResults.failed + testResults.warnings;
  const passRate = ((testResults.passed / total) * 100).toFixed(1);
  
  console.log(`\n📈 Summary:`);
  console.log(`  Total Tests: ${total}`);
  console.log(`  ${colors.green}Passed: ${testResults.passed}${colors.reset}`);
  console.log(`  ${colors.yellow}Warnings: ${testResults.warnings}${colors.reset}`);
  console.log(`  ${colors.red}Failed: ${testResults.failed}${colors.reset}`);
  console.log(`  Pass Rate: ${passRate}%`);
  
  if (testResults.failed > 0) {
    console.log(`\n❌ Failed Tests:`);
    testResults.details
      .filter(t => t.status === 'fail')
      .forEach(t => console.log(`  - ${t.name}: ${t.message}`));
  }
  
  if (testResults.warnings > 0) {
    console.log(`\n⚠️  Warnings:`);
    testResults.details
      .filter(t => t.status === 'warn')
      .forEach(t => console.log(`  - ${t.name}: ${t.message}`));
  }
  
  // Overall status
  console.log(`\n🎯 Overall Status:`);
  if (testResults.failed === 0 && testResults.warnings === 0) {
    console.log(`  ${colors.green}✅ PERFECT - All systems operational!${colors.reset}`);
  } else if (testResults.failed === 0) {
    console.log(`  ${colors.green}✅ GOOD - System is functional with minor issues${colors.reset}`);
  } else if (testResults.failed <= 2) {
    console.log(`  ${colors.yellow}⚠️  ACCEPTABLE - System needs attention${colors.reset}`);
  } else {
    console.log(`  ${colors.red}❌ CRITICAL - System has major issues${colors.reset}`);
  }
  
  // Save report to file
  const reportPath = path.join(__dirname, '../reports/integration_test_report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    summary: {
      total,
      passed: testResults.passed,
      warnings: testResults.warnings,
      failed: testResults.failed,
      passRate
    },
    details: testResults.details
  }, null, 2));
  
  console.log(`\n💾 Detailed report saved to: reports/integration_test_report.json`);
}

// Main test runner
async function main() {
  console.log('=' .repeat(60));
  console.log('🚀 RUNNING INTEGRATION TESTS');
  console.log('=' .repeat(60));
  
  try {
    // Run all tests
    await testEnvironment();
    const connected = await testSupabaseConnection();
    
    if (connected) {
      await testVectorContent();
      await testEmbeddingModel();
      await testSearchFunctionality();
      await testPerformance();
    }
    
    await testLocalFiles();
    
    // Generate report
    generateReport();
    
    // Exit with appropriate code
    process.exit(testResults.failed > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('\n❌ Fatal error during testing:', error);
    process.exit(1);
  }
}

// Run tests
main();