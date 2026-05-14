# VETRA — AI-Powered Interview Readiness Audit

## Overview
VETRA is a high-fidelity, cinematic web application designed to evaluate a candidate's readiness for specific job roles. It provides a "brutally honest" audit of their Resume, GitHub, Portfolio, and Communication skills using Google Gemini AI.

---

## 1. What We Have Done
- **Project Foundation:** Initialized a React + Vite + TypeScript environment with Tailwind CSS and Framer Motion.
- **Design System:** Implemented a "Deep Black" aesthetic with neon accents (#7C3AED, #06B6D4, #EC4899), glassmorphism, background noise textures, and scanline effects.
- **Animation Engine:** Built a custom 55-bar animated equalizer that pulses like a music visualizer and floating glowing orbs for atmosphere.
- **Core Workflow:**
    - **Landing:** Created a hero screen with glitch/flicker typography.
    - **Domain Selection:** Built a role-specific selector that anchors all subsequent AI evaluations.
    - **Resume DNA Scan:** Integrated `pdf.js` and `mammoth` for local text extraction from PDF/DOCX files.
    - **GitHub Analysis:** Connected to the GitHub REST API to fetch real user profiles, repositories, and activity summaries.
    - **Portfolio Audit:** Set up a system to analyze live URLs (via CORS proxy) and project documents.
    - **Final Evaluation:** Built a technical interview simulator with domain-specific questions.
    - **Score Reveal:** Designed a cinematic results dashboard with a weighted scoring system, grading badges (e.g., "HIRE-READY"), and a 5-day action plan.
- **AI Migration:** Successfully transitioned the entire backend logic from Anthropic Claude to the **Google Gemini API** (`gemini-1.5-flash`).
- **Optimization:** Fixed TypeScript type-only import issues, Tailwind v4 compatibility errors, and API endpoint 404s.

---

## 2. Current Logic
- **Step-Based Navigation:** The app uses a state machine to move users through 7 distinct evaluation screens.
- **Context Injection:** The selected domain (e.g., Software Engineering, UX Design) is injected into every AI system prompt to ensure "Senior Recruiter" level feedback.
- **AI Processing:** 
    - Calls the Gemini 1.5 Flash model via a custom `gemini.ts` utility.
    - Enforces `responseMimeType: "application/json"` for reliable data parsing.
    - Utilizes "Teacher Markup" logic: AI identifies specific user phrases, explains the issue, and provides a "Red Pen" style correction.
- **Scoring Weights:** 
    - Resume: 25%
    - Communication: 25%
    - Technical Depth: 40%
    - Portfolio: 10%
- **Data Persistence:** User API keys and progress are stored in `localStorage` for continuity.

---

## 3. Next 3 Steps
1. **Comprehensive Evaluation Test:** Run a full "Audit" from start to finish with real data to verify Gemini's JSON consistency across all modules.
2. **UI/UX Refinement:** Polish micro-interactions (button squish, hover shockwaves, and particle explosions) to match the "Cinematic" requirement.
3. **Production Deployment:** Run final build optimization and deploy the `dist` folder to Vercel/Netlify for public testing.

---

## Technical Specs
- **Model:** Google Gemini 1.5 Flash
- **Styling:** Tailwind CSS + Framer Motion
- **Fonts:** Syne (Headings), DM Sans (Body)
- **Key:** Hardcoded in `src/lib/gemini.ts` (Current: `AIzaSyCom...`)
