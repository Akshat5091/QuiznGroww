const fs = require('fs');
const path = require('path');
const { createClient } = require('@libsql/client');

const DATA_DIR = path.join(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const dbUrl = process.env.TURSO_DATABASE_URL || `file:${path.join(DATA_DIR, 'quizngroww.db')}`;
const authToken = process.env.TURSO_AUTH_TOKEN || undefined;

const db = createClient({
  url: dbUrl,
  authToken,
});

const isCloud = !!process.env.TURSO_DATABASE_URL;

const initDB = async () => {
  try {
    // Enable WAL mode and 5000ms busy timeout for concurrent safety
    if (!isCloud) {
      await db.execute('PRAGMA journal_mode = WAL;');
      await db.execute('PRAGMA busy_timeout = 5000;');
    }

    // 1. Users table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        google_id TEXT UNIQUE,
        email TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        avatar TEXT,
        quizzes_taken INTEGER DEFAULT 0,
        total_score INTEGER DEFAULT 0,
        total_questions INTEGER DEFAULT 0,
        accuracy INTEGER DEFAULT 0,
        current_streak INTEGER DEFAULT 0,
        best_streak INTEGER DEFAULT 0,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `);

    // 2. Quiz Performances table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS quiz_performances (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        user_name TEXT NOT NULL,
        topic TEXT NOT NULL,
        difficulty TEXT NOT NULL,
        mode TEXT DEFAULT 'standard',
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        percentage INTEGER NOT NULL,
        time_taken_seconds INTEGER DEFAULT 0,
        created_at TEXT NOT NULL
      );
    `);

    // 3. User Achievements table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS user_achievements (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        badge_id TEXT NOT NULL,
        badge_name TEXT NOT NULL,
        badge_icon TEXT NOT NULL,
        unlocked_at TEXT NOT NULL,
        UNIQUE(user_id, badge_id)
      );
    `);

    // 4. Contact messages table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL
      );
    `);

    // Indexes for high concurrency and sub-millisecond querying
    await db.execute(
      `CREATE INDEX IF NOT EXISTS idx_perf_user ON quiz_performances(user_id, created_at DESC);`
    );
    await db.execute(`CREATE INDEX IF NOT EXISTS idx_perf_score ON quiz_performances(score DESC);`);
    await db.execute(`CREATE INDEX IF NOT EXISTS idx_users_streak ON users(current_streak DESC);`);
    await db.execute(`CREATE INDEX IF NOT EXISTS idx_achieve_user ON user_achievements(user_id);`);

    console.log(
      `✅ LibSQL Database Initialized (${isCloud ? 'Turso Cloud' : 'Embedded SQLite WAL engine'})`
    );
    return true;
  } catch (error) {
    console.error('❌ Failed to initialize LibSQL database:', error);
    return false;
  }
};

const getDBStatus = () => {
  return isCloud ? 'turso-cloud' : 'libsql-embedded';
};

const connectDB = async () => {
  return await initDB();
};

connectDB.initDB = initDB;
connectDB.db = db;
connectDB.execute = (stmt) => db.execute(stmt);
connectDB.batch = (stmts) => db.batch(stmts);
connectDB.getDBStatus = getDBStatus;

module.exports = connectDB;
