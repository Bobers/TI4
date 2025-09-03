import fs from 'fs';

const data = JSON.parse(fs.readFileSync('data/vectorEntries.json', 'utf8'));

console.log('=== DATABASE ANALYSIS ===');
console.log(`Total entries: ${data.length}`);

const faqEntries = data.filter(e => e.source === 'official_faq');
const ruleEntries = data.filter(e => e.source !== 'official_faq');

console.log(`FAQ entries: ${faqEntries.length}`);
console.log(`Rule entries: ${ruleEntries.length}`);

console.log('\n=== VICTORY/WIN CONTENT ===');
const winEntries = data.filter(e => {
  const text = (e.text || e.content || e.answer || '').toLowerCase();
  const title = (e.title || e.question || e.section || '').toLowerCase();
  return text.includes('victory') || title.includes('victory') || 
         text.includes('win the game') || title.includes('win') ||
         text.includes('10 victory points') || text.includes('imperial');
}).slice(0, 5);

winEntries.forEach((e, i) => {
  console.log(`\n${i + 1}. ${e.title || e.question || e.section}`);
  console.log(`   Source: ${e.source || 'rule'}`);
  console.log(`   Content: ${(e.answer || e.content || e.text || '').substring(0, 300)}...`);
});

console.log('\n\n=== GHOSTS OF CREUSS CONTENT ===');
const creussEntries = data.filter(e => {
  const text = (e.text || e.content || e.answer || '').toLowerCase();
  const title = (e.title || e.question || e.section || '').toLowerCase();
  return text.includes('creuss') || title.includes('creuss') || 
         text.includes('ghost') || text.includes('wormhole');
}).slice(0, 5);

creussEntries.forEach((e, i) => {
  console.log(`\n${i + 1}. ${e.title || e.question || e.section}`);
  console.log(`   Source: ${e.source || 'rule'}`);
  console.log(`   Content: ${(e.answer || e.content || e.text || '').substring(0, 300)}...`);
});

console.log('\n\n=== SAMPLE FAQ ENTRIES ===');
faqEntries.slice(0, 3).forEach((e, i) => {
  console.log(`\n${i + 1}. Q: ${e.question}`);
  console.log(`   A: ${e.answer}`);
  console.log(`   Full text: ${e.text.substring(0, 200)}...`);
});