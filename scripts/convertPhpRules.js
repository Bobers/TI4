import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to strip HTML tags but preserve content
function stripHtml(html) {
    // Remove script and style content
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    html = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    
    // Replace common HTML entities
    html = html.replace(/&ldquo;/g, '"');
    html = html.replace(/&rdquo;/g, '"');
    html = html.replace(/&lsquo;/g, "'");
    html = html.replace(/&rsquo;/g, "'");
    html = html.replace(/&ndash;/g, '-');
    html = html.replace(/&mdash;/g, '—');
    html = html.replace(/&nbsp;/g, ' ');
    html = html.replace(/&amp;/g, '&');
    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');
    
    // Replace <li> with bullet points and numbers
    let listCounter = 0;
    let inOrderedList = false;
    
    html = html.replace(/<ol[^>]*>/gi, () => {
        inOrderedList = true;
        listCounter = 0;
        return '\n';
    });
    
    html = html.replace(/<\/ol>/gi, () => {
        inOrderedList = false;
        return '\n';
    });
    
    html = html.replace(/<ul[^>]*>/gi, '\n');
    html = html.replace(/<\/ul>/gi, '\n');
    
    html = html.replace(/<li[^>]*>/gi, () => {
        if (inOrderedList) {
            listCounter++;
            return `\n${listCounter}. `;
        } else {
            return '\n• ';
        }
    });
    
    // Replace other common tags
    html = html.replace(/<br\s*\/?>/gi, '\n');
    html = html.replace(/<p[^>]*>/gi, '\n');
    html = html.replace(/<\/p>/gi, '\n');
    html = html.replace(/<h1[^>]*>/gi, '\n### ');
    html = html.replace(/<h2[^>]*>/gi, '\n#### ');
    html = html.replace(/<\/h[1-6]>/gi, '\n');
    
    // Handle <sc> tags (small caps) - just remove them
    html = html.replace(/<sc>/gi, '');
    html = html.replace(/<\/sc>/gi, '');
    
    // Remove all remaining HTML tags
    html = html.replace(/<[^>]+>/g, '');
    
    // Clean up extra whitespace
    html = html.replace(/\n\s*\n\s*\n/g, '\n\n');
    html = html.trim();
    
    return html;
}

// Function to extract content from PHP file
function extractRuleContent(phpContent) {
    // Extract title from header tag
    const headerMatch = phpContent.match(/<header>(.*?)<\/header>/s);
    const title = headerMatch ? stripHtml(headerMatch[1]).trim() : 'Unknown Rule';
    
    // Extract article content
    const articleMatch = phpContent.match(/<article>(.*?)<\/article>/s);
    const content = articleMatch ? stripHtml(articleMatch[1]).trim() : '';
    
    return { title, content };
}

// Main conversion function
function convertPhpRulesToTs() {
    const sourceDir = path.join(__dirname, '../../tirules-main');
    const outputFile = path.join(__dirname, '../data/completeRulebook.ts');
    
    let tsContent = `// This file contains the complete rules from Twilight Imperium 4
// Converted from PHP files in tirules-main
// Generated on ${new Date().toISOString()}

export interface RuleSection {
    id: string;
    title: string;
    content: string;
}

export const COMPLETE_RULES: RuleSection[] = [
`;

    // Process all R_ (rules) files
    const ruleFiles = fs.readdirSync(sourceDir)
        .filter(file => file.startsWith('R_') && file.endsWith('.php'))
        .sort();
    
    console.log(`Found ${ruleFiles.length} rule files to process...`);
    
    ruleFiles.forEach((file, index) => {
        const filePath = path.join(sourceDir, file);
        const phpContent = fs.readFileSync(filePath, 'utf8');
        const { title, content } = extractRuleContent(phpContent);
        
        // Extract rule ID from filename
        const ruleId = file.replace('R_', '').replace('.php', '');
        
        console.log(`Processing ${file} - ${title}`);
        
        // Escape backticks and backslashes in content
        const escapedContent = content
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`');
        
        tsContent += `    {
        id: '${ruleId}',
        title: '${title.replace(/'/g, "\\'")}',
        content: \`${escapedContent}\`
    }${index < ruleFiles.length - 1 ? ',' : ''}\n`;
    });
    
    tsContent += `];

// Component data from C_ files
export interface ComponentData {
    id: string;
    type: string;
    title: string;
    content: string;
}

export const COMPONENT_DATA: ComponentData[] = [
`;

    // Process all C_ (component) files
    const componentFiles = fs.readdirSync(sourceDir)
        .filter(file => file.startsWith('C_') && file.endsWith('.php'))
        .sort();
    
    console.log(`\nFound ${componentFiles.length} component files to process...`);
    
    componentFiles.forEach((file, index) => {
        const filePath = path.join(sourceDir, file);
        const phpContent = fs.readFileSync(filePath, 'utf8');
        const { title, content } = extractRuleContent(phpContent);
        
        // Extract component type from filename
        const componentId = file.replace('C_', '').replace('.php', '');
        
        console.log(`Processing ${file} - ${title}`);
        
        // Escape backticks and backslashes in content
        const escapedContent = content
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`');
        
        tsContent += `    {
        id: '${componentId}',
        type: '${componentId}',
        title: '${title.replace(/'/g, "\\'")}',
        content: \`${escapedContent}\`
    }${index < componentFiles.length - 1 ? ',' : ''}\n`;
    });
    
    tsContent += `];

// Faction data from F_ files
export interface FactionRuleData {
    id: string;
    name: string;
    content: string;
}

export const FACTION_RULES: FactionRuleData[] = [
`;

    // Process all F_ (faction) files
    const factionFiles = fs.readdirSync(sourceDir)
        .filter(file => file.startsWith('F_') && file.endsWith('.php'))
        .sort();
    
    console.log(`\nFound ${factionFiles.length} faction files to process...`);
    
    factionFiles.forEach((file, index) => {
        const filePath = path.join(sourceDir, file);
        const phpContent = fs.readFileSync(filePath, 'utf8');
        const { title, content } = extractRuleContent(phpContent);
        
        // Extract faction ID from filename
        const factionId = file.replace('F_', '').replace('.php', '');
        
        console.log(`Processing ${file} - ${title}`);
        
        // Escape backticks and backslashes in content
        const escapedContent = content
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`');
        
        tsContent += `    {
        id: '${factionId}',
        name: '${title.replace(/'/g, "\\'")}',
        content: \`${escapedContent}\`
    }${index < factionFiles.length - 1 ? ',' : ''}\n`;
    });
    
    tsContent += `];

// Export all rules as a single string for the RAG service
export const ALL_RULES_TEXT = [
    ...COMPLETE_RULES.map(r => \`RULE: \${r.title}\\n\${r.content}\`),
    ...COMPONENT_DATA.map(c => \`COMPONENT: \${c.title}\\n\${c.content}\`),
    ...FACTION_RULES.map(f => \`FACTION: \${f.name}\\n\${f.content}\`)
].join('\\n\\n---\\n\\n');
`;

    // Write the output file
    fs.writeFileSync(outputFile, tsContent);
    console.log(`\nConversion complete! Output written to ${outputFile}`);
}

// Run the conversion
convertPhpRulesToTs();