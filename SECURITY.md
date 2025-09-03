# Security Configuration

## Environment Variables

### For Vercel Deployment (Browser-Safe)

Only add these two variables to your Vercel environment:

- `VITE_SUPABASE_URL` - Your Supabase project URL (safe to expose)
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key (safe to expose)

These are designed to be public and are protected by Row Level Security (RLS) policies in your database.

### Local Development Only

**⚠️ NEVER add these to Vercel or expose them publicly:**

- `SUPABASE_SERVICE_KEY` - Service role key with full database access
- Keep this only in your local `.env.local` file
- Used only for data upload scripts

## Security Best Practices

1. **Row Level Security (RLS)** is enabled on the `vector_entries` table
2. The anon key can only READ data, not write or delete
3. The service key is only used locally for data management
4. Never commit `.env.local` to version control
5. Never add service keys to Vercel environment variables

## Current Configuration

✅ **Correct Setup:**
- Browser uses anon key (read-only access)
- RLS policies protect the database
- Service key stays local only

❌ **Security Violations to Avoid:**
- Adding `SUPABASE_SERVICE_KEY` to Vercel
- Using service key in client-side code
- Disabling RLS on database tables
- Committing `.env.local` to git