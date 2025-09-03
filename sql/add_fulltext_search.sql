-- Enable vector extension for Supabase
CREATE EXTENSION IF NOT EXISTS vector;

-- Add full-text search capabilities to vector_entries table

-- Add tsvector column for full-text search
ALTER TABLE vector_entries 
ADD COLUMN IF NOT EXISTS fts tsvector;

-- Create function to update tsvector column
CREATE OR REPLACE FUNCTION update_fts_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.fts := to_tsvector('english', 
    COALESCE(NEW.title, '') || ' ' ||
    COALESCE(NEW.content, '') || ' ' ||
    COALESCE(NEW.text, '') || ' ' ||
    COALESCE(NEW.question, '') || ' ' ||
    COALESCE(NEW.answer, '') || ' ' ||
    COALESCE(NEW.category, '') || ' ' ||
    COALESCE(NEW.type, '') || ' ' ||
    array_to_string(COALESCE(NEW.keywords, ARRAY[]::text[]), ' ')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update fts column
DROP TRIGGER IF EXISTS update_fts_trigger ON vector_entries;
CREATE TRIGGER update_fts_trigger
  BEFORE INSERT OR UPDATE ON vector_entries
  FOR EACH ROW EXECUTE FUNCTION update_fts_column();

-- Update existing rows
UPDATE vector_entries SET fts = to_tsvector('english', 
  COALESCE(title, '') || ' ' ||
  COALESCE(content, '') || ' ' ||
  COALESCE(text, '') || ' ' ||
  COALESCE(question, '') || ' ' ||
  COALESCE(answer, '') || ' ' ||
  COALESCE(category, '') || ' ' ||
  COALESCE(type, '') || ' ' ||
  array_to_string(COALESCE(keywords, ARRAY[]::text[]), ' ')
);

-- Create GIN index for performance
CREATE INDEX IF NOT EXISTS idx_vector_entries_fts ON vector_entries USING GIN(fts);

-- Create hybrid search function using RRF (Reciprocal Rank Fusion)
CREATE OR REPLACE FUNCTION hybrid_search(
    query_text text,
    query_embedding vector(384),
    match_threshold float DEFAULT 0.5,
    rrf_k integer DEFAULT 50,
    max_results integer DEFAULT 20
)
RETURNS TABLE(
    id bigint,
    title text,
    content text,
    category text,
    type text,
    source text,
    question text,
    answer text,
    similarity_score float,
    fts_score float,
    combined_score float
) AS $$
BEGIN
    RETURN QUERY
    WITH semantic_search AS (
        SELECT 
            v.id,
            v.title,
            v.content,
            v.category,
            v.type,
            v.source,
            v.question,
            v.answer,
            (1 - (v.embedding <=> query_embedding)) as similarity_score,
            ROW_NUMBER() OVER (ORDER BY v.embedding <=> query_embedding) as semantic_rank
        FROM vector_entries v
        WHERE (1 - (v.embedding <=> query_embedding)) > match_threshold
        ORDER BY v.embedding <=> query_embedding
        LIMIT 50
    ),
    fulltext_search AS (
        SELECT 
            v.id,
            ts_rank(v.fts, plainto_tsquery('english', query_text)) as fts_score,
            ROW_NUMBER() OVER (ORDER BY ts_rank(v.fts, plainto_tsquery('english', query_text)) DESC) as fts_rank
        FROM vector_entries v
        WHERE v.fts @@ plainto_tsquery('english', query_text)
        ORDER BY ts_rank(v.fts, plainto_tsquery('english', query_text)) DESC
        LIMIT 50
    )
    SELECT 
        COALESCE(s.id, f.id) as id,
        s.title,
        s.content,
        s.category,
        s.type,
        s.source,
        s.question,
        s.answer,
        COALESCE(s.similarity_score, 0.0) as similarity_score,
        COALESCE(f.fts_score, 0.0) as fts_score,
        -- RRF Score: 1/(k + rank1) + 1/(k + rank2)
        COALESCE(1.0 / (rrf_k + s.semantic_rank), 0) + 
        COALESCE(1.0 / (rrf_k + f.fts_rank), 0) as combined_score
    FROM semantic_search s
    FULL OUTER JOIN fulltext_search f ON s.id = f.id
    ORDER BY combined_score DESC
    LIMIT max_results;
END;
$$ LANGUAGE plpgsql;

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION hybrid_search TO anon;
GRANT EXECUTE ON FUNCTION hybrid_search TO authenticated;