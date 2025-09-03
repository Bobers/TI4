# Twilight Imperium RuleMaster AI

A conversational AI assistant for Twilight Imperium 4th Edition rules. Built with TypeScript, React, and Supabase vector database.

> **Status**: Production-ready with Supabase vector database integration

## Features

- **Complete Rules Database**: Contains all rules from the base game, Prophecy of Kings expansion, and all Codex updates
- **AI-powered Chat**: Ask any question about TI4 rules and get accurate, context-aware answers
- **Galactic Codex**: Browse all game components, factions, technologies, and more  
- **Vector Search**: Advanced semantic search using embeddings for finding relevant rules
- **Official FAQ Integration**: Prioritizes official FAQ rulings over general rules
- **100+ Rule Sections**: Comprehensive coverage of all game mechanics
- **25 Factions**: Complete faction abilities, units, and special rules
- **All Components**: Action cards, agendas, objectives, technologies, and more

## Setup

**Prerequisites:** Node.js 20+ (recommended)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   - Copy `.env.example` to `.env.local`
   - Add your Supabase configuration:
     ```
     VITE_SUPABASE_URL=your-supabase-project-url
     VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
     SUPABASE_SERVICE_KEY=your-supabase-service-key
     ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Architecture

- **Frontend**: React with TypeScript and Tailwind CSS
- **Vector Database**: Supabase PostgreSQL with vector embeddings
- **AI Search**: Transformers.js with all-MiniLM-L6-v2 embeddings model
- **Rules Database**: 503 vector entries from complete rulebook and official FAQ
- **Component Data**: Structured data for all game components, factions, and cards

## Data Sources

Rules data is sourced from the comprehensive TI4 rules repository at https://github.com/bradleysigma/tirules and converted to TypeScript format for optimal performance.
