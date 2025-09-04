import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@xenova/transformers';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { exec } from 'child_process';
import { promisify } from 'util';

// Load environment variables
dotenv.config({ path: '.env.local' });

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Model for embeddings
const MODEL_NAME = 'Xenova/all-MiniLM-L6-v2';
let extractor;

// GitHub repo URL
const GITHUB_REPO = 'https://github.com/ti-assistant/ti-assistant';
const LOCAL_REPO_PATH = path.join(__dirname, '../../tirules-main');

// Initialize the embedding model
async function initModel() {
  console.log('🔄 Loading embedding model...');
  extractor = await pipeline('feature-extraction', MODEL_NAME);
  console.log('✅ Model loaded');
}

// Generate embedding for text
async function generateEmbedding(text) {
  const output = await extractor(text, { 
    pooling: 'mean',
    normalize: true 
  });
  return Array.from(output.data);
}

// Clone or update GitHub repository
async function updateGitHubRepo() {
  console.log('\n🔄 Updating GitHub repository...');
  
  if (fs.existsSync(LOCAL_REPO_PATH)) {
    // Repository exists, pull latest changes
    console.log('  📥 Pulling latest changes...');
    try {
      await execAsync(`cd ${LOCAL_REPO_PATH} && git pull`);
      console.log('  ✅ Repository updated');
    } catch (error) {
      console.log('  ⚠️ Could not pull, repository may be up to date');
    }
  } else {
    // Clone repository
    console.log('  📥 Cloning repository...');
    await execAsync(`git clone ${GITHUB_REPO} ${LOCAL_REPO_PATH}`);
    console.log('  ✅ Repository cloned');
  }
}

// Process GitHub content
async function processGitHubContent() {
  console.log('\n📚 Processing GitHub Layer (Layer 2)...');
  
  const entries = [];
  
  // Define file patterns to process
  const patterns = [
    { path: 'src/data', category: 'Game Data', extensions: ['.json', '.ts', '.js'] },
    { path: 'src/components', category: 'UI Components', extensions: ['.tsx', '.ts'] },
    { path: 'src/utils', category: 'Utilities', extensions: ['.ts', '.js'] },
    { path: 'docs', category: 'Documentation', extensions: ['.md'] },
    { path: 'rules', category: 'Rules', extensions: ['.md', '.txt'] }
  ];
  
  for (const pattern of patterns) {
    const dirPath = path.join(LOCAL_REPO_PATH, pattern.path);
    if (!fs.existsSync(dirPath)) {
      console.log(`  ⚠️ Directory not found: ${pattern.path}`);
      continue;
    }
    
    console.log(`\n  Processing ${pattern.category}...`);
    const files = await walkDirectory(dirPath);
    
    for (const file of files) {
      const ext = path.extname(file);
      if (pattern.extensions.includes(ext)) {
        try {
          const entry = await processGitHubFile(file, pattern.category);
          if (entry) {
            entries.push(entry);
            console.log(`    ✅ ${path.basename(file)}`);
          }
        } catch (error) {
          console.error(`    ❌ Error processing ${file}:`, error.message);
        }
      }
    }
  }
  
  console.log(`\n✅ Processed ${entries.length} GitHub files`);
  return entries;
}

// Process a single GitHub file
async function processGitHubFile(filePath, category) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  const ext = path.extname(filename);
  
  // Skip if file is too large or binary
  if (content.length > 50000) {
    console.log(`    ⚠️ Skipping large file: ${filename}`);
    return null;
  }
  
  let title = filename;
  let cleanContent = content;
  
  // Process based on file type
  if (ext === '.md') {
    // Extract title from markdown
    const titleMatch = content.match(/^#\s+(.+)$/m);
    title = titleMatch ? titleMatch[1] : filename.replace(/\.(md|txt)$/, '').replace(/[-_]/g, ' ');
    
    // Clean markdown content
    cleanContent = content
      .replace(/^#+\s+/gm, '') // Remove headers
      .replace(/\*\*/g, '') // Remove bold
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .trim();
      
  } else if (['.json', '.js', '.ts', '.tsx'].includes(ext)) {
    // Extract meaningful content from code files
    title = filename.replace(/\.(json|jsx?|tsx?)$/, '').replace(/[-_]/g, ' ');
    
    // Extract comments and structure
    const comments = content.match(/\/\*\*[\s\S]*?\*\//g) || [];
    const functions = content.match(/(?:function|const|let|var)\s+(\w+)/g) || [];
    const classes = content.match(/class\s+(\w+)/g) || [];
    const exports = content.match(/export\s+(?:default\s+)?(\w+)/g) || [];
    
    cleanContent = [
      `File: ${filename}`,
      comments.join('\n'),
      `Functions: ${functions.join(', ')}`,
      `Classes: ${classes.join(', ')}`,
      `Exports: ${exports.join(', ')}`
    ].filter(Boolean).join('\n');
  }
  
  // Create searchable text
  const searchableText = `${title}\n${cleanContent}`.substring(0, 8000);
  
  // Generate embedding
  const embedding = await generateEmbedding(searchableText);
  
  return {
    title,
    content: cleanContent.substring(0, 5000),
    text: searchableText,
    category,
    type: 'github',
    source: 'ti-assistant/ti-assistant',
    embedding
  };
}

// Walk directory recursively
async function walkDirectory(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...await walkDirectory(fullPath));
    } else if (stat.isFile()) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Get last update timestamp
async function getLastUpdateTime() {
  const { data, error } = await supabase
    .from('vector_entries')
    .select('created_at')
    .eq('type', 'github')
    .order('created_at', { ascending: false })
    .limit(1);
  
  if (error || !data || data.length === 0) {
    return null;
  }
  
  return new Date(data[0].created_at);
}

// Check if update is needed
async function checkForUpdates() {
  console.log('\n🔍 Checking for updates...');
  
  const lastUpdate = await getLastUpdateTime();
  if (!lastUpdate) {
    console.log('  ℹ️ No previous GitHub data found');
    return true;
  }
  
  // Check GitHub repo last commit
  try {
    await updateGitHubRepo();
    const { stdout } = await execAsync(`cd ${LOCAL_REPO_PATH} && git log -1 --format=%cd --date=iso`);
    const lastCommit = new Date(stdout.trim());
    
    if (lastCommit > lastUpdate) {
      console.log(`  ✅ New commits found (last update: ${lastUpdate.toISOString()})`);
      return true;
    } else {
      console.log('  ℹ️ No new updates');
      return false;
    }
  } catch (error) {
    console.error('  ❌ Error checking updates:', error);
    return false;
  }
}

// Update GitHub layer in database
async function updateGitHubLayer() {
  console.log('\n📤 Updating GitHub layer in database...');
  
  // Delete old GitHub entries
  console.log('  🗑️ Removing old GitHub entries...');
  const { error: deleteError } = await supabase
    .from('vector_entries')
    .delete()
    .eq('type', 'github');
  
  if (deleteError) {
    console.error('  ❌ Error deleting old entries:', deleteError);
    return [];
  }
  
  // Process new GitHub content
  const entries = await processGitHubContent();
  
  // Upload in batches
  const batchSize = 50;
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    
    const { data, error } = await supabase
      .from('vector_entries')
      .insert(batch);
    
    if (error) {
      console.error(`  ❌ Error uploading batch ${i / batchSize + 1}:`, error);
    } else {
      console.log(`  ✅ Uploaded batch ${i / batchSize + 1} (${batch.length} entries)`);
    }
  }
  
  console.log(`\n✅ GitHub layer updated! Total entries: ${entries.length}`);
  return entries;
}

// Set up webhook listener (optional)
async function setupWebhookListener(port = 3001) {
  console.log(`\n🌐 Setting up webhook listener on port ${port}...`);
  
  const express = await import('express');
  const app = express.default();
  
  app.use(express.json());
  
  app.post('/webhook/github', async (req, res) => {
    console.log('📨 Received GitHub webhook');
    
    // Verify webhook (implement GitHub webhook secret validation)
    // ... webhook validation code ...
    
    // Trigger update
    const needsUpdate = await checkForUpdates();
    if (needsUpdate) {
      await updateGitHubLayer();
    }
    
    res.json({ success: true });
  });
  
  app.listen(port, () => {
    console.log(`  ✅ Webhook listener running on port ${port}`);
    console.log(`  📝 Configure GitHub webhook to: http://your-server:${port}/webhook/github`);
  });
}

// Main function
async function main() {
  try {
    // Initialize model
    await initModel();
    
    // Check if update is needed
    const needsUpdate = await checkForUpdates();
    
    if (needsUpdate) {
      // Update GitHub repo
      await updateGitHubRepo();
      
      // Process and update GitHub layer
      await updateGitHubLayer();
    }
    
    // Optional: Start webhook listener for automatic updates
    if (process.argv.includes('--webhook')) {
      await setupWebhookListener();
    } else {
      console.log('\n💡 Tip: Run with --webhook flag to enable automatic updates');
      process.exit(0);
    }
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the script
main();