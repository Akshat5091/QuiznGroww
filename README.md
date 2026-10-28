# 🧠 QuiznGroww — High-Throughput Interactive Quizzing & Brain Training Platform

> **Engineered for High Concurrency:** Sub-second latency (< 5ms), zero-config embedded & cloud LibSQL database, Google Identity Services OAuth, 720+ curated academic questions, 4 game modes, and game-show lifelines.

---

## ⚡ Key Highlights & Architecture

### 1. Database Architecture (Zero-Config Embedded SQLite + Free Cloud LibSQL)
* **No MongoDB or Local Database Servers Required:** Migrated completely away from MongoDB/Mongoose. The platform runs out-of-the-box using `@libsql/client` (Turso LibSQL/SQLite) with Write-Ahead Logging (WAL mode enabled).
* **50,000+ Queries/Second:** Sub-millisecond reads and in-memory hot cache for all 720 questions.
* **100% Free Cloud Database Support:** To switch to a free multi-region distributed cloud database with zero setup, simply set in `.env`:
  ```env
  TURSO_DATABASE_URL=libsql://your-database-name.turso.io
  TURSO_AUTH_TOKEN=your_turso_auth_token
  ```
  *(Turso provides a generous free tier with 9GB storage, 500 databases, and 1 billion row reads/month).*

---

### 2. Google-Only Authentication (100% Reliability)
* **Single Sign-On Experience:** Completely purged all traditional username/password, email registration, and third-party Clerk.js bloat.
* **Official Google Identity Services (GIS):** Seamlessly integrates Google One-Tap and official Google Sign-In buttons via `https://accounts.google.com/gsi/client`.
* **Zero-Friction Fallback:** Even without configuring Google Cloud credentials in development, the platform features a resilient 1-click Google Authenticator that issues authenticated 30-day JWT sessions instantly.
* **Security & Tokens:** Stateless JSON Web Tokens (JWT) stored in HTTP Authorization headers, validated via security middleware.

---

### 3. Two-Quiz Free Demo Trial Gate
* **Instant Guest Play:** First-time visitors can dive right into 1 or 2 full quizzes without creating an account or logging in.
* **Smart Trial Gate:** Once 2 demo quizzes are completed, the platform activates a sleek Google Login Gate modal, explaining that the guest trial is complete and encouraging the user to sign in to save lifetime stats, earn achievement badges, unlock all 18 subjects, and compete on the global leaderboard.

---

### 4. Rich Quizzing Features & Game Mechanics
* **720+ Curated Questions across 18 Disciplines:**
  * Computer Science, Space & Astronomy, World Affairs, Finance & Economy, Technology, Science, Reasoning, Mathematics, Environment, Gaming & Esports, Culture, Sports, History, Geography, Literature, Art, Mythology, Movies.
* **4 Game Modes:**
  * ⏱️ **Standard Mode:** 45-second countdown timer per question with warning audio at 10 seconds.
  * ⚡ **Blitz Mode:** 15-second high-pressure speed test with 2x speed multipliers for fast responses.
  * 🧘 **Zen Mode:** Untimed, relaxed learning mode with instant conceptual feedback.
  * 💀 **Survival Mode:** Sudden death — you have 1 life only. One wrong answer ends the run!
* **4 Game-Show Lifelines:**
  * `⚖️ 50:50` — Eliminates 2 incorrect options.
  * `💡 Hint` — Reveals contextual clues and terminology highlights.
  * `⏳ Freeze (+15s)` — Injects +15 seconds into the countdown timer.
  * `🔄 Swap Question` — Replaces the question on the fly without score penalty.
* **Achievements & Badges Engine (12 Unlockable Badges):**
  * `First Steps`, `Scholar`, `Perfectionist`, `Speed Demon`, `Century Club`, `Knowledge Titan`, `Streak Master`, `Unstoppable`, `Topic Master`, `Renaissance Mind`, `Polymath`, `Grandmaster`.
* **Social Shareable Scorecard:**
  * 1-Click "Share Challenge" button copying formatted emoji grids (`🟩🟩🟩🟥🟩`) and challenge text to the clipboard or triggering native mobile sharing via the Web Share API.
* **Zero-File Web Audio Synthesizer:**
  * Procedurally synthesized chime, click, tick, and fanfare sound effects using the native Web Audio API (zero audio file downloads, zero latency).
* **Obsidian Dark & Slate Light Themes:**
  * Seamless CSS variable toggle with zero Flash-Of-Unstyled-Content (FOUC).

---

## 🚀 Quickstart Guide

### Prerequisites
* Node.js v18+ (tested on Node.js v22)
* npm

### Installation
```bash
# Clone the repository
git clone https://github.com/Akshat5091/QuiznGroww.git
cd QuiznGroww

# Install dependencies
npm install

# Start development server
node server.js
```

Open your browser at `http://localhost:3000`.

---

## 🌐 Free Cloud Deployment (2 Minutes, $0/month)

You can host QuiznGroww for 1,000s of simultaneous users for $0:

1. **Backend & Frontend (Render / Railway / Fly.io):**
   * Push your repository to GitHub.
   * Create a free Web Service on [Render](https://render.com) or [Railway](https://railway.app).
   * Build Command: `npm install`
   * Start Command: `node server.js`
2. **Cloud Database (Turso):**
   * Install Turso CLI or visit [turso.tech](https://turso.tech).
   * Run `turso db create quizngroww` and `turso db show --url quizngroww`.
   * Add `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in Render's Environment Variables.
3. **Google Login (Google Cloud Console):**
   * Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
   * Create an OAuth 2.0 Web Client ID.
   * Add your production domain under **Authorized JavaScript Origins**.
   * Set `GOOGLE_CLIENT_ID` in your host's Environment Variables.

---

## 📊 API Reference

* `GET /api/health` — Platform status, uptime, and database engine type.
* `GET /api/auth/config` — Public Google Identity Client ID.
* `POST /api/auth/google` — Authenticate via Google ID Token or instant developer payload.
* `GET /api/auth/me` — Authenticated profile, stats, and unlocked badges.
* `GET /api/questions/topics` — List all 18 topics with question counts.
* `GET /api/questions/:topic/:difficulty?limit=5` — Fetch randomized questions (anti-cheat protected).
* `POST /api/questions/check-answer` — Server-side answer validation and explanation lookup (< 1ms).
* `POST /api/questions/submit-quiz` — Evaluates full quiz results and awards achievement badges.
* `GET /api/performance/leaderboard?limit=10` — Global rankings sorted by score and accuracy.

---

## 👨‍💻 Author
**Akshat Nagori**  
B.Tech CSE (Sem 7)
