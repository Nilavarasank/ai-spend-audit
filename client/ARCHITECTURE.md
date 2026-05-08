# Architecture

## Stack

- Frontend: React + Vite
- Styling: Tailwind CSS
- Backend: Supabase
- Deployment: Vercel

## System Flow

User Input → Audit Engine → Savings Calculation → Results Display → Lead Storage in Supabase

## Data Flow

1. User enters AI tool details.
2. Frontend sends data to audit engine.
3. Audit engine calculates recommendations and savings.
4. Results displayed instantly.
5. Lead data stored in Supabase database.

## Why This Stack

- React provides component-based architecture.
- Vite gives fast development and builds.
- Supabase simplifies backend/database setup.
- Tailwind speeds up UI development.

## Scaling for 10k audits/day

If scaling:
- Add server-side caching
- Move audit logic to backend APIs
- Add Redis for rate limiting
- Use queue workers for AI summaries
- Optimize database indexing

## Simple Diagram

```text
User
  ↓
React Frontend
  ↓
Audit Engine
  ↓
Savings Results
  ↓
Supabase Database