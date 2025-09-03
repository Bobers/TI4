#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from '@xenova/transformers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function combineAndGenerateEmbeddings() {
  console.log('🔄 Combining FAQ with existing vector entries...\n');
  
  // Load existing vector entries
  const vectorEntriesPath = path.join(__dirname, '../data/vectorEntries.json');
  const faqEntriesPath = path.join(__dirname, '../data/faqEntries.json');
  
  let existingEntries = [];
  if (fs.existsSync(vectorEntriesPath)) {
    existingEntries = JSON.parse(fs.readFileSync(vectorEntriesPath, 'utf8'));
    console.log(`Loaded ${existingEntries.length} existing vector entries`);
  }
  
  // Load FAQ entries
  const faqEntries = JSON.parse(fs.readFileSync(faqEntriesPath, 'utf8'));
  console.log(`Loaded ${faqEntries.length} FAQ entries`);
  
  // Filter out any existing FAQ entries to avoid duplicates
  const nonFAQEntries = existingEntries.filter(entry => entry.source !== 'official_faq');
  console.log(`Keeping ${nonFAQEntries.length} non-FAQ entries`);
  
  // Combine entries with FAQ entries at the beginning (higher priority)
  const combinedEntries = [...faqEntries, ...nonFAQEntries];
  console.log(`Total entries: ${combinedEntries.length}`);
  
  // Generate embeddings for FAQ entries that don't have them
  console.log('\n🧮 Generating embeddings for new FAQ entries...');
  const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  
  let processedCount = 0;
  for (const entry of combinedEntries) {
    if (!entry.embedding || entry.source === 'official_faq') {
      try {
        const output = await extractor(entry.text, { pooling: 'mean', normalize: true });
        entry.embedding = Array.from(output.data);
        processedCount++;
        
        if (processedCount % 20 === 0) {
          console.log(`  Generated ${processedCount} embeddings...`);
        }
      } catch (error) {
        console.error(`Error generating embedding for entry: ${entry.title}`, error);
      }
    }
  }
  
  console.log(`✅ Generated ${processedCount} new embeddings`);
  
  // Save combined entries with embeddings
  fs.writeFileSync(vectorEntriesPath, JSON.stringify(combinedEntries, null, 2));
  console.log(`\n💾 Saved ${combinedEntries.length} total entries to ${vectorEntriesPath}`);
  
  // Show statistics
  const faqCount = combinedEntries.filter(e => e.source === 'official_faq').length;
  const ruleCount = combinedEntries.filter(e => e.source !== 'official_faq').length;
  
  console.log('\n📊 Database Statistics:');
  console.log(`  - FAQ entries: ${faqCount}`);
  console.log(`  - Rule entries: ${ruleCount}`);
  console.log(`  - Total entries: ${combinedEntries.length}`);
  
  // Verify embeddings
  const withEmbeddings = combinedEntries.filter(e => e.embedding && e.embedding.length > 0);
  console.log(`  - Entries with embeddings: ${withEmbeddings.length}`);
  
  if (withEmbeddings.length < combinedEntries.length) {
    console.warn(`⚠️  Warning: ${combinedEntries.length - withEmbeddings.length} entries missing embeddings!`);
  }
  
  console.log('\n✅ FAQ integration complete!');
}

combineAndGenerateEmbeddings().catch(console.error);