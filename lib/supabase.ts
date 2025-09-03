import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Environment check:', {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Set (hidden)' : 'Missing',
  BASE_URL: import.meta.env.BASE_URL,
  MODE: import.meta.env.MODE,
  PROD: import.meta.env.PROD
})

if (!supabaseUrl || supabaseUrl === 'undefined' || supabaseUrl.includes('vercel.app')) {
  console.error('Invalid Supabase URL configuration!', {
    url: supabaseUrl,
    allEnvKeys: Object.keys(import.meta.env)
  })
  throw new Error('VITE_SUPABASE_URL is not properly configured in Vercel environment variables')
}

if (!supabaseAnonKey || supabaseAnonKey === 'undefined') {
  console.error('Invalid Supabase Anon Key configuration!')
  throw new Error('VITE_SUPABASE_ANON_KEY is not properly configured in Vercel environment variables')
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