#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseFAQ() {
  const faqPath = path.join(__dirname, '../FAQ.txt');
  const faqContent = fs.readFileSync(faqPath, 'utf8');
  
  const lines = faqContent.split('\n');
  const faqEntries = [];
  
  let currentCategory = 'General';
  let currentQuestion = '';
  let currentAnswer = '';
  let isInQuestion = false;
  let isInAnswer = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines and metadata
    if (!line || line === 'FAQ' || line.startsWith('Sign in to edit') || 
        line.startsWith('Category:') || line.startsWith('Contents') ||
        /^\d+$/.test(line) || /^\d+\.\d+/.test(line)) {
      continue;
    }
    
    // Detect main category headers
    if (line === 'General' || line === 'Units & Unit Abilities' || 
        line === 'Promissory Notes' || line === 'Objectives' || 
        line === 'Production' || line === 'Agendas' || 
        line === 'Technology' || line === 'Exploration' || 
        line === 'Action Cards' || line === 'Factions') {
      currentCategory = line;
      continue;
    }
    
    // Detect faction names
    if (line.startsWith('The ') && (
        line.includes('Arborec') || line.includes('Argent Flight') ||
        line.includes('Barony') || line.includes('Clan of Saar') ||
        line.includes('Council Keleres') || line.includes('Embers') ||
        line.includes('Emirates') || line.includes('Empyrean') ||
        line.includes('Ghosts') || line.includes('L1Z1X') ||
        line.includes('Mahact') || line.includes('Mentak') ||
        line.includes('Naalu') || line.includes('Naaz-Rokha') ||
        line.includes('Nekro') || line.includes('Nomad') ||
        line.includes('Sardakk') || line.includes('Titans') ||
        line.includes('Universities') || line.includes('Vuil') ||
        line.includes('Winnu') || line.includes('Xxcha') ||
        line.includes('Yin'))) {
      currentCategory = `Factions - ${line}`;
      continue;
    }
    
    // Detect questions (lines starting with Q:)
    if (line.startsWith('Q:')) {
      // Save previous Q&A if exists
      if (currentQuestion && currentAnswer) {
        faqEntries.push({
          category: currentCategory,
          question: currentQuestion,
          answer: currentAnswer,
          type: 'faq',
          source: 'official_faq'
        });
      }
      
      currentQuestion = line.substring(2).trim();
      currentAnswer = '';
      isInQuestion = true;
      isInAnswer = false;
      continue;
    }
    
    // Detect answers (lines starting with A:)
    if (line.startsWith('A:')) {
      currentAnswer = line.substring(2).trim();
      isInQuestion = false;
      isInAnswer = true;
      continue;
    }
    
    // Continue building multi-line questions or answers
    if (isInQuestion && !line.startsWith('A:')) {
      currentQuestion += ' ' + line;
    } else if (isInAnswer && !line.startsWith('Q:')) {
      // Check if this is a section header (short lines without periods/questions)
      if (line.length > 0 && line.length < 50 && 
          !line.includes('.') && !line.includes('?') && !line.includes(',') &&
          line !== line.toLowerCase() && // Not all lowercase
          !line.includes('the ') && !line.includes('a ')) {
        // This is likely a section header, save current Q&A and stop processing answer
        if (currentQuestion && currentAnswer) {
          faqEntries.push({
            category: currentCategory,
            question: currentQuestion,
            answer: currentAnswer,
            type: 'faq',
            source: 'official_faq'
          });
        }
        currentQuestion = '';
        currentAnswer = '';
        isInAnswer = false;
        
        // This line becomes the new subsection
        currentCategory = `${currentCategory.split(' - ')[0]} - ${line}`;
      } else if (line.length > 0) {
        currentAnswer += ' ' + line;
      }
    }
  }
  
  // Save last Q&A if exists
  if (currentQuestion && currentAnswer) {
    faqEntries.push({
      category: currentCategory,
      question: currentQuestion,
      answer: currentAnswer,
      type: 'faq',
      source: 'official_faq'
    });
  }
  
  // Clean up entries
  faqEntries.forEach(entry => {
    entry.question = entry.question.replace(/\s+/g, ' ').trim();
    entry.answer = entry.answer.replace(/\s+/g, ' ').trim();
    // Create searchable text combining question and answer
    entry.text = `FAQ: ${entry.question} Answer: ${entry.answer}`;
    entry.title = entry.question.substring(0, 100) + (entry.question.length > 100 ? '...' : '');
  });
  
  console.log(`Parsed ${faqEntries.length} FAQ entries`);
  
  // Save parsed FAQ entries
  const outputPath = path.join(__dirname, '../data/faqEntries.json');
  fs.writeFileSync(outputPath, JSON.stringify(faqEntries, null, 2));
  
  console.log(`FAQ entries saved to ${outputPath}`);
  
  // Show sample entries
  console.log('\nSample entries:');
  faqEntries.slice(0, 3).forEach((entry, i) => {
    console.log(`\n${i + 1}. ${entry.category}`);
    console.log(`   Q: ${entry.question.substring(0, 100)}...`);
    console.log(`   A: ${entry.answer.substring(0, 100)}...`);
  });
  
  return faqEntries;
}

parseFAQ();