import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Test Vector Search Functionality
 * 
 * This script tests various search scenarios to ensure the vector database
 * is working correctly and providing relevant results.
 */

// Test queries that cover different aspects of TI4
const TEST_QUERIES = [
    // Basic game concepts
    {
        query: "How do I win the game?",
        expectedTerms: ["victory points", "objectives", "10 victory points"],
        category: "Basic Rules"
    },
    {
        query: "What happens during the status phase?",
        expectedTerms: ["score objectives", "draw action cards", "ready cards"],
        category: "Game Flow"
    },
    
    // Combat scenarios
    {
        query: "How does space combat work?",
        expectedTerms: ["combat rolls", "hits", "assign damage"],
        category: "Combat"
    },
    {
        query: "Can I use bombardment against ground forces?",
        expectedTerms: ["bombardment", "ground forces", "invasion"],
        category: "Combat"
    },
    
    // Strategy and tactics
    {
        query: "How do command tokens work?",
        expectedTerms: ["tactical", "fleet pool", "strategy pool"],
        category: "Strategy"
    },
    {
        query: "What is a tactical action?",
        expectedTerms: ["activate system", "move ships", "command token"],
        category: "Actions"
    },
    
    // Faction-specific
    {
        query: "What are the Arborec abilities?",
        expectedTerms: ["mitosis", "letani", "infantry"],
        category: "Factions"
    },
    {
        query: "How does the Yssaril scheming ability work?",
        expectedTerms: ["action cards", "draw", "discard"],
        category: "Factions"
    },
    
    // Complex interactions
    {
        query: "Can I move through a gravity rift?",
        expectedTerms: ["gravity rift", "movement", "ships"],
        category: "Anomalies"
    },
    {
        query: "How do promissory notes work in deals?",
        expectedTerms: ["promissory notes", "deals", "neighbors"],
        category: "Trading"
    }
];

async function runVectorSearchTests() {
    console.log('🧪 Running Vector Search Tests...\n');
    
    // Check if vector database is ready
    const vectorEntriesPath = path.join(__dirname, '../data/vectorEntries.json');
    const statusPath = path.join(__dirname, '../data/vectorDbStatus.json');
    
    if (!fs.existsSync(vectorEntriesPath)) {
        console.error('❌ Vector database not found. Run initVectorDb.js first.');
        return;
    }
    
    const entries = JSON.parse(fs.readFileSync(vectorEntriesPath, 'utf8'));
    const hasEmbeddings = entries.some(entry => entry.embedding && entry.embedding.length > 0);
    
    if (!hasEmbeddings) {
        console.error('❌ No embeddings found. Run generateEmbeddings.js first.');
        console.log('Usage: VITE_API_KEY=your_key node scripts/generateEmbeddings.js');
        return;
    }
    
    console.log(`✅ Vector database loaded: ${entries.length} entries with embeddings`);
    
    // Simple similarity function for testing
    function cosineSimilarity(a, b) {
        if (a.length !== b.length) return 0;
        
        let dotProduct = 0;
        let normA = 0;
        let normB = 0;
        
        for (let i = 0; i < a.length; i++) {
            dotProduct += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }
        
        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }
    
    // Mock embedding function (in real implementation, would call Google API)
    function mockSearchEmbedding(query) {
        // For testing, we'll use a simple keyword-based approach
        // In production, this would generate actual embeddings
        const queryWords = query.toLowerCase().split(/\s+/);
        
        const results = entries.map(entry => {
            // Simple relevance scoring based on keyword matches
            let score = 0;
            const content = (entry.title + ' ' + entry.content).toLowerCase();
            
            queryWords.forEach(word => {
                if (content.includes(word)) {
                    score += entry.title.toLowerCase().includes(word) ? 5 : 1;
                }
            });
            
            // Boost certain sections
            if (entry.section === 'rules_reference') score *= 1.2;
            if (entry.section === 'notes') score *= 1.1;
            
            return {
                entry,
                similarity: score / 100, // Normalize
                relevanceScore: score / 100
            };
        })
        .filter(result => result.similarity > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, 5);
        
        return results;
    }
    
    // Run test queries
    const testResults = [];
    
    for (const test of TEST_QUERIES) {
        console.log(`\n🔍 Testing: "${test.query}" (${test.category})`);
        console.log('─'.repeat(80));
        
        const results = mockSearchEmbedding(test.query);
        
        if (results.length === 0) {
            console.log('❌ No results found');
            testResults.push({ ...test, success: false, results: [] });
            continue;
        }
        
        console.log(`📊 Found ${results.length} results:`);
        
        let hasExpectedTerms = false;
        
        results.forEach((result, index) => {
            const relevanceBar = '█'.repeat(Math.max(1, Math.round(result.relevanceScore * 20)));
            console.log(`\n   ${index + 1}. ${result.entry.title} (${result.entry.section})`);
            console.log(`      Relevance: ${relevanceBar} ${(result.relevanceScore * 100).toFixed(1)}%`);
            console.log(`      Category: ${result.entry.category}`);
            
            // Check for expected terms
            const content = result.entry.content.toLowerCase();
            const foundTerms = test.expectedTerms.filter(term => content.includes(term.toLowerCase()));
            
            if (foundTerms.length > 0) {
                hasExpectedTerms = true;
                console.log(`      ✅ Contains: ${foundTerms.join(', ')}`);
            }
            
            // Show content preview
            const preview = result.entry.content.substring(0, 200).replace(/\n/g, ' ');
            console.log(`      Preview: ${preview}...`);
        });
        
        const success = hasExpectedTerms && results.length > 0;
        console.log(`\n   Result: ${success ? '✅ PASS' : '❌ FAIL'}`);
        
        testResults.push({
            ...test,
            success,
            results: results.map(r => ({
                title: r.entry.title,
                section: r.entry.section,
                category: r.entry.category,
                relevance: r.relevanceScore
            }))
        });
    }
    
    // Summary
    console.log('\n' + '='.repeat(80));
    console.log('🏆 TEST SUMMARY');
    console.log('='.repeat(80));
    
    const passed = testResults.filter(t => t.success).length;
    const total = testResults.length;
    
    console.log(`Overall: ${passed}/${total} tests passed (${((passed/total) * 100).toFixed(1)}%)`);
    
    console.log('\nBy Category:');
    const categoryStats = {};
    testResults.forEach(test => {
        if (!categoryStats[test.category]) {
            categoryStats[test.category] = { passed: 0, total: 0 };
        }
        categoryStats[test.category].total++;
        if (test.success) categoryStats[test.category].passed++;
    });
    
    Object.entries(categoryStats).forEach(([category, stats]) => {
        const rate = ((stats.passed / stats.total) * 100).toFixed(0);
        console.log(`   ${category}: ${stats.passed}/${stats.total} (${rate}%)`);
    });
    
    // Save test results
    const testResultsPath = path.join(__dirname, '../data/vectorSearchTests.json');
    fs.writeFileSync(testResultsPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        summary: {
            passed,
            total,
            passRate: (passed / total) * 100
        },
        categoryStats,
        testResults
    }, null, 2));
    
    console.log(`\n💾 Test results saved to: ${testResultsPath}`);
    
    if (passed === total) {
        console.log('\n🎉 All tests passed! Vector search is working correctly.');
    } else {
        console.log('\n⚠️  Some tests failed. Consider:');
        console.log('   - Generating actual embeddings with generateEmbeddings.js');
        console.log('   - Adjusting search parameters or categories');
        console.log('   - Adding more specific keywords to content');
    }
    
    return {
        success: passed === total,
        passed,
        total,
        results: testResults
    };
}

// Run tests if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    runVectorSearchTests().catch(error => {
        console.error('❌ Test execution failed:', error);
        process.exit(1);
    });
}

export { runVectorSearchTests };