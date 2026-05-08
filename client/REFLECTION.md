# Reflection

## 1. Hardest bug and debugging process

The hardest bug was handling Supabase insert permissions. Initially, the application failed to save audit reports because Row Level Security policies blocked inserts. I checked browser console logs, verified Supabase table configuration, and tested queries manually inside the SQL editor. After multiple tests, I realized an INSERT policy was missing. Creating the correct policy solved the issue.

---

## 2. Decision reversed mid-week

Initially, I planned to generate audit recommendations fully using AI. Later, I realized deterministic pricing logic is more reliable and easier to validate. I switched to a rule-based audit engine for calculations while keeping AI only for optional summaries.

---

## 3. What I would build in week 2

If given another week, I would add authentication, PDF export, AI-generated summaries using Anthropic API, benchmarking analytics, Open Graph sharing previews, and an admin analytics dashboard for tracking leads and conversion rates.

---

## 4. How I used AI tools

I used ChatGPT for debugging, UI improvements, React guidance, and deployment troubleshooting. I did not trust AI-generated pricing data without verification from official sources. One mistake AI made was suggesting incorrect Tailwind CSS changes that broke the UI layout, which I manually debugged and corrected.

---

## 5. Self-rating

### Discipline: 8/10
Worked consistently across multiple days and completed the full project.

### Code Quality: 7/10
Code is modular and readable, though some components could be refactored further.

### Design Sense: 7/10
Focused on clean UI and usability while keeping the interface simple.

### Problem Solving: 8/10
Resolved deployment, backend, and styling issues through debugging and testing.

### Entrepreneurial Thinking: 7/10
Designed the project as a practical lead-generation tool instead of only a coding exercise.