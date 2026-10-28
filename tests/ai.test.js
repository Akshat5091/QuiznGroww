const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../server');

test('POST /api/questions/ai/generate - returns 400 when topic is missing or invalid', async () => {
  const response = await request(app).post('/api/questions/ai/generate').send({ count: 5 });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});

test('POST /api/questions/ai/generate - successfully generates playable custom quiz', async () => {
  const response = await request(app).post('/api/questions/ai/generate').send({
    topic: 'Quantum Computing',
    difficulty: 'hard',
    count: 3,
  });

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.equal(response.body.topic, 'Quantum Computing');
  assert.equal(response.body.count, 3);
  assert.ok(Array.isArray(response.body.questions));
  assert.equal(response.body.questions.length, 3);

  // Verify anti-cheat and option structure
  for (const q of response.body.questions) {
    assert.ok(q._id, 'AI question must have unique _id');
    assert.ok(q.questionText);
    assert.equal(q.options.length, 4, 'Must contain exactly 4 multiple choice options');
    assert.equal(
      q.correctAnswer,
      undefined,
      'ANTI-CHEAT: correctAnswer must NEVER be sent to client!'
    );
  }

  // Verify the AI question is immediately checkable/playable in the engine
  const sampleQ = response.body.questions[0];
  const checkRes = await request(app).post('/api/questions/check-answer').send({
    questionId: sampleQ._id,
    userAnswer: sampleQ.options[0],
    difficulty: 'hard',
  });

  assert.equal(checkRes.status, 200);
  assert.equal(checkRes.body.success, true);
  assert.equal(typeof checkRes.body.correct, 'boolean');
  assert.ok(checkRes.body.correctAnswer);
  assert.ok(checkRes.body.explanation);
});
