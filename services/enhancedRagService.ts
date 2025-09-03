import { vectorService, type VectorEntry, type SearchResult } from './vectorService';

interface RagResult {
    content: string;
    sources: {
        title: string;
        section: string;
        relevance: number;
    }[];
}

class EnhancedRagService {
    private fallbackService: any;

    constructor(fallbackService: any) {
        this.fallbackService = fallbackService;
    }

    /**
     * Get context using vector search with fallback to keyword search
     */
    async getContext(query: string, options: {
        topK?: number;
        includeNotes?: boolean;
        includeFallback?: boolean;
        categories?: string[];
    } = {}): Promise<RagResult> {
        const {
            topK = 5,
            includeNotes = true,
            includeFallback = true,
            categories = []
        } = options;

        try {
            // Try vector search first
            const vectorResults = await vectorService.search(query, {
                topK: topK * 2, // Get more results to filter
                categories,
                includeNotes
            });

            if (vectorResults.length > 0) {
                return this.formatVectorResults(vectorResults, topK);
            }
        } catch (error) {
            console.warn('Vector search failed, falling back to keyword search:', error);
        }

        // Fallback to keyword search
        if (includeFallback && this.fallbackService) {
            const fallbackResults = this.fallbackService.getContext(query, topK);
            return {
                content: fallbackResults.join('\n\n---\n\n'),
                sources: fallbackResults.map((content: string, index: number) => ({
                    title: `Keyword Result ${index + 1}`,
                    section: 'unknown',
                    relevance: 1.0 - (index * 0.1)
                }))
            };
        }

        return {
            content: 'No relevant rules found.',
            sources: []
        };
    }

    /**
     * Format vector search results into context
     */
    private formatVectorResults(results: SearchResult[], maxResults: number): RagResult {
        // Group results by rule to avoid duplicates
        const ruleGroups = new Map<string, SearchResult[]>();
        
        results.forEach(result => {
            const baseRuleId = result.entry.id.replace(/_(?:main|notes|full)$/, '');
            if (!ruleGroups.has(baseRuleId)) {
                ruleGroups.set(baseRuleId, []);
            }
            ruleGroups.get(baseRuleId)!.push(result);
        });

        // Select best results, preferring rules_reference over notes
        const selectedResults: SearchResult[] = [];
        
        for (const [ruleId, groupResults] of ruleGroups) {
            if (selectedResults.length >= maxResults) break;
            
            // Sort by preference: rules_reference > full > notes
            groupResults.sort((a, b) => {
                const sectionPriority = { 'rules_reference': 3, 'full': 2, 'notes': 1 };
                const aPriority = sectionPriority[a.entry.section as keyof typeof sectionPriority] || 0;
                const bPriority = sectionPriority[b.entry.section as keyof typeof sectionPriority] || 0;
                
                if (aPriority !== bPriority) return bPriority - aPriority;
                return b.relevanceScore - a.relevanceScore;
            });
            
            selectedResults.push(groupResults[0]);
            
            // Add notes if highly relevant and we have space
            if (selectedResults.length < maxResults) {
                const notesResult = groupResults.find(r => r.entry.section === 'notes' && r.relevanceScore > 0.5);
                if (notesResult) {
                    selectedResults.push(notesResult);
                }
            }
        }

        // Format content
        const contextParts = selectedResults.map(result => {
            const entry = result.entry;
            const header = `${entry.title}${entry.section === 'notes' ? ' - Notes' : ''}`;
            const separator = '='.repeat(Math.min(header.length, 50));
            
            return `${header}\n${separator}\n\n${entry.content}`;
        });

        const sources = selectedResults.map(result => ({
            title: result.entry.title,
            section: result.entry.section,
            relevance: result.relevanceScore
        }));

        return {
            content: contextParts.join('\n\n---\n\n'),
            sources
        };
    }

    /**
     * Get rule suggestions based on current conversation
     */
    async getSuggestions(query: string, limit: number = 3): Promise<string[]> {
        try {
            const results = await vectorService.search(query, {
                topK: limit,
                minSimilarity: 0.3
            });
            
            return results.map(r => r.entry.title);
        } catch (error) {
            console.warn('Failed to get suggestions:', error);
            return [];
        }
    }

    /**
     * Advanced search with filtering
     */
    async advancedSearch(query: string, filters: {
        difficulty?: 'basic' | 'intermediate' | 'advanced';
        category?: string;
        hasNotes?: boolean;
        ruleNumber?: number;
    } = {}): Promise<SearchResult[]> {
        const results = await vectorService.search(query, {
            topK: 20,
            includeNotes: true
        });

        return results.filter(result => {
            const entry = result.entry;
            const metadata = entry.metadata;

            if (filters.difficulty && metadata.difficulty !== filters.difficulty) return false;
            if (filters.category && entry.category !== filters.category) return false;
            if (filters.hasNotes !== undefined) {
                const hasNotes = entry.section === 'notes';
                if (filters.hasNotes !== hasNotes) return false;
            }
            if (filters.ruleNumber && metadata.ruleNumber !== filters.ruleNumber) return false;

            return true;
        });
    }

    /**
     * Get all rules in a category
     */
    async getCategoryRules(category: string): Promise<VectorEntry[]> {
        await vectorService.initialize();
        return vectorService['entries'].filter(entry => 
            entry.category === category && entry.section === 'rules_reference'
        );
    }
}

export default EnhancedRagService;