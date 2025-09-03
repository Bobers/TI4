import React, { useState, useEffect } from 'react';
import { vectorService } from './services/clientVectorService';

const SimpleApp: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        await vectorService.initialize();
        setInitialized(true);
      } catch (error) {
        console.error('Failed to initialize:', error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const handleSearch = async () => {
    if (!query.trim() || !initialized) return;
    
    setLoading(true);
    try {
      const searchResults = await vectorService.search(query, 5);
      setResults(searchResults);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0e27',
      color: '#fff',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Twilight Imperium 4 Rules Search
        </h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Ask about TI4 rules... (e.g., 'How does space combat work?')"
              disabled={!initialized || loading}
              style={{
                flex: 1,
                padding: '1rem',
                fontSize: '1rem',
                backgroundColor: '#1e293b',
                color: '#fff',
                border: '1px solid #475569',
                borderRadius: '0.5rem',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSearch}
              disabled={!initialized || loading || !query.trim()}
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                backgroundColor: '#3b82f6',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                opacity: (!initialized || loading || !query.trim()) ? 0.5 : 1
              }}
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>
          {!initialized && !loading && (
            <p style={{ marginTop: '0.5rem', color: '#94a3b8' }}>
              Initializing vector database...
            </p>
          )}
        </div>

        <div style={{ marginTop: '2rem' }}>
          {results.length > 0 && (
            <>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
                Search Results
              </h2>
              {results.map((result, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#1e293b',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #334155'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      color: '#60a5fa',
                      margin: 0 
                    }}>
                      {result.entry.title || result.entry.section}
                    </h3>
                    <span style={{ 
                      backgroundColor: '#2563eb', 
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem'
                    }}>
                      Score: {(result.score * 100).toFixed(1)}%
                    </span>
                  </div>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#94a3b8',
                    marginBottom: '0.5rem'
                  }}>
                    {result.entry.category} • {result.entry.section}
                  </p>
                  <p style={{ 
                    color: '#e2e8f0',
                    lineHeight: '1.6'
                  }}>
                    {result.entry.content.length > 500 
                      ? result.entry.content.substring(0, 500) + '...'
                      : result.entry.content
                    }
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleApp;