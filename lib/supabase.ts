import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface VectorEntry {
  id: number
  created_at: string
  title?: string
  section?: string
  category: string
  content?: string
  text?: string
  keywords?: string[]
  embedding: number[]
  references?: string[]
  source?: string
  question?: string
  answer?: string
  type?: string
}