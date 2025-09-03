# Twilight Imperium RuleMaster AI

A conversational AI assistant for Twilight Imperium 4th Edition rules. Built with TypeScript, React, and Google's Gemini AI.

## Features

- **Complete Rules Database**: Contains all rules from the base game, Prophecy of Kings expansion, and all Codex updates
- **AI-powered Chat**: Ask any question about TI4 rules and get accurate, context-aware answers
- **Galactic Codex**: Browse all game components, factions, technologies, and more
- **Intelligent Search**: Advanced RAG (Retrieval-Augmented Generation) system for finding relevant rules
- **100+ Rule Sections**: Comprehensive coverage of all game mechanics
- **25 Factions**: Complete faction abilities, units, and special rules
- **All Components**: Action cards, agendas, objectives, technologies, and more

## Setup

**Prerequisites:** Node.js 20+ (recommended)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure API key**:
   - Copy `.env.example` to `.env`
   - Get a Gemini API key from https://makersuite.google.com/app/apikey
   - Add your API key to the `.env` file:
     ```
     VITE_API_KEY=your_actual_api_key_here
     ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Architecture

- **Frontend**: React with TypeScript and Tailwind CSS
- **AI Service**: Google Gemini 2.5 Flash with custom RAG implementation
- **Rules Database**: Complete rulebook data converted from PHP source files
- **Component Data**: Structured data for all game components, factions, and cards

## Data Sources

Rules data is sourced from the comprehensive TI4 rules repository at https://github.com/bradleysigma/tirules and converted to TypeScript format for optimal performance.
