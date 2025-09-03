import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Vector Database Schema for TI4 Rules
 * 
 * We'll use a simple JSON-based vector store with the following structure:
 * {
 *   id: string,           // Unique identifier
 *   type: 'rule' | 'component' | 'faction',
 *   category: string,     // subcategory (e.g., 'combat', 'strategy_card', 'abilities')
 *   title: string,        // Human-readable title
 *   section: string,      // 'rules_reference' | 'notes' | 'related_topics' | 'full'
 *   content: string,      // The actual text content
 *   metadata: {           // Additional metadata
 *     ruleNumber?: number,
 *     keywords: string[], // Key terms for this chunk
 *     crossReferences: string[], // Related rule IDs
 *     difficulty: 'basic' | 'intermediate' | 'advanced'
 *   },
 *   embedding?: number[]  // Will be populated by embedding service
 * }
 */

// Rule categories for better organization
const RULE_CATEGORIES = {
    // Core game flow
    'game_round': ['game_round', 'strategy_phase', 'action_phase', 'status_phase', 'agenda_phase'],
    'player_actions': ['tactical_action', 'strategic_action', 'component_action', 'active_player'],
    
    // Combat and movement
    'combat': ['combat', 'space_combat', 'ground_combat', 'invasion', 'bombardment', 'anti_fighter_barrage', 'space_cannon'],
    'movement': ['movement', 'move', 'transport', 'adjacency'],
    
    // Resources and economics
    'resources': ['resources', 'influence', 'trade_goods', 'commodities', 'deals', 'transactions'],
    'production': ['production', 'producing_units', 'construction', 'cost'],
    
    // Game mechanics
    'control': ['control', 'planets', 'systems', 'neighbors', 'blockaded'],
    'command': ['command_tokens', 'command_sheet', 'fleet_pool', 'reinforcements'],
    'cards': ['action_cards', 'agenda_card', 'objective_cards', 'strategy_card'],
    
    // Special mechanics
    'abilities': ['abilities', 'exhausted', 'readied', 'attach', 'purge'],
    'anomalies': ['anomalies', 'asteroid_field', 'gravity_rift', 'nebula', 'supernova', 'wormholes', 'wormhole_nexus'],
    'units': ['units', 'ships', 'ground_forces', 'structures', 'mechs', 'fighters', 'infantry'],
    'victory': ['victory_points', 'elimination', 'objectives'],
    
    // Strategy cards
    'strategy_cards': ['leadership', 'diplomacy', 'politics', 'construction', 'trade', 'warfare', 'technology', 'imperial'],
    
    // Expansion content
    'expansion': ['leaders', 'exploration', 'relics', 'legendary_planets', 'frontier_tokens', 'hyperlanes', 'deploy', 'capture']
};

// Function to categorize a rule
function categorizeRule(ruleId, title) {
    const id = ruleId.toLowerCase();
    const titleLower = title.toLowerCase();
    
    for (const [category, rules] of Object.entries(RULE_CATEGORIES)) {
        if (rules.includes(id) || rules.some(rule => titleLower.includes(rule.replace('_', ' ')))) {
            return category;
        }
    }
    
    return 'miscellaneous';
}

// Function to extract keywords from content
function extractKeywords(title, content) {
    const commonWords = new Set(['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'a', 'an', 'if', 'that', 'this', 'they', 'their', 'them', 'can', 'may', 'must', 'will', 'would', 'should']);
    
    const words = (title + ' ' + content)
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 2 && !commonWords.has(word));
    
    // Count word frequency and take top keywords
    const wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    
    return Object.entries(wordCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([word]) => word);
}

// Function to extract cross-references
function extractCrossReferences(content) {
    const refs = [];
    
    // Look for rule references in Related Topics section
    const relatedMatch = content.match(/RELATED TOPICS:[\s\S]*?(?=\n\n|\n==|$)/);
    if (relatedMatch) {
        const relatedText = relatedMatch[0];
        const topics = relatedText.split('\n')
            .map(line => line.replace(/^•\s*/, '').trim())
            .filter(topic => topic && !topic.includes('RELATED TOPICS'));
        refs.push(...topics);
    }
    
    return refs;
}

// Function to determine difficulty level
function determineDifficulty(title, content) {
    const basicTerms = ['game round', 'victory points', 'resources', 'influence', 'planets', 'units'];
    const advancedTerms = ['timing', 'component action', 'agenda phase', 'abilities', 'modifiers'];
    
    const titleLower = title.toLowerCase();
    const contentLower = content.toLowerCase();
    
    if (basicTerms.some(term => titleLower.includes(term))) return 'basic';
    if (advancedTerms.some(term => titleLower.includes(term) || contentLower.includes(term))) return 'advanced';
    return 'intermediate';
}

/**
 * Process the structured rules file and create vector database entries
 */
function processRulesForVectorDb() {
    const structuredPath = path.join(__dirname, '../TI4_Complete_Rules_Structured.json');
    
    // Check if JSON file exists, if not create it from text file
    if (!fs.existsSync(structuredPath)) {
        console.log('JSON file not found, parsing from text file...');
        // We'll need to parse the text file - for now, let's work with the TypeScript data
        return processFromTypeScript();
    }
    
    const structuredData = JSON.parse(fs.readFileSync(structuredPath, 'utf8'));
    const vectorEntries = [];
    
    // Process rules
    structuredData.rules.forEach((rule, index) => {
        const category = categorizeRule(rule.id, rule.title);
        
        // Create separate entries for each section if they have content
        if (rule.rulesReference) {
            vectorEntries.push({
                id: `rule_${rule.id}_main`,
                type: 'rule',
                category,
                title: rule.title,
                section: 'rules_reference',
                content: rule.rulesReference,
                metadata: {
                    ruleNumber: index + 1,
                    keywords: extractKeywords(rule.title, rule.rulesReference),
                    crossReferences: rule.relatedTopics || [],
                    difficulty: determineDifficulty(rule.title, rule.rulesReference)
                }
            });
        }
        
        if (rule.notes) {
            vectorEntries.push({
                id: `rule_${rule.id}_notes`,
                type: 'rule',
                category,
                title: `${rule.title} - Notes`,
                section: 'notes',
                content: rule.notes,
                metadata: {
                    ruleNumber: index + 1,
                    keywords: extractKeywords(rule.title, rule.notes),
                    crossReferences: rule.relatedTopics || [],
                    difficulty: 'advanced' // Notes are usually advanced clarifications
                }
            });
        }
        
        // Also create a combined entry for comprehensive search
        const fullContent = [rule.rulesReference, rule.notes].filter(Boolean).join('\n\n');
        if (fullContent) {
            vectorEntries.push({
                id: `rule_${rule.id}_full`,
                type: 'rule',
                category,
                title: `${rule.title} - Complete`,
                section: 'full',
                content: fullContent,
                metadata: {
                    ruleNumber: index + 1,
                    keywords: extractKeywords(rule.title, fullContent),
                    crossReferences: rule.relatedTopics || [],
                    difficulty: determineDifficulty(rule.title, fullContent)
                }
            });
        }
    });
    
    return vectorEntries;
}

// Alternative: Process directly from TypeScript file
function processFromTypeScript() {
    const rulebookPath = path.join(__dirname, '../data/completeRulebook.ts');
    const rulebookContent = fs.readFileSync(rulebookPath, 'utf8');
    const vectorEntries = [];
    
    // Parse rules
    const rulesMatch = rulebookContent.match(/export const COMPLETE_RULES: RuleSection\[\] = \[([\s\S]*?)\];/);
    if (rulesMatch) {
        const rulesContent = rulesMatch[1];
        const ruleEntries = rulesContent.split(/\},\s*\{/);
        
        ruleEntries.forEach((entry, index) => {
            const titleMatch = entry.match(/title: '([^']*)'/) || entry.match(/title: "([^"]*)"/);
            const idMatch = entry.match(/id: '([^']*)'/) || entry.match(/id: "([^"]*)"/);
            const contentMatch = entry.match(/content: `([^`]*)`/s);
            
            const title = titleMatch ? titleMatch[1] : 'Unknown Rule';
            const id = idMatch ? idMatch[1] : `rule_${index}`;
            const content = contentMatch ? contentMatch[1] : '';
            
            const category = categorizeRule(id, title);
            
            // Parse structured content
            const sections = parseContentSections(content);
            
            // Add entries for each section
            if (sections.rulesReference) {
                vectorEntries.push({
                    id: `rule_${id}_main`,
                    type: 'rule',
                    category,
                    title: title,
                    section: 'rules_reference',
                    content: sections.rulesReference,
                    metadata: {
                        ruleNumber: index + 1,
                        keywords: extractKeywords(title, sections.rulesReference),
                        crossReferences: sections.relatedTopics,
                        difficulty: determineDifficulty(title, sections.rulesReference)
                    }
                });
            }
            
            if (sections.notes) {
                vectorEntries.push({
                    id: `rule_${id}_notes`,
                    type: 'rule',
                    category,
                    title: `${title} - Notes`,
                    section: 'notes',
                    content: sections.notes,
                    metadata: {
                        ruleNumber: index + 1,
                        keywords: extractKeywords(title, sections.notes),
                        crossReferences: sections.relatedTopics,
                        difficulty: 'advanced'
                    }
                });
            }
            
            // Full content entry
            const fullContent = [sections.rulesReference, sections.notes].filter(Boolean).join('\n\n');
            if (fullContent) {
                vectorEntries.push({
                    id: `rule_${id}_full`,
                    type: 'rule',
                    category,
                    title: `${title} - Complete`,
                    section: 'full',
                    content: fullContent,
                    metadata: {
                        ruleNumber: index + 1,
                        keywords: extractKeywords(title, fullContent),
                        crossReferences: sections.relatedTopics,
                        difficulty: determineDifficulty(title, fullContent)
                    }
                });
            }
        });
    }
    
    return vectorEntries;
}

// Function to parse content sections
function parseContentSections(content) {
    const sections = {
        rulesReference: '',
        notes: '',
        relatedTopics: []
    };
    
    const parts = content.split(/### /);
    
    parts.forEach(part => {
        if (part.startsWith('Notes')) {
            sections.notes = part.replace('Notes\n', '').trim();
        } else if (part.startsWith('Related Topics')) {
            const topics = part.replace('Related Topics\n', '')
                .split('\n')
                .map(line => line.replace(/^•\s*/, '').trim())
                .filter(topic => topic);
            sections.relatedTopics = topics;
        } else if (part.startsWith('Rules Reference')) {
            sections.rulesReference = part.replace('Rules Reference\n', '').trim();
        } else if (part.trim() && !sections.rulesReference) {
            // If no "Rules Reference" header, treat as main content
            sections.rulesReference = part.trim();
        }
    });
    
    return sections;
}

// Main processing function
console.log('🚀 Starting Vector Database Setup for TI4 Rules...\n');

console.log('📊 Processing rules structure...');
const vectorEntries = processFromTypeScript();

console.log(`✅ Processed ${vectorEntries.length} vector entries`);

// Analyze the distribution
const typeDistribution = {};
const categoryDistribution = {};
const sectionDistribution = {};

vectorEntries.forEach(entry => {
    typeDistribution[entry.type] = (typeDistribution[entry.type] || 0) + 1;
    categoryDistribution[entry.category] = (categoryDistribution[entry.category] || 0) + 1;
    sectionDistribution[entry.section] = (sectionDistribution[entry.section] || 0) + 1;
});

console.log('\n📈 Data Distribution:');
console.log('By Type:', typeDistribution);
console.log('By Category:', categoryDistribution);
console.log('By Section:', sectionDistribution);

// Save the processed entries
const outputPath = path.join(__dirname, '../data/vectorEntries.json');
fs.writeFileSync(outputPath, JSON.stringify(vectorEntries, null, 2), 'utf8');

console.log(`\n💾 Vector entries saved to: ${outputPath}`);
console.log(`📏 Total file size: ${(JSON.stringify(vectorEntries).length / 1024).toFixed(2)} KB`);

// Create a schema documentation file
const schemaDoc = `# TI4 Vector Database Schema

## Entry Structure
\`\`\`typescript
interface VectorEntry {
    id: string;              // Unique identifier (e.g., "rule_abilities_main")
    type: 'rule' | 'component' | 'faction';
    category: string;        // Grouped category for filtering
    title: string;          // Human-readable title
    section: string;        // Content section type
    content: string;        // The actual text to embed
    metadata: {
        ruleNumber?: number;
        keywords: string[];
        crossReferences: string[];
        difficulty: 'basic' | 'intermediate' | 'advanced';
    };
    embedding?: number[];   // Will be added by embedding service
}
\`\`\`

## Categories
${Object.entries(RULE_CATEGORIES).map(([cat, rules]) => 
    `- **${cat}**: ${rules.join(', ')}`
).join('\n')}

## Section Types
- **rules_reference**: Core rule mechanics
- **notes**: Clarifications and edge cases
- **related_topics**: Cross-references
- **full**: Combined content for comprehensive search

## Statistics
- Total entries: ${vectorEntries.length}
- Rules: ${typeDistribution.rule || 0}
- Components: ${typeDistribution.component || 0}
- Factions: ${typeDistribution.faction || 0}

Generated: ${new Date().toISOString()}
`;

fs.writeFileSync(path.join(__dirname, '../data/vectorSchema.md'), schemaDoc);
console.log('📖 Schema documentation created');

console.log('\n🎯 Next steps:');
console.log('1. Choose embedding model (Google, OpenAI, or local)');
console.log('2. Generate embeddings for all entries');
console.log('3. Implement vector similarity search');
console.log('4. Update RAG service to use vector search');

export { vectorEntries, RULE_CATEGORIES };