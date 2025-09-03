-- Official Supabase hybrid search adapted for our vector_entries table
-- Fixed to handle FLOAT8[] embedding column

-- Drop the old function if it exists
DROP FUNCTION IF EXISTS hybrid_search(text, vector(384), float, int, int);
DROP FUNCTION IF EXISTS hybrid_search(text, float8[], float, int, int);
DROP FUNCTION IF EXISTS hybrid_search(text, vector(384), int, float, float, int);

-- Create the official Supabase hybrid search function
CREATE OR REPLACE FUNCTION hybrid_search(
  query_text text,
  query_embedding vector(384), -- Input as vector
  match_count int DEFAULT 10,
  full_text_weight float DEFAULT 1,
  semantic_weight float DEFAULT 1,
  rrf_k int DEFAULT 50
) 
RETURNS SETOF vector_entries
LANGUAGE sql AS $$
WITH 
full_text AS (
  SELECT
    id,
    ROW_NUMBER() OVER(ORDER BY ts_rank_cd(fts, websearch_to_tsquery(query_text)) DESC) AS rank_ix
  FROM vector_entries
  WHERE fts @@ websearch_to_tsquery(query_text)
  ORDER BY rank_ix
  LIMIT LEAST(match_count, 30) * 2
),
semantic AS (
  SELECT
    id,
    ROW_NUMBER() OVER (ORDER BY embedding::vector(384) <#> query_embedding) AS rank_ix
  FROM vector_entries
  ORDER BY rank_ix
  LIMIT LEAST(match_count, 30) * 2
)
SELECT vector_entries.*
FROM full_text
FULL OUTER JOIN semantic ON full_text.id = semantic.id
JOIN vector_entries ON COALESCE(full_text.id, semantic.id) = vector_entries.id
ORDER BY 
  COALESCE(1.0 / (rrf_k + full_text.rank_ix), 0.0) * full_text_weight +
  COALESCE(1.0 / (rrf_k + semantic.rank_ix), 0.0) * semantic_weight DESC
LIMIT LEAST(match_count, 30)
$$;

-- Also create a version that accepts array input (for JavaScript)
CREATE OR REPLACE FUNCTION hybrid_search(
  query_text text,
  query_embedding_array float8[], -- Accept array from JavaScript
  match_count int DEFAULT 10,
  full_text_weight float DEFAULT 1,
  semantic_weight float DEFAULT 1,
  rrf_k int DEFAULT 50
) 
RETURNS SETOF vector_entries
LANGUAGE sql AS $$
WITH 
full_text AS (
  SELECT
    id,
    ROW_NUMBER() OVER(ORDER BY ts_rank_cd(fts, websearch_to_tsquery(query_text)) DESC) AS rank_ix
  FROM vector_entries
  WHERE fts @@ websearch_to_tsquery(query_text)
  ORDER BY rank_ix
  LIMIT LEAST(match_count, 30) * 2
),
semantic AS (
  SELECT
    id,
    ROW_NUMBER() OVER (ORDER BY embedding::vector(384) <#> query_embedding_array::vector(384)) AS rank_ix
  FROM vector_entries
  ORDER BY rank_ix
  LIMIT LEAST(match_count, 30) * 2
)
SELECT vector_entries.*
FROM full_text
FULL OUTER JOIN semantic ON full_text.id = semantic.id
JOIN vector_entries ON COALESCE(full_text.id, semantic.id) = vector_entries.id
ORDER BY 
  COALESCE(1.0 / (rrf_k + full_text.rank_ix), 0.0) * full_text_weight +
  COALESCE(1.0 / (rrf_k + semantic.rank_ix), 0.0) * semantic_weight DESC
LIMIT LEAST(match_count, 30)
$$;

-- Grant permissions for both functions
GRANT EXECUTE ON FUNCTION hybrid_search(text, vector(384), int, float, float, int) TO anon;
GRANT EXECUTE ON FUNCTION hybrid_search(text, vector(384), int, float, float, int) TO authenticated;
GRANT EXECUTE ON FUNCTION hybrid_search(text, float8[], int, float, float, int) TO anon;
GRANT EXECUTE ON FUNCTION hybrid_search(text, float8[], int, float, float, int) TO authenticated;