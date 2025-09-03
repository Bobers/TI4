# Changelog

All notable changes to TI4 RuleMaster AI will be documented in this file.

## [3.0.0] - 2025-09-03

### Breaking Changes
- Migrated from Google Gemini API to Supabase vector database
- Removed ALL hardcoded fallback responses
- Now uses only database content for answers

### Added
- Supabase integration with PostgreSQL vector storage
- 503 vector entries (216 FAQ + 287 rules)
- Comprehensive test suite for Supabase integration
- Security documentation (SECURITY.md)
- Better error handling and logging
- Test scripts: `npm test`, `npm test:faq`, `npm test:all`

### Changed
- Replaced Gemini API with local vector search using Transformers.js
- Uses semantic search with cosine similarity
- Lowered relevance threshold to 0.25 for better coverage
- Updated README with Supabase configuration

### Fixed
- Fixed incorrect Creuss faction information (wrong units)
- Fixed deployment issues with Vercel
- Fixed environment variable configuration
- Removed misinformation from hardcoded responses

### Removed
- Google Gemini API dependency
- All hardcoded faction and rule responses
- `shouldUseFallback()` method that forced hardcoded content

## [2.0.0] - 2025-09-02

### Added
- FAQ integration with 216 official FAQ entries
- Priority system for FAQ answers over general rules
- Local vector search using Transformers.js
- Client-side embeddings with all-MiniLM-L6-v2 model

### Changed
- Improved response accuracy
- Better context handling
- Enhanced search relevance

## [1.0.0] - 2025-09-01

### Initial Release
- Basic TI4 rules assistant
- Google Gemini API integration
- React frontend with TypeScript
- Basic rule search functionality