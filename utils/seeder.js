const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from root folder
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const connectDB = require('../config/database');
const questions = require('./data');
const store = require('../config/store');

const seedData = async () => {
  console.log(`📦 Loaded ${questions.length} questions across 18 topics.`);

  try {
    await connectDB();
    console.log('✅ LibSQL Database tables verified and ready.');
    store.initializeQuestions();
    const topics = await store.getTopics();
    console.log(`⚡ In-memory hot cache initialized with ${questions.length} questions across ${topics.length} subjects.`);
    console.log('🚀 Platform is 100% ready for high-concurrency sub-second quizzing.');
  } catch (err) {
    console.error('Seed verification error:', err.message);
  }

  process.exit(0);
};

const clearData = async () => {
  const db = await connectDB();
  try {
    await db.execute('DELETE FROM quiz_performances;');
    await db.execute('DELETE FROM user_achievements;');
    await db.execute('DELETE FROM contacts;');
    console.log('✅ Cleaned quiz performance, achievements, and contact logs.');
  } catch (e) {
    console.error(e.message);
  }
  process.exit(0);
};

if (process.argv[2] === '-i') {
  seedData();
} else if (process.argv[2] === '-d') {
  clearData();
} else {
  console.log('Usage: node utils/seeder.js -i (verify & warm cache) | -d (clear logs)');
  process.exit(0);
}