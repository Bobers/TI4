import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Complete Vector Database Initialization Script
 * 
 * This script:
 * 1. Processes the structured rules data
 * 2. Sets up the vector database schema
 * 3. Prepares for embedding generation
 * 4. Creates the complete vector search system
 */

async function initializeVectorDatabase() {
    console.log('🔧 Initializing TI4 Vector Database System...\n');
    
    // Step 1: Ensure we have the structured data
    console.log('📁 Step 1: Checking data files...');
    
    const structuredJsonPath = path.join(__dirname, '../TI4_Complete_Rules_Structured.json');
    const vectorEntriesPath = path.join(__dirname, '../data/vectorEntries.json');
    
    if (!fs.existsSync(structuredJsonPath)) {
        console.log('⚠️  Structured JSON not found, creating from TypeScript data...');
        // Run the vector setup script
        const { execSync } = await import('child_process');
        execSync('node scripts/vectorDbSetup.js', { stdio: 'inherit', cwd: process.cwd() });
    }
    
    console.log('✅ Vector entries file ready');
    
    // Step 2: Analyze the data structure
    console.log('\n📊 Step 2: Analyzing data structure...');
    
    const vectorEntries = JSON.parse(fs.readFileSync(vectorEntriesPath, 'utf8'));
    
    const analysis = {
        totalEntries: vectorEntries.length,
        byType: {},
        byCategory: {},
        bySection: {},
        bySectionAndType: {},
        withEmbeddings: 0,
        avgContentLength: 0,
        maxContentLength: 0,
        minContentLength: Number.MAX_SAFE_INTEGER
    };
    
    let totalContentLength = 0;
    
    vectorEntries.forEach(entry => {
        // Type distribution
        analysis.byType[entry.type] = (analysis.byType[entry.type] || 0) + 1;
        
        // Category distribution
        analysis.byCategory[entry.category] = (analysis.byCategory[entry.category] || 0) + 1;
        
        // Section distribution
        analysis.bySection[entry.section] = (analysis.bySection[entry.section] || 0) + 1;
        
        // Combined distribution
        const key = `${entry.type}_${entry.section}`;
        analysis.bySectionAndType[key] = (analysis.bySectionAndType[key] || 0) + 1;
        
        // Embedding status
        if (entry.embedding && entry.embedding.length > 0) {
            analysis.withEmbeddings++;
        }
        
        // Content length analysis
        const contentLength = entry.content.length;
        totalContentLength += contentLength;
        analysis.maxContentLength = Math.max(analysis.maxContentLength, contentLength);
        analysis.minContentLength = Math.min(analysis.minContentLength, contentLength);
    });
    
    analysis.avgContentLength = Math.round(totalContentLength / vectorEntries.length);
    
    console.log('📈 Database Analysis:');
    console.log(`   Total entries: ${analysis.totalEntries}`);
    console.log(`   With embeddings: ${analysis.withEmbeddings}`);
    console.log(`   Average content length: ${analysis.avgContentLength} chars`);
    console.log(`   Content length range: ${analysis.minContentLength} - ${analysis.maxContentLength} chars`);
    
    console.log('\n📋 Distribution by Type:');
    Object.entries(analysis.byType).forEach(([type, count]) => {
        console.log(`   ${type}: ${count}`);
    });
    
    console.log('\n📋 Distribution by Section:');
    Object.entries(analysis.bySection).forEach(([section, count]) => {
        console.log(`   ${section}: ${count}`);
    });
    
    console.log('\n📋 Top Categories:');
    Object.entries(analysis.byCategory)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .forEach(([category, count]) => {
            console.log(`   ${category}: ${count}`);
        });
    
    // Step 3: Create database configuration
    console.log('\n⚙️  Step 3: Creating database configuration...');
    
    const dbConfig = {
        version: '1.0.0',
        created: new Date().toISOString(),
        source: 'https://github.com/bradleysigma/tirules',
        embeddingModel: 'text-embedding-004',
        embeddingDimensions: 768, // Google's embedding dimension
        totalEntries: analysis.totalEntries,
        searchConfig: {
            defaultTopK: 5,
            minSimilarity: 0.1,
            categoryWeights: {
                combat: 1.2,     // Boost combat rules (frequently asked)
                abilities: 1.1,  // Boost ability rules
                game_round: 1.1, // Boost core game flow
                expansion: 0.9   // Slightly reduce expansion content
            },
            sectionWeights: {
                rules_reference: 1.0,
                full: 0.9,
                notes: 0.8
            }
        },
        analysis
    };
    
    const configPath = path.join(__dirname, '../data/vectorDbConfig.json');
    fs.writeFileSync(configPath, JSON.stringify(dbConfig, null, 2));
    console.log(`✅ Configuration saved to: ${configPath}`);
    
    // Step 4: Create initialization status
    const statusPath = path.join(__dirname, '../data/vectorDbStatus.json');
    const status = {
        initialized: true,
        lastUpdated: new Date().toISOString(),
        embeddingsGenerated: analysis.withEmbeddings > 0,
        readyForSearch: analysis.withEmbeddings === analysis.totalEntries,
        stats: analysis
    };
    
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));
    console.log(`✅ Status file created: ${statusPath}`);
    
    // Step 5: Next steps
    console.log('\n🎯 Next Steps:');
    
    if (analysis.withEmbeddings === 0) {
        console.log('1. Generate embeddings: node scripts/generateEmbeddings.js');
        console.log('   (Requires VITE_API_KEY environment variable)');
    } else if (analysis.withEmbeddings < analysis.totalEntries) {
        console.log('1. Complete embedding generation: node scripts/generateEmbeddings.js');
    } else {
        console.log('1. ✅ Embeddings already complete!');
    }
    
    console.log('2. Test vector search: node scripts/testVectorSearch.js');
    console.log('3. Update main app to use enhanced RAG service');
    console.log('4. Deploy and test semantic search functionality');
    
    console.log('\n🚀 Vector database initialization complete!');
    
    return {
        success: true,
        analysis,
        nextSteps: analysis.withEmbeddings < analysis.totalEntries ? 'generate_embeddings' : 'test_search'
    };
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    initializeVectorDatabase().catch(error => {
        console.error('❌ Initialization failed:', error);
        process.exit(1);
    });
}

export { initializeVectorDatabase };