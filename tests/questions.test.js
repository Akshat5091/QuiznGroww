const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../server');

test('GET /api/questions/topics - returns list of topics with counts', async () => {
  const response = await request(app).get('/api/questions/topics');

  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
  assert.ok(response.body.length > 0);

  const firstTopic = response.body[0];
  assert.ok(firstTopic.name);
  assert.equal(typeof firstTopic.count, 'number');
  assert.ok(firstTopic.count > 0);
});

test('GET /api/questions/:topic/:difficulty - enforces Anti-Cheat protection', async () => {
  const response = await request(app).get('/api/questions/Computer%20Science/easy?limit=3');

  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
  assert.ok(response.body.length <= 3);

  for (const q of response.body) {
    assert.ok(q._id, 'Question must have _id');
    assert.ok(q.questionText, 'Question must have questionText');
    assert.equal(q.options.length, 4, 'Question must have exactly 4 options');

    // CRITICAL ANTI-CHEAT ASSERTION:
    assert.equal(
      q.correctAnswer,
      undefined,
      'ANTI-CHEAT VIOLATION: correctAnswer must NEVER be sent to client!'
    );
  }
});

test('POST /api/questions/check-answer - accurately evaluates answer', async () => {
  // First fetch a question to get a valid _id and options
  const qRes = await request(app).get('/api/questions/Computer%20Science/easy?limit=1');
  const targetQ = qRes.body[0];

  assert.ok(targetQ, 'Test fixture question must exist');

  const checkRes = await request(app).post('/api/questions/check-answer').send({
    questionId: targetQ._id,
    userAnswer: targetQ.options[0],
    difficulty: 'easy',
  });

  assert.equal(checkRes.status, 200);
  assert.equal(checkRes.body.success, true);
  assert.equal(typeof checkRes.body.correct, 'boolean');
  assert.ok(checkRes.body.correctAnswer);
  assert.ok(checkRes.body.explanation);
});

test('POST /api/questions/check-answer - returns 400 when questionId is missing', async () => {
  const response = await request(app)
    .post('/api/questions/check-answer')
    .send({ userAnswer: 'anything' });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});
