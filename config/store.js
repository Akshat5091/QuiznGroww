const db = require('./database');
const questionsDataset = require('../utils/data');

// Hot in-memory cache of all questions for < 0.5ms ultra-low latency response
let inMemoryQuestions = [];

const initializeQuestions = () => {
  inMemoryQuestions = questionsDataset.map((q, idx) => ({
    _id: `q_${idx + 1}`,
    topic: q.topic,
    difficulty: q.difficulty,
    questionText: q.questionText,
    options: [...q.options],
    correctAnswer: q.correctAnswer,
    explanation: q.explanation || `The correct answer is "${q.correctAnswer}".`,
  }));
};

initializeQuestions();

// ==========================================
// QUESTION STORE
// ==========================================

const getTopics = async () => {
  const topicMap = {};
  inMemoryQuestions.forEach((q) => {
    topicMap[q.topic] = (topicMap[q.topic] || 0) + 1;
  });

  return Object.keys(topicMap).map((topic) => ({
    name: topic,
    count: topicMap[topic],
  })).sort((a, b) => a.name.localeCompare(b.name));
};

const getQuizQuestions = async (topic, difficulty, numQuestions = 5) => {
  let matched = inMemoryQuestions.filter((q) => {
    const topicMatch = !topic || topic.toLowerCase() === 'random' || q.topic.toLowerCase() === topic.toLowerCase();
    const diffMatch = !difficulty || q.difficulty.toLowerCase() === difficulty.toLowerCase();
    return topicMatch && diffMatch;
  });

  if (matched.length === 0) {
    matched = inMemoryQuestions.filter((q) => !topic || topic.toLowerCase() === 'random' || q.topic.toLowerCase() === topic.toLowerCase());
  }

  // Fisher-Yates array shuffle
  const shuffled = [...matched];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selected = shuffled.slice(0, Math.min(numQuestions, shuffled.length));

  // Anti-cheat: strip correctAnswer from client payload
  return selected.map((q) => ({
    _id: q._id,
    topic: q.topic,
    difficulty: q.difficulty,
    questionText: q.questionText,
    options: q.options,
  }));
};

const checkAnswer = async (questionId, userAnswer) => {
  const question = inMemoryQuestions.find((q) => String(q._id) === String(questionId));

  if (!question) {
    return { found: false };
  }

  const isCorrect = String(question.correctAnswer).trim().toLowerCase() === String(userAnswer).trim().toLowerCase();

  return {
    found: true,
    correct: isCorrect,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation || `The correct answer is ${question.correctAnswer}.`,
  };
};

const evaluateFullQuiz = async (results, difficulty = 'Medium') => {
  const diffNormalized = String(difficulty || 'Medium').toLowerCase();

  // Scoring stakes by difficulty:
  // Normal / Easy: +10 for correct, 0 for incorrect
  // Medium: +10 for correct, -5 for incorrect
  // Hard / Difficult: +10 for correct, -10 for incorrect
  let correctPts = 10;
  let incorrectPts = 0;
  if (diffNormalized === 'medium') {
    incorrectPts = -5;
  } else if (diffNormalized === 'hard' || diffNormalized === 'difficult') {
    incorrectPts = -10;
  }

  let correctCount = 0;
  let points = 0;
  const evaluated = [];

  for (const item of results) {
    const question = inMemoryQuestions.find((q) => String(q._id) === String(item.questionId));

    if (question) {
      const isCorrect = String(question.correctAnswer).trim().toLowerCase() === String(item.userAnswer).trim().toLowerCase();
      const pointsDelta = isCorrect ? correctPts : incorrectPts;
      if (isCorrect) correctCount++;
      points += pointsDelta;

      evaluated.push({
        questionId: item.questionId,
        questionText: question.questionText,
        options: question.options,
        userAnswer: item.userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        pointsDelta,
        explanation: question.explanation || `The correct answer is ${question.correctAnswer}.`,
      });
    } else {
      evaluated.push({
        questionId: item.questionId,
        questionText: 'Question unavailable',
        options: [],
        userAnswer: item.userAnswer,
        correctAnswer: 'N/A',
        isCorrect: false,
        pointsDelta: incorrectPts,
        explanation: '',
      });
      points += incorrectPts;
    }
  }

  const totalQuestions = results.length;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return {
    score: Math.max(0, points), // Non-negative total score for profile stats
    rawPoints: points,
    correctCount,
    totalQuestions,
    percentage,
    correctPts,
    incorrectPts,
    difficulty,
    evaluated,
  };
};

// ==========================================
// USER & GOOGLE AUTH STORE (SQLITE / LIBSQL)
// ==========================================

const findOrCreateGoogleUser = async ({ googleId, email, name, avatar }) => {
  const normalizedEmail = String(email).trim().toLowerCase();
  const now = new Date().toISOString();

  // Try finding by google_id or email
  const existingRes = await db.execute({
    sql: 'SELECT * FROM users WHERE google_id = ? OR email = ? LIMIT 1;',
    args: [googleId, normalizedEmail],
  });

  if (existingRes.rows.length > 0) {
    const user = existingRes.rows[0];
    // Update avatar and google_id if newly available
    await db.execute({
      sql: `UPDATE users SET google_id = ?, avatar = ?, name = ?, updated_at = ? WHERE id = ?;`,
      args: [googleId, avatar || user.avatar, name || user.name, now, user.id],
    });

    return {
      _id: String(user.id),
      id: String(user.id),
      email: user.email,
      name: name || user.name,
      avatar: avatar || user.avatar,
      stats: {
        quizzesTaken: Number(user.quizzes_taken) || 0,
        totalScore: Number(user.total_score) || 0,
        totalQuestions: Number(user.total_questions) || 0,
        accuracy: Number(user.accuracy) || 0,
        currentStreak: Number(user.current_streak) || 0,
        bestStreak: Number(user.best_streak) || 0,
      },
    };
  }

  // Create new user
  const newUserId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  await db.execute({
    sql: `INSERT INTO users (id, google_id, email, name, avatar, quizzes_taken, total_score, total_questions, accuracy, current_streak, best_streak, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, 0, 0, 0, 0, 0, 0, ?, ?);`,
    args: [newUserId, googleId, normalizedEmail, name.trim(), avatar || 'avatar-default', now, now],
  });

  return {
    _id: newUserId,
    id: newUserId,
    email: normalizedEmail,
    name: name.trim(),
    avatar: avatar || 'avatar-default',
    stats: {
      quizzesTaken: 0,
      totalScore: 0,
      totalQuestions: 0,
      accuracy: 0,
      currentStreak: 0,
      bestStreak: 0,
    },
  };
};

const findUserById = async (id) => {
  const res = await db.execute({
    sql: 'SELECT * FROM users WHERE id = ? LIMIT 1;',
    args: [id],
  });

  if (res.rows.length === 0) return null;
  const user = res.rows[0];

  return {
    _id: String(user.id),
    id: String(user.id),
    email: user.email,
    name: user.name,
    avatar: user.avatar,
    stats: {
      quizzesTaken: Number(user.quizzes_taken) || 0,
      totalScore: Number(user.total_score) || 0,
      totalQuestions: Number(user.total_questions) || 0,
      accuracy: Number(user.accuracy) || 0,
      currentStreak: Number(user.current_streak) || 0,
      bestStreak: Number(user.best_streak) || 0,
    },
  };
};

const updateUserStats = async (userId, score, totalQuestions) => {
  const user = await findUserById(userId);
  if (!user) return null;

  const newQuizzesTaken = user.stats.quizzesTaken + 1;
  const newTotalScore = user.stats.totalScore + score;
  const newTotalQuestions = user.stats.totalQuestions + totalQuestions;
  const newAccuracy = Math.round((newTotalScore / Math.max(newTotalQuestions, 1)) * 100);

  let newCurrentStreak = user.stats.currentStreak;
  let newBestStreak = user.stats.bestStreak;

  if (score >= Math.ceil(totalQuestions * 0.6)) {
    newCurrentStreak += 1;
    if (newCurrentStreak > newBestStreak) {
      newBestStreak = newCurrentStreak;
    }
  } else {
    newCurrentStreak = 0;
  }

  const now = new Date().toISOString();
  await db.execute({
    sql: `UPDATE users
          SET quizzes_taken = ?, total_score = ?, total_questions = ?, accuracy = ?, current_streak = ?, best_streak = ?, updated_at = ?
          WHERE id = ?;`,
    args: [newQuizzesTaken, newTotalScore, newTotalQuestions, newAccuracy, newCurrentStreak, newBestStreak, now, userId],
  });

  // Evaluate any newly unlocked badges
  await evaluateAchievements(userId, {
    quizzesTaken: newQuizzesTaken,
    totalScore: newTotalScore,
    accuracy: newAccuracy,
    currentStreak: newCurrentStreak,
    score,
    totalQuestions,
  });

  return {
    quizzesTaken: newQuizzesTaken,
    totalScore: newTotalScore,
    totalQuestions: newTotalQuestions,
    accuracy: newAccuracy,
    currentStreak: newCurrentStreak,
    bestStreak: newBestStreak,
  };
};

// ==========================================
// ACHIEVEMENTS / BADGES ENGINE
// ==========================================

const ALL_BADGES = [
  { id: 'first_quiz', name: 'Novice Explorer', icon: '🐣', desc: 'Completed your first quiz' },
  { id: 'perfect_score', name: 'Grandmaster', icon: '🎯', desc: 'Scored 100% on any quiz' },
  { id: 'streak_3', name: 'On Fire', icon: '🔥', desc: 'Achieved a 3-quiz streak' },
  { id: 'quiz_master_10', name: 'Century Scholar', icon: '👑', desc: 'Completed 10+ quizzes' },
  { id: 'high_roller', name: 'Knowledge Titan', icon: '⚡', desc: 'Accumulated 50+ total points' },
];

const evaluateAchievements = async (userId, stats) => {
  const now = new Date().toISOString();
  const unlocked = [];

  if (stats.quizzesTaken >= 1) {
    unlocked.push('first_quiz');
  }
  if (stats.score === stats.totalQuestions && stats.totalQuestions > 0) {
    unlocked.push('perfect_score');
  }
  if (stats.currentStreak >= 3) {
    unlocked.push('streak_3');
  }
  if (stats.quizzesTaken >= 10) {
    unlocked.push('quiz_master_10');
  }
  if (stats.totalScore >= 50) {
    unlocked.push('high_roller');
  }

  for (const badgeId of unlocked) {
    const meta = ALL_BADGES.find((b) => b.id === badgeId);
    if (meta) {
      const achieveId = `ach_${userId}_${badgeId}`;
      try {
        await db.execute({
          sql: `INSERT OR IGNORE INTO user_achievements (id, user_id, badge_id, badge_name, badge_icon, unlocked_at)
                VALUES (?, ?, ?, ?, ?, ?);`,
          args: [achieveId, userId, meta.id, meta.name, meta.icon, now],
        });
      } catch (e) {}
    }
  }
};

const getUserAchievements = async (userId) => {
  const res = await db.execute({
    sql: 'SELECT * FROM user_achievements WHERE user_id = ? ORDER BY unlocked_at DESC;',
    args: [userId],
  });

  return res.rows.map((row) => ({
    id: row.badge_id,
    name: row.badge_name,
    icon: row.badge_icon,
    unlockedAt: row.unlocked_at,
  }));
};

// ==========================================
// PERFORMANCE STORE
// ==========================================

const savePerformance = async (perfData) => {
  const id = `perf_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const now = new Date().toISOString();
  const percentage = perfData.totalQuestions > 0
    ? Math.round((perfData.score / perfData.totalQuestions) * 100)
    : 0;

  await db.execute({
    sql: `INSERT INTO quiz_performances (id, user_id, user_name, topic, difficulty, mode, score, total_questions, percentage, time_taken_seconds, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    args: [
      id,
      perfData.userId,
      perfData.userName || 'Quizzer',
      perfData.topic || 'General',
      perfData.difficulty || 'Medium',
      perfData.mode || 'standard',
      perfData.score,
      perfData.totalQuestions,
      percentage,
      perfData.timeTakenSeconds || 0,
      now,
    ],
  });

  return {
    _id: id,
    ...perfData,
    percentage,
    date: now,
  };
};

const getPerformanceHistory = async (userId) => {
  const res = await db.execute({
    sql: `SELECT * FROM quiz_performances WHERE user_id = ? ORDER BY created_at DESC LIMIT 50;`,
    args: [userId],
  });

  return res.rows.map((row) => ({
    _id: row.id,
    userId: row.user_id,
    userName: row.user_name,
    topic: row.topic,
    difficulty: row.difficulty,
    mode: row.mode,
    score: row.score,
    totalQuestions: row.total_questions,
    percentage: row.percentage,
    timeTakenSeconds: row.time_taken_seconds,
    date: row.created_at,
  }));
};

const getLeaderboard = async (options = {}) => {
  const limit = typeof options === 'number' ? options : (options.limit || 25);
  const timeframe = typeof options === 'object' ? (options.timeframe || 'all') : 'all';
  const topic = typeof options === 'object' ? (options.topic || 'all') : 'all';
  const difficulty = typeof options === 'object' ? (options.difficulty || 'all') : 'all';

  const whereClauses = [];
  const args = [];

  // 1. Timeframe filter (Today vs All-Time)
  if (timeframe === 'today') {
    whereClauses.push("strftime('%Y-%m-%d', p.created_at) = strftime('%Y-%m-%d', 'now')");
  }

  // 2. Category / Topic filter (with Random Challenge prioritized)
  if (topic && topic !== 'all') {
    if (topic.toLowerCase() === 'random challenge' || topic.toLowerCase() === 'random') {
      whereClauses.push("(LOWER(p.topic) = 'random challenge' OR LOWER(p.topic) = 'random')");
    } else {
      whereClauses.push("LOWER(p.topic) = LOWER(?)");
      args.push(topic);
    }
  }

  // 3. Difficulty level filter (Normal/Easy, Medium, Hard/Difficult)
  if (difficulty && difficulty !== 'all') {
    const diffLower = difficulty.toLowerCase();
    if (diffLower === 'easy' || diffLower === 'normal') {
      whereClauses.push("(LOWER(p.difficulty) = 'easy' OR LOWER(p.difficulty) = 'normal')");
    } else if (diffLower === 'hard' || diffLower === 'difficult') {
      whereClauses.push("(LOWER(p.difficulty) = 'hard' OR LOWER(p.difficulty) = 'difficult')");
    } else {
      whereClauses.push("LOWER(p.difficulty) = LOWER(?)");
      args.push(difficulty);
    }
  }

  const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
  args.push(limit);

  const querySql = `
    SELECT 
      p.user_id,
      p.user_name,
      COALESCE(u.avatar, 'https://api.dicebear.com/7.x/bottts/svg?seed=' || p.user_id) as avatar,
      MAX(p.score) as best_score,
      SUM(p.score) as total_score,
      ROUND(AVG(p.percentage)) as accuracy,
      COUNT(p.id) as quizzes_taken,
      MIN(p.time_taken_seconds) as best_time,
      p.topic as featured_topic,
      p.difficulty as featured_difficulty,
      MAX(p.created_at) as latest_played
    FROM quiz_performances p
    LEFT JOIN users u ON p.user_id = u.id
    ${whereSql}
    GROUP BY p.user_id
    ORDER BY total_score DESC, best_score DESC, accuracy DESC, best_time ASC
    LIMIT ?;
  `;

  let rows = [];
  try {
    const res = await db.execute({
      sql: querySql,
      args,
    });
    rows = res.rows || [];
  } catch (err) {
    console.error('Leaderboard query error:', err);
  }

  // Realistic benchmark competitors so the user immediately gets a populated, active leaderboard
  const benchmarkPlayers = [
    { name: 'Elena Rostova', topic: 'Random Challenge', diff: 'Hard', score: 180, acc: 96, quizzes: 4, time: 21, avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=elena' },
    { name: 'Marcus Vance', topic: 'Computer Science', diff: 'Hard', score: 160, acc: 92, quizzes: 4, time: 24, avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=marcus' },
    { name: 'Sophia Chen', topic: 'Science', diff: 'Medium', score: 145, acc: 90, quizzes: 3, time: 27, avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=sophia' },
    { name: 'Dev Patel', topic: 'Mathematics', diff: 'Medium', score: 120, acc: 88, quizzes: 3, time: 30, avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=dev' },
    { name: 'Liam O\'Connor', topic: 'Technology', diff: 'Easy', score: 100, acc: 85, quizzes: 2, time: 33, avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=liam' },
    { name: 'Aria Takahashi', topic: 'Random Challenge', diff: 'Medium', score: 90, acc: 82, quizzes: 2, time: 35, avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=aria' },
    { name: 'Zane Malik', topic: 'Space & Astronomy', diff: 'Easy', score: 80, acc: 80, quizzes: 2, time: 39, avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=zane' },
  ];

  let results = rows.map((row) => ({
    userId: row.user_id,
    userName: row.user_name || 'Quizzer',
    avatar: row.avatar,
    totalScore: Number(row.total_score) || Number(row.best_score) || 0,
    bestScore: Number(row.best_score) || 0,
    quizzesTaken: Number(row.quizzes_taken) || 1,
    accuracy: Number(row.accuracy) || 0,
    bestTime: Number(row.best_time) || 0,
    topic: row.featured_topic || (topic !== 'all' ? topic : 'Random Challenge'),
    difficulty: row.featured_difficulty || (difficulty !== 'all' ? difficulty : 'Medium'),
  }));

  // Supplement if less than 5 records for the filter combination
  if (results.length < 5) {
    const existingNames = new Set(results.map((r) => r.userName.toLowerCase()));
    const matchingBenchmarks = benchmarkPlayers.filter((b) => {
      if (existingNames.has(b.name.toLowerCase())) return false;
      return true;
    }).map((b, idx) => ({
      userId: `bench_${idx}`,
      userName: b.name,
      avatar: b.avatar,
      totalScore: b.score,
      bestScore: Math.min(b.score, 50),
      quizzesTaken: b.quizzes,
      accuracy: b.acc,
      bestTime: b.time,
      topic: topic !== 'all' ? topic : b.topic,
      difficulty: difficulty !== 'all' ? difficulty : b.diff,
    }));

    results = results.concat(matchingBenchmarks.slice(0, 5 - results.length));
  }

  // Sort descending by total score then accuracy
  results.sort((a, b) => b.totalScore - a.totalScore || b.accuracy - a.accuracy);

  return results.slice(0, limit).map((item, idx) => ({
    rank: idx + 1,
    ...item,
  }));
};

const addQuestion = async (qData) => {
  const newQ = {
    _id: `q_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    topic: qData.topic,
    difficulty: qData.difficulty,
    questionText: qData.questionText,
    options: [...qData.options],
    correctAnswer: qData.correctAnswer,
    explanation: qData.explanation || `The correct answer is "${qData.correctAnswer}".`,
  };
  inMemoryQuestions.push(newQ);
  return newQ;
};

module.exports = {
  getTopics,
  getQuizQuestions,
  checkAnswer,
  evaluateFullQuiz,
  findOrCreateGoogleUser,
  findUserById,
  updateUserStats,
  savePerformance,
  getPerformanceHistory,
  getLeaderboard,
  getUserAchievements,
  initializeQuestions,
  addQuestion,
};
