#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_API_BASE = 'https://api.github.com/repos/bradleysigma/tirules/contents';
const RAW_BASE = 'https://raw.githubusercontent.com/bradleysigma/tirules/master';

console.log('🔄 Syncing TI4 Rules from GitHub Repository...\n');
console.log('Source: https://github.com/bradleysigma/tirules\n');

// Function to fetch data from GitHub API
function fetchFromGitHub(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'TI4-RuleMaster-Sync' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

// Function to fetch raw file content
function fetchRawFile(path) {
  return new Promise((resolve, reject) => {
    const url = `${RAW_BASE}/${path}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Parse PHP file content to extract structured data
function parsePHPFile(content, filename) {
  console.log(`📄 Parsing ${filename}...`);
  
  const entries = [];
  
  // Extract header/title
  const headerMatch = content.match(/<header>(.*?)<\/header>/s);
  const mainTitle = headerMatch ? headerMatch[1].trim() : filename.replace('.php', '');
  
  // Extract all h1 sections with their content
  const h1Sections = content.match(/<h1>.*?(?=<h1>|<\/article>|$)/gs) || [];
  
  h1Sections.forEach(section => {
    const titleMatch = section.match(/<h1>(.*?)<\/h1>/);
    if (!titleMatch) return;
    
    let title = titleMatch[1];
    let type = '';
    
    // Extract type from subtitle
    const subMatch = title.match(/^(.*?)\s*<sub>\((.*?)\)<\/sub>$/);
    if (subMatch) {
      title = subMatch[1].trim();
      type = subMatch[2].trim();
    }
    
    // Extract content (remove HTML tags for clean text)
    let content = section.replace(/<h1>.*?<\/h1>/, '').trim();
    content = content
      .replace(/<[^>]+>/g, ' ')  // Remove HTML tags
      .replace(/\s+/g, ' ')      // Normalize whitespace
      .trim();
    
    if (title && content) {
      entries.push({
        title: title,
        type: type,
        category: mainTitle,
        content: content,
        source: 'tirules_github',
        filename: filename
      });
      
      console.log(`  ✅ ${title}${type ? ` (${type})` : ''}`);
    }
  });
  
  return entries;
}

async function syncRulesData() {
  try {
    console.log('1️⃣ Fetching repository structure...\n');
    
    // Get list of PHP files from the repo
    const repoContents = await fetchFromGitHub(GITHUB_API_BASE);
    
    if (!Array.isArray(repoContents)) {
      throw new Error('Failed to fetch repository contents');
    }
    
    const phpFiles = repoContents.filter(file => 
      file.name.endsWith('.php') && 
      !file.name.includes('prefix') && 
      !file.name.includes('suffix') &&
      !file.name.includes('index')
    );
    
    console.log(`Found ${phpFiles.length} PHP files:\n`);
    phpFiles.forEach(file => console.log(`  📄 ${file.name}`));
    
    console.log('\n2️⃣ Fetching and parsing files...\n');
    
    const allEntries = [];
    let totalSections = 0;
    
    for (const file of phpFiles) {
      try {
        console.log(`\n📥 Fetching ${file.name}...`);
        const content = await fetchRawFile(file.name);
        
        const entries = parsePHPFile(content, file.name);
        allEntries.push(...entries);
        totalSections += entries.length;
        
        console.log(`  📊 Extracted ${entries.length} sections`);
        
        // Small delay to be nice to GitHub
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`  ❌ Failed to process ${file.name}:`, error.message);
      }
    }
    
    console.log('\n3️⃣ Processing results...\n');
    console.log(`📊 Total entries extracted: ${allEntries.length}`);
    console.log(`📊 Total sections: ${totalSections}`);
    
    // Group by category
    const categories = {};
    allEntries.forEach(entry => {
      categories[entry.category] = (categories[entry.category] || 0) + 1;
    });
    
    console.log('\n📋 Content by category:');
    Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .forEach(([cat, count]) => {
        console.log(`  ${cat}: ${count} entries`);
      });
    
    // Save to file
    const outputPath = path.join(__dirname, '../data/githubRulesData.json');
    fs.writeFileSync(outputPath, JSON.stringify(allEntries, null, 2));
    
    console.log(`\n✅ Data saved to: ${outputPath}`);
    console.log(`\n🎉 Sync complete! Ready to rebuild vector database.`);
    
    // Show some examples
    console.log('\n📄 Sample entries:');
    allEntries.slice(0, 3).forEach((entry, i) => {
      console.log(`\n${i + 1}. ${entry.title}${entry.type ? ` (${entry.type})` : ''}`);
      console.log(`   Category: ${entry.category}`);
      console.log(`   Content: ${entry.content.substring(0, 150)}...`);
    });
    
    return allEntries;
    
  } catch (error) {
    console.error('❌ Sync failed:', error);
    process.exit(1);
  }
}

// Check if we should also fetch FAQ data
async function fetchFAQIfNeeded() {
  console.log('\n4️⃣ Checking for FAQ data...\n');
  
  try {
    // Check if there's an FAQ file or data we should also fetch
    console.log('ℹ️  FAQ data already available from previous work');
    console.log('   Will combine with GitHub rules data in next step');
  } catch (error) {
    console.log('⚠️  No additional FAQ data found');
  }
}

// Main execution
async function main() {
  const rulesData = await syncRulesData();
  await fetchFAQIfNeeded();
  
  console.log('\n' + '='.repeat(60));
  console.log(`\n✅ GitHub sync complete!`);
  console.log(`📊 Extracted ${rulesData.length} rule entries from official source`);
  console.log(`\n🔄 Next step: Run rebuild script to create new vector database`);
  console.log(`💡 This will replace the corrupted data with official content`);
}

main().catch(console.error);