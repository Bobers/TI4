-- Create the vector_entries table in Supabase
CREATE TABLE IF NOT EXISTS vector_entries (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT,
  section TEXT,
  category TEXT NOT NULL,
  content TEXT,
  text TEXT,
  keywords TEXT[],
  embedding FLOAT8[] NOT NULL,
  "references" TEXT[],
  source TEXT,
  question TEXT,
  answer TEXT,
  type TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_vector_entries_source ON vector_entries(source);
CREATE INDEX IF NOT EXISTS idx_vector_entries_category ON vector_entries(category);
CREATE INDEX IF NOT EXISTS idx_vector_entries_type ON vector_entries(type);

-- Enable Row Level Security (RLS)
ALTER TABLE vector_entries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (since this is public rule data)
CREATE POLICY "Allow public read access" ON vector_entries
  FOR SELECT USING (true);

-- Optional: Create policy for authenticated users to insert/update if needed later
-- CREATE POLICY "Allow authenticated users to manage entries" ON vector_entries
--   FOR ALL USING (auth.role() = 'authenticated');