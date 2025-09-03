import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the completeRulebook.ts file and extract the content
const rulebookPath = path.join(__dirname, '../data/completeRulebook.ts');
const rulebookContent = fs.readFileSync(rulebookPath, 'utf8');

// Function to extract content between backticks
function extractContent(section) {
    const matches = section.match(/content: `([^`]*)`/s);
    return matches ? matches[1] : '';
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

SECTION 1: GAME RULES
SECTION 2: COMPONENTS
SECTION 3: FACTIONS

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
        const content = extractContent(entry);
        
        textContent += `\n${'-'.repeat(80)}\n`;
        textContent += `${index + 1}. ${title.toUpperCase()}\n`;
        textContent += `${'-'.repeat(80)}\n\n`;
        textContent += content.trim() + '\n\n';
    });
}

textContent += `\n${'='.repeat(80)}\nSECTION 2: COMPONENTS\n${'='.repeat(80)}\n\n`;

// Extract COMPONENT_DATA
const componentsMatch = rulebookContent.match(/export const COMPONENT_DATA: ComponentData\[\] = \[([\s\S]*?)\];/);
if (componentsMatch) {
    const componentsContent = componentsMatch[1];
    const componentEntries = componentsContent.split(/\},\s*\{/);
    
    componentEntries.forEach((entry) => {
        const titleMatch = entry.match(/title: '([^']*)'/) || entry.match(/title: "([^"]*)"/);
        const title = titleMatch ? titleMatch[1] : 'Unknown Component';
        const content = extractContent(entry);
        
        textContent += `\n${'-'.repeat(80)}\n`;
        textContent += `${title.toUpperCase()}\n`;
        textContent += `${'-'.repeat(80)}\n\n`;
        textContent += content.trim() + '\n\n';
    });
}

textContent += `\n${'='.repeat(80)}\nSECTION 3: FACTIONS\n${'='.repeat(80)}\n\n`;

// Extract FACTION_RULES
const factionsMatch = rulebookContent.match(/export const FACTION_RULES: FactionRuleData\[\] = \[([\s\S]*?)\];/);
if (factionsMatch) {
    const factionsContent = factionsMatch[1];
    const factionEntries = factionsContent.split(/\},\s*\{/);
    
    factionEntries.forEach((entry) => {
        const nameMatch = entry.match(/name: '([^']*)'/) || entry.match(/name: "([^"]*)"/);
        const name = nameMatch ? nameMatch[1] : 'Unknown Faction';
        const content = extractContent(entry);
        
        textContent += `\n${'-'.repeat(80)}\n`;
        textContent += `${name.toUpperCase()}\n`;
        textContent += `${'-'.repeat(80)}\n\n`;
        textContent += content.trim() + '\n\n';
    });
}

textContent += `\n${'='.repeat(80)}\nEND OF RULES COMPENDIUM\n${'='.repeat(80)}\n`;

// Write to file
const outputPath = path.join(__dirname, '../TI4_Complete_Rules.txt');
fs.writeFileSync(outputPath, textContent, 'utf8');

console.log(`Complete ruleset exported to: ${outputPath}`);
console.log(`File size: ${(textContent.length / 1024).toFixed(2)} KB`);