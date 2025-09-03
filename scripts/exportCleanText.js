import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the completeRulebook.ts file and extract the content
const rulebookPath = path.join(__dirname, '../data/completeRulebook.ts');
const rulebookContent = fs.readFileSync(rulebookPath, 'utf8');

// Function to extract content between backticks and clean markdown
function extractAndCleanContent(section) {
    const matches = section.match(/content: `([^`]*)`/s);
    if (!matches) return '';
    
    let content = matches[1];
    
    // Remove markdown headers
    content = content.replace(/#{1,6}\s+/g, '');
    
    // Convert bullet points to simple dashes
    content = content.replace(/^•\s+/gm, '- ');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    return content.trim();
}

// Parse the file to extract all content
let textContent = `TWILIGHT IMPERIUM 4TH EDITION
COMPLETE RULES COMPENDIUM
Generated from https://github.com/bradleysigma/tirules
Date: ${new Date().toISOString()}

This document contains all rules from:
- Base Game Rules Reference
- Prophecy of Kings Expansion
- Living Rules Reference v2.0
- Codex I: Ordinian
- Codex II: Affinity  
- Codex III: Vigil

================================================================================
TABLE OF CONTENTS
================================================================================

SECTION 1: GAME RULES (101 entries)
SECTION 2: COMPONENTS (9 categories)  
SECTION 3: FACTIONS (25 factions)

================================================================================
SECTION 1: GAME RULES
================================================================================
`;

// Extract COMPLETE_RULES
const rulesMatch = rulebookContent.match(/export const COMPLETE_RULES: RuleSection\[\] = \[([\s\S]*?)\];/);
if (rulesMatch) {
    const rulesContent = rulesMatch[1];
    const ruleEntries = rulesContent.split(/\},\s*\{/);
    
    ruleEntries.forEach((entry, index) => {
        const titleMatch = entry.match(/title: '([^']*)'/) || entry.match(/title: "([^"]*)"/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Rule';
        const content = extractAndCleanContent(entry);
        
        textContent += `\n`;
        textContent += `${'-'.repeat(80)}\n`;
        textContent += `RULE ${index + 1}: ${title.toUpperCase()}\n`;
        textContent += `${'-'.repeat(80)}\n\n`;
        textContent += content + '\n';
    });
}

textContent += `\n\n${'='.repeat(80)}\nSECTION 2: COMPONENTS\n${'='.repeat(80)}\n`;

// Extract COMPONENT_DATA
const componentsMatch = rulebookContent.match(/export const COMPONENT_DATA: ComponentData\[\] = \[([\s\S]*?)\];/);
if (componentsMatch) {
    const componentsContent = componentsMatch[1];
    const componentEntries = componentsContent.split(/\},\s*\{/);
    
    componentEntries.forEach((entry, index) => {
        const titleMatch = entry.match(/title: '([^']*)'/) || entry.match(/title: "([^"]*)"/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Component';
        const content = extractAndCleanContent(entry);
        
        textContent += `\n`;
        textContent += `${'-'.repeat(80)}\n`;
        textContent += `COMPONENT CATEGORY: ${title.toUpperCase()}\n`;
        textContent += `${'-'.repeat(80)}\n\n`;
        textContent += content + '\n';
    });
}

textContent += `\n\n${'='.repeat(80)}\nSECTION 3: FACTIONS\n${'='.repeat(80)}\n`;

// Extract FACTION_RULES
const factionsMatch = rulebookContent.match(/export const FACTION_RULES: FactionRuleData\[\] = \[([\s\S]*?)\];/);
if (factionsMatch) {
    const factionsContent = factionsMatch[1];
    const factionEntries = factionsContent.split(/\},\s*\{/);
    
    factionEntries.forEach((entry, index) => {
        const nameMatch = entry.match(/name: '([^']*)'/) || entry.match(/name: "([^"]*)"/);
        const name = nameMatch ? nameMatch[1] : 'Unknown Faction';
        const content = extractAndCleanContent(entry);
        
        textContent += `\n`;
        textContent += `${'-'.repeat(80)}\n`;
        textContent += `FACTION ${index + 1}: ${name.toUpperCase()}\n`;
        textContent += `${'-'.repeat(80)}\n\n`;
        textContent += content + '\n';
    });
}

textContent += `\n\n${'='.repeat(80)}\nEND OF TWILIGHT IMPERIUM 4TH EDITION RULES COMPENDIUM\n${'='.repeat(80)}\n\n`;
textContent += `Total Entries: 135 (101 rules + 9 component categories + 25 factions)\n`;
textContent += `File Generated: ${new Date().toISOString()}\n`;

// Write to file
const outputPath = path.join(__dirname, '../TI4_Complete_Rules_Clean.txt');
fs.writeFileSync(outputPath, textContent, 'utf8');

console.log(`Clean ruleset exported to: ${outputPath}`);
console.log(`File size: ${(textContent.length / 1024).toFixed(2)} KB`);
console.log(`Character count: ${textContent.length.toLocaleString()}`);

// Also create a markdown version for easy reading
const mdPath = path.join(__dirname, '../TI4_Complete_Rules.md');
fs.copyFileSync(path.join(__dirname, '../TI4_Complete_Rules.txt'), mdPath);
console.log(`Markdown version also created at: ${mdPath}`);