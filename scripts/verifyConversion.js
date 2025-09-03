import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Since this is TypeScript, we'll just do a simple verification
const { COMPLETE_RULES, COMPONENT_DATA, FACTION_RULES } = await import('../data/completeRulebook.ts');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n=== Twilight Imperium Rules Conversion Verification ===\n');

// Count source files
const sourceDir = path.join(__dirname, '../../tirules-main');
const ruleFiles = fs.readdirSync(sourceDir).filter(f => f.startsWith('R_') && f.endsWith('.php'));
const componentFiles = fs.readdirSync(sourceDir).filter(f => f.startsWith('C_') && f.endsWith('.php'));
const factionFiles = fs.readdirSync(sourceDir).filter(f => f.startsWith('F_') && f.endsWith('.php'));

console.log('Source PHP Files:');
console.log(`- Rule files (R_*): ${ruleFiles.length}`);
console.log(`- Component files (C_*): ${componentFiles.length}`);
console.log(`- Faction files (F_*): ${factionFiles.length}`);
console.log(`- Total: ${ruleFiles.length + componentFiles.length + factionFiles.length}`);

console.log('\nConverted TypeScript Data:');
console.log(`- Rules: ${COMPLETE_RULES.length}`);
console.log(`- Components: ${COMPONENT_DATA.length}`);
console.log(`- Factions: ${FACTION_RULES.length}`);
console.log(`- Total: ${COMPLETE_RULES.length + COMPONENT_DATA.length + FACTION_RULES.length}`);

// Check for specific content
console.log('\nContent Verification:');
const hasNotes = COMPLETE_RULES.filter(r => r.content.includes('### Notes')).length;
const hasRelatedTopics = COMPLETE_RULES.filter(r => r.content.includes('### Related Topics')).length;
console.log(`- Rules with Notes sections: ${hasNotes}`);
console.log(`- Rules with Related Topics: ${hasRelatedTopics}`);

// Check for key abilities
const keyContent = [
    'Anti-Fighter Barrage',
    'Bombardment',
    'Space Cannon',
    'Sustain Damage',
    'Production',
    'Planetary Shield'
];

console.log('\nKey Content Check:');
keyContent.forEach(key => {
    const found = COMPLETE_RULES.some(r => r.content.includes(key));
    console.log(`- ${key}: ${found ? '✓' : '✗'}`);
});

// Check faction-specific content
const factionNames = [
    'The Arborec',
    'The Argent Flight',
    'The Mahact Gene-Sorcerers',
    'The Naaz-Rokha Alliance',
    'The Nomad',
    'The Titans of Ul',
    'The Vuil\'raith Cabal'
];

console.log('\nFaction Coverage (including PoK):');
factionNames.forEach(faction => {
    const found = FACTION_RULES.some(f => f.name === faction);
    console.log(`- ${faction}: ${found ? '✓' : '✗'}`);
});

// Calculate total content size
const totalChars = 
    COMPLETE_RULES.reduce((sum, r) => sum + r.content.length, 0) +
    COMPONENT_DATA.reduce((sum, c) => sum + c.content.length, 0) +
    FACTION_RULES.reduce((sum, f) => sum + f.content.length, 0);

console.log(`\nTotal Content Size: ${(totalChars / 1024).toFixed(2)} KB`);
console.log('\n=== Verification Complete ===\n');