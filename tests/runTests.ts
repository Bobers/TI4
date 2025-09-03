import { _forTesting_generateContext } from '../services/geminiService';
import { ragService } from '../services/ragService';
import type { ChatMessage } from '../types';

export interface TestResult {
  name: string;
  passed: boolean;
  message?: string;
}

const runTest = async (name: string, testFn: () => Promise<void>): Promise<TestResult> => {
  try {
    await testFn();
    return { name, passed: true };
  } catch (error) {
    return { name, passed: false, message: (error as Error).message };
  }
};

const defineTests = () => [
  runTest('Distinguishes Faction from Planet', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'tell me about creuss fraction'}]);
    if (!context.includes('Component: The Ghosts of Creuss (Type: Faction)')) {
      throw new Error("Context did not contain the formatted header for 'The Ghosts of Creuss' faction.");
    }
    if (!context.includes('Slipstream:')) {
      throw new Error("Context did not include the formatted 'Slipstream' ability.");
    }
    if (context.includes('Component: Creuss (Type: Planet)')) {
        throw new Error("Context incorrectly prioritized the Planet over the Faction when 'fraction' was specified.");
    }
  }),

  runTest('Identifies Specific Unit Upgrades', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'dreadnought ii stats'}]);
    if (!context.includes('Component: Dreadnought II (Type: Unit)')) {
      throw new Error("Context did not contain the formatted header for 'Dreadnought II' unit.");
    }
    if (!context.includes('Cost: 4, Combat: 5, Move: 2, Capacity: 1')) {
        throw new Error("Context did not include the correct formatted stats for Dreadnought II.");
    }
  }),

  runTest('Handles General Rule Queries (RAG only)', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'how does combat work'}]);
    if (context.includes('Direct Component Lookup:')) {
      throw new Error("Context incorrectly performed a direct lookup for a general query.");
    }
    if (!context.includes('Rulebook Excerpts:')) {
      throw new Error("Context did not include RAG results for a general query.");
    }
     if (!context.includes('Mocked RAG')) {
      throw new Error("Mocked RAG context was not found.");
    }
  }),
  
  runTest('Resolves Ambiguous Single-Word Queries', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'creuss'}]);
    if (!context.includes('Direct Component Lookup:')) {
      throw new Error("Context failed to perform a direct lookup for an ambiguous term.");
    }
    if (!context.includes('Component: The Ghosts of Creuss (Type: Faction)')) {
      throw new Error("Context did not find the Creuss faction on an ambiguous query.");
    }
     if (!context.includes('Component: Creuss (Type: Planet)')) {
      throw new Error("Context did not find the Creuss planet on an ambiguous query.");
    }
  }),
  
  runTest('Handles Partial/Typed Names', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'info on mentak'}]);
    if (!context.includes('Component: The Mentak Coalition (Type: Faction)')) {
      throw new Error("Context did not find 'The Mentak Coalition' from a partial name.");
    }
    if (!context.includes('Pillage:')) {
        throw new Error("Context did not include a known Mentak ability.");
    }
  }),

  runTest('Identifies Multiple Components in a Query', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'Naalu hybrid crystal fighter'}]);
    if (!context.includes('Component: The Naalu Collective (Type: Faction)')) {
        throw new Error("Context did not contain formatted data for 'The Naalu Collective'.");
    }
    // Note: The unit is 'Fighter II', but the Naalu faction sheet lists the ability name.
    // The lookup finds the faction and the generic unit. The AI should connect them.
    if (!context.includes('Component: Fighter II (Type: Unit)')) {
        throw new Error("Context did not contain formatted data for 'Fighter II'.");
    }
  }),

  runTest('Handles Faction Abbreviation (Sardakk)', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'what are sardakk abilities'}]);
    if (!context.includes("Component: The Sardakk N'orr (Type: Faction)")) {
      throw new Error("Context did not find 'The Sardakk N'orr' from the alias 'sardakk'.");
    }
    if (!context.includes('Unrelenting:')) {
      throw new Error("Context did not include the 'Unrelenting' ability for Sardakk N'orr.");
    }
  }),

  runTest('Handles Unit Abbreviation (Dread)', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'what is a dread'}]);
    if (!context.includes("Component: Dreadnought (Type: Unit)")) {
      throw new Error("Context did not find 'Dreadnought' from the alias 'dread'.");
    }
    if (context.includes("Component: Dreadnought II (Type: Unit)")) {
        throw new Error("Context incorrectly prioritized Dreadnought II over the base unit for a general alias.");
    }
  }),

  runTest('Prioritizes Planet with type keyword', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'tell me about creuss planet'}]);
    if (!context.includes("Component: Creuss (Type: Planet)")) {
        throw new Error("Context did not find 'Creuss' planet when 'planet' keyword was used.");
    }
    if (context.includes("Component: The Ghosts of Creuss (Type: Faction)")) {
        throw new Error("Context incorrectly included the Faction when 'planet' was specified.");
    }
  }),

  runTest('Handles multiple aliases in one query', async () => {
    const context = await _forTesting_generateContext([{role: 'user', content: 'sardakk dread stats'}]);
     if (!context.includes("Component: The Sardakk N'orr (Type: Faction)")) {
      throw new Error("Context did not find 'The Sardakk N'orr' from the alias 'sardakk'.");
    }
    if (!context.includes("Component: Dreadnought (Type: Unit)")) {
        throw new Error("Context did not find 'Dreadnought' from the alias 'dread'.");
    }
  }),
  
  runTest('Handles Follow-up Questions', async () => {
    const history: ChatMessage[] = [
        {role: 'user', content: 'what is creuss faction technologies?'},
        {role: 'bot', content: 'The Ghosts of Creuss faction has the following technology: ...'},
        {role: 'user', content: 'not starting, but faction specific'},
    ];
    const context = await _forTesting_generateContext(history);
    if (!context.includes('Component: The Ghosts of Creuss (Type: Faction)')) {
        throw new Error("Context did not correctly use history to identify 'The Ghosts of Creuss' in a follow-up.");
    }
     if (!context.includes('Wormhole Generator')) {
        throw new Error("Context did not include the Creuss faction-specific technology 'Wormhole Generator'.");
    }
    if (context.includes('Component: The Arborec')) {
        throw new Error("Context incorrectly included other factions in a specific follow-up query.");
    }
  }),
];

export const runAllTests = async (): Promise<TestResult[]> => {
  // Mock the RAG service to isolate the direct lookup logic for testing.
  const originalGetContext = ragService.getContext;
  ragService.getContext = () => ['Mocked RAG context chunk.'];
  
  let results: TestResult[] = [];
  try {
    results = await Promise.all(defineTests());
  } finally {
    // Restore original implementation after tests are done, even if they fail.
    ragService.getContext = originalGetContext;
  }
  return results;
};