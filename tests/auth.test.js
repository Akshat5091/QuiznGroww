const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../server');

test('GET /api/auth/config - returns Google Client ID configuration', async () => {
  const response = await request(app).get('/api/auth/config');

  assert.equal(response.status, 200);
  assert.equal(typeof response.body.googleClientId, 'string');
});

test('GET /api/auth/me - returns 401 when token is missing', async () => {
  const response = await request(app).get('/api/auth/me');

  assert.equal(response.status, 401);
  assert.equal(response.body.success, false);
});

test('POST /api/auth/google - creates demo session and allows access to /me', async () => {
  const loginRes = await request(app)
    .post('/api/auth/google')
    .send({
      demoUser: {
        email: `tester.${Date.now()}@gmail.com`,
        name: 'Automated Test Runner',
      },
    });

  assert.equal(loginRes.status, 200);
  assert.equal(loginRes.body.success, true);
  assert.ok(loginRes.body.token, 'Must return JWT token');
  assert.ok(loginRes.body.user);

  const token = loginRes.body.token;

  // Now verify /me with the returned JWT
  const meRes = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${token}`);

  assert.equal(meRes.status, 200);
  assert.equal(meRes.body.success, true);
  assert.equal(meRes.body.user.name, 'Automated Test Runner');
});
