import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the completeRulebook.ts file
const rulebookPath = path.join(__dirname, '../data/completeRulebook.ts');
const rulebookContent = fs.readFileSync(rulebookPath, 'utf8');

// Function to parse structured content
function parseStructuredContent(content) {
    const sections = {
        rulesReference: '',
        notes: '',
        relatedTopics: ''
    };
    
    // Split by main sections
    const parts = content.split(/### /);
    
    parts.forEach(part => {
        if (part.startsWith('Rules Reference')) {
            sections.rulesReference = part.replace('Rules Reference\n', '').trim();
        } else if (part.startsWith('Notes')) {
            sections.notes = part.replace('Notes\n', '').trim();
        } else if (part.startsWith('Related Topics')) {
            sections.relatedTopics = part.replace('Related Topics\n', '').trim();
        } else if (part.trim()) {
            // If no section marker, it's part of the main content
            sections.rulesReference = (sections.rulesReference + '\n\n' + part).trim();
        }
    });
    
    return sections;
}

// Function to extract content between backticks
function extractContent(section) {
    const matches = section.match(/content: `([^`]*)`/s);
    return matches ? matches[1] : '';
}

// Create structured output
let textContent = `TWILIGHT IMPERIUM 4TH EDITION
COMPLETE RULES REFERENCE - STRUCTURED FORMAT
===============================================
Generated from: https://github.com/bradleysigma/tirules
Date: ${new Date().toISOString()}

This structured format preserves the original organization:
- Rules Reference: Core rules and mechanics
- Notes: Clarifications, examples, and edge cases  
- Related Topics: Cross-references to other rules

===============================================
CONTENTS
===============================================

`;

// First, create a table of contents
const rulesMatch = rulebookContent.match(/export const COMPLETE_RULES: RuleSection\[\] = \[([\s\S]*?)\];/);
if (rulesMatch) {
    const rulesContent = rulesMatch[1];
    const ruleEntries = rulesContent.split(/\},\s*\{/);
    
    textContent += "GAME RULES\n";
    textContent += "-".repeat(50) + "\n";
    
    ruleEntries.forEach((entry, index) => {
        const titleMatch = entry.match(/title: '([^']*)'/) || entry.match(/title: "([^"]*)"/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Rule';
        textContent += `${(index + 1).toString().padStart(3)}. ${title}\n`;
    });
}

textContent += `\n${'='.repeat(80)}\nGAME RULES - DETAILED REFERENCE\n${'='.repeat(80)}\n`;

// Process each rule with structure
if (rulesMatch) {
    const rulesContent = rulesMatch[1];
    const ruleEntries = rulesContent.split(/\},\s*\{/);
    
    ruleEntries.forEach((entry, index) => {
        const titleMatch = entry.match(/title: '([^']*)'/) || entry.match(/title: "([^"]*)"/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Rule';
        const content = extractContent(entry);
        const structured = parseStructuredContent(content);
        
        textContent += `\n\n`;
        textContent += `${'='.repeat(80)}\n`;
        textContent += `${(index + 1).toString().padStart(3)}. ${title.toUpperCase()}\n`;
        textContent += `${'='.repeat(80)}\n\n`;
        
        if (structured.rulesReference) {
            textContent += `RULES REFERENCE:\n`;
            textContent += `${'-'.repeat(40)}\n`;
            textContent += structured.rulesReference + '\n';
        }
        
        if (structured.notes) {
            textContent += `\nNOTES:\n`;
            textContent += `${'-'.repeat(40)}\n`;
            textContent += structured.notes + '\n';
        }
        
        if (structured.relatedTopics) {
            textContent += `\nRELATED TOPICS:\n`;
            textContent += `${'-'.repeat(40)}\n`;
            textContent += structured.relatedTopics + '\n';
        }
    });
}

// Components section
textContent += `\n\n${'#'.repeat(80)}\nCOMPONENTS REFERENCE\n${'#'.repeat(80)}\n`;

const componentsMatch = rulebookContent.match(/export const COMPONENT_DATA: ComponentData\[\] = \[([\s\S]*?)\];/);
if (componentsMatch) {
    const componentsContent = componentsMatch[1];
    const componentEntries = componentsContent.split(/\},\s*\{/);
    
    componentEntries.forEach((entry) => {
        const titleMatch = entry.match(/title: '([^']*)'/) || entry.match(/title: "([^"]*)"/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Component';
        const content = extractContent(entry);
        
        textContent += `\n\n${'='.repeat(80)}\n`;
        textContent += `COMPONENT TYPE: ${title.toUpperCase()}\n`;
        textContent += `${'='.repeat(80)}\n\n`;
        
        // Components are structured differently - they list individual items
        const items = content.split(/^###\s+/m).filter(item => item.trim());
        
        items.forEach(item => {
            const lines = item.trim().split('\n');
            const itemName = lines[0];
            const itemContent = lines.slice(1).join('\n').trim();
            
            if (itemName) {
                textContent += `\n${itemName}\n`;
                textContent += `${'-'.repeat(itemName.length)}\n`;
                if (itemContent) {
                    textContent += itemContent + '\n';
                }
            }
        });
    });
}

// Factions section
textContent += `\n\n${'#'.repeat(80)}\nFACTION-SPECIFIC RULES\n${'#'.repeat(80)}\n`;

const factionsMatch = rulebookContent.match(/export const FACTION_RULES: FactionRuleData\[\] = \[([\s\S]*?)\];/);
if (factionsMatch) {
    const factionsContent = factionsMatch[1];
    const factionEntries = factionsContent.split(/\},\s*\{/);
    
    factionEntries.forEach((entry, index) => {
        const nameMatch = entry.match(/name: '([^']*)'/) || entry.match(/name: "([^"]*)"/);
        const name = nameMatch ? nameMatch[1] : 'Unknown Faction';
        const content = extractContent(entry);
        
        textContent += `\n\n${'='.repeat(80)}\n`;
        textContent += `FACTION: ${name.toUpperCase()}\n`;
        textContent += `${'='.repeat(80)}\n\n`;
        
        // Parse faction abilities and units
        const items = content.split(/^###\s+/m).filter(item => item.trim());
        
        items.forEach(item => {
            const lines = item.trim().split('\n');
            const itemName = lines[0];
            const itemContent = lines.slice(1).join('\n').trim();
            
            if (itemName) {
                textContent += `\n${itemName}\n`;
                textContent += `${'-'.repeat(itemName.length)}\n`;
                if (itemContent) {
                    textContent += itemContent + '\n';
                }
            }
        });
    });
}

textContent += `\n\n${'='.repeat(80)}\n`;
textContent += `END OF STRUCTURED RULES REFERENCE\n`;
textContent += `${'='.repeat(80)}\n`;

// Write to file
const outputPath = path.join(__dirname, '../TI4_Complete_Rules_Structured.txt');
fs.writeFileSync(outputPath, textContent, 'utf8');

console.log(`Structured ruleset exported to: ${outputPath}`);
console.log(`File size: ${(textContent.length / 1024).toFixed(2)} KB`);

// Also create a JSON version for programmatic access
const jsonOutput = {
    metadata: {
        source: 'https://github.com/bradleysigma/tirules',
        generated: new Date().toISOString(),
        totalEntries: 135
    },
    rules: [],
    components: [],
    factions: []
};

// Re-parse for JSON
if (rulesMatch) {
    const rulesContent = rulesMatch[1];
    const ruleEntries = rulesContent.split(/\},\s*\{/);
    
    ruleEntries.forEach((entry) => {
        const titleMatch = entry.match(/title: '([^']*)'/) || entry.match(/title: "([^"]*)"/);
        const idMatch = entry.match(/id: '([^']*)'/) || entry.match(/id: "([^"]*)"/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Rule';
        const id = idMatch ? idMatch[1] : 'unknown';
        const content = extractContent(entry);
        const structured = parseStructuredContent(content);
        
        jsonOutput.rules.push({
            id,
            title,
            rulesReference: structured.rulesReference,
            notes: structured.notes,
            relatedTopics: structured.relatedTopics.split('\n').map(t => t.trim()).filter(t => t && t !== '-')
        });
    });
}

const jsonPath = path.join(__dirname, '../TI4_Complete_Rules_Structured.json');
fs.writeFileSync(jsonPath, JSON.stringify(jsonOutput, null, 2), 'utf8');
console.log(`JSON version exported to: ${jsonPath}`);