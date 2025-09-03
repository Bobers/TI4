import React, { useState } from 'react';
import { runAllTests } from '../tests/runTests';
import type { TestResult } from '../tests/runTests';
import LoadingSpinner from './LoadingSpinner';

interface TestRunnerProps {
  onClose: () => void;
}

const TestRunner: React.FC<TestRunnerProps> = ({ onClose }) => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunTests = async () => {
    setIsRunning(true);
    setResults([]);
    const testResults = await runAllTests();
    setResults(testResults);
    setIsRunning(false);
  };

  const allPassed = results.length > 0 && results.every(r => r.passed);

  return (
    <div className="w-full max-w-4xl bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/30 flex flex-col gap-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-orbitron text-cyan-300">AI Logic Integrity Tests</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
      </div>

      <p className="text-gray-400">
        This suite tests the AI's core logic for retrieving information. It verifies that the hybrid direct-lookup and RAG system can correctly identify specific game components from user queries and provide the correct context to the AI.
      </p>

      <div>
        <button
          onClick={handleRunTests}
          disabled={isRunning}
          className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-all"
        >
          {isRunning ? 'Running Tests...' : 'Run Test Suite'}
        </button>
      </div>

      {isRunning && <LoadingSpinner message="Executing test cases..." />}

      {results.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className={`text-xl font-orbitron ${allPassed ? 'text-green-400' : 'text-red-400'}`}>
            Results: {results.filter(r => r.passed).length} / {results.length} Passed
          </h3>
          {results.map(result => (
            <div key={result.name} className={`p-3 rounded-md border ${result.passed ? 'bg-green-900/50 border-green-700' : 'bg-red-900/50 border-red-700'}`}>
              <div className="flex items-center gap-3">
                <span className={`text-lg font-bold ${result.passed ? 'text-green-400' : 'text-red-400'}`}>
                  {result.passed ? 'PASS' : 'FAIL'}
                </span>
                <span className="text-gray-200">{result.name}</span>
              </div>
              {!result.passed && <p className="mt-2 text-red-300 pl-8 text-sm">{result.message}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestRunner;