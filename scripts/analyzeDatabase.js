#!/usr/bin/env node

import { vectorService } from '../services/nodeVectorService.js';

console.log('📊 Analyzing TI4 Database Content...\n');

async function analyzeDatabase() {
  try {
    await vectorService.initialize();
    const allEntries = await vectorService.getAllEntries();
    
    // Check categories
    const categories = {};
    const sources = {};
    
    allEntries.forEach(e => {
      categories[e.category] = (categories[e.category] || 0) + 1;
      sources[e.source || 'unknown'] = (sources[e.source || 'unknown'] || 0) + 1;
    });
    
    console.log('Database Statistics:');
    console.log('═'.repeat(40));
    console.log(`Total Entries: ${allEntries.length}\n`);
    
    console.log('By Source:');
    Object.entries(sources).forEach(([source, count]) => {
      console.log(`  ${source}: ${count}`);
    });
    
    console.log('\nBy Category:');
    Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .forEach(([cat, count]) => {
        console.log(`  ${cat}: ${count}`);
      });
    
    // Check for specific game components
    console.log('\n' + '═'.repeat(40));
    console.log('Checking for Key Game Components:\n');
    
    const components = {
      'Technologies': ['technology', 'unit upgrade', 'prereq'],
      'Factions': ['hacan', 'sol', 'creuss', 'muaat', 'arborec', 'letnev', 'saar', 'jolnar', 'winnu', 'xxcha', 'yin', 'yssaril', 'argent', 'empyrean', 'mahact', 'naalu', 'nekro', 'nomad', 'titans', 'vuil'],
      'Units': ['dreadnought', 'cruiser', 'destroyer', 'carrier', 'fighter', 'infantry', 'pds', 'space dock', 'war sun', 'flagship', 'mech'],
      'Action Cards': ['action card', 'sabotage', 'direct hit', 'skilled retreat'],
      'Strategy Cards': ['leadership', 'diplomacy', 'politics', 'construction', 'trade', 'warfare', 'technology card', 'imperial'],
      'Objectives': ['public objective', 'secret objective', 'victory point']
    };
    
    for (const [category, keywords] of Object.entries(components)) {
      const matches = allEntries.filter(e => {
        const text = (e.title + ' ' + e.content + ' ' + e.text + ' ' + e.category).toLowerCase();
        return keywords.some(kw => text.includes(kw));
      });
      
      const found = matches.length > 0;
      console.log(`${category}: ${found ? '✅' : '❌'} (${matches.length} entries)`);
      
      if (category === 'Technologies' && matches.length < 10) {
        console.log('  ⚠️  Very few technology entries found!');
      }
    }
    
    // Check for specific missing technologies
    console.log('\n' + '═'.repeat(40));
    console.log('Checking Specific Technologies:\n');
    
    const knownTechs = [
      'Gravity Drive',
      'Antimass Deflectors', 
      'Fleet Logistics',
      'Light/Wave Deflector',
      'Sarween Tools',
      'Neural Motivator',
      'Dacxive Animators',
      'Hyper Metabolism',
      'X-89 Bacterial Weapon',
      'Assault Cannon',
      'Icarus Drive',  // This is what we're looking for
      'Plasma Scoring',
      'Magen Defense Grid',
      'Duranium Armor',
      'Graviton Laser System'
    ];
    
    knownTechs.forEach(tech => {
      const found = allEntries.some(e => {
        const text = (e.title + ' ' + e.content + ' ' + e.text + ' ' + e.question + ' ' + e.answer).toLowerCase();
        return text.includes(tech.toLowerCase());
      });
      console.log(`  ${tech}: ${found ? '✅' : '❌ MISSING'}`);
    });
    
    console.log('\n' + '═'.repeat(40));
    console.log('\n⚠️  Analysis Complete\n');
    
    if (allEntries.filter(e => {
      const text = (e.title + ' ' + e.content + ' ' + e.text).toLowerCase();
      return text.includes('technology') || text.includes('unit upgrade');
    }).length < 20) {
      console.log('🚨 CRITICAL: Technology data appears to be missing!');
      console.log('   The database may not include the technology cards section.');
      console.log('   This would explain why questions about specific techs fail.\n');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

analyzeDatabase().catch(console.error);