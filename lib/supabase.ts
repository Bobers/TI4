import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase configuration missing!', {
    url: supabaseUrl ? 'Set' : 'Missing',
    key: supabaseAnonKey ? 'Set' : 'Missing',
    env: import.meta.env
  })
  throw new Error('Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables')
}

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