const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../server');

test('GET /api/health - returns healthy status and uptime', async () => {
  const response = await request(app).get('/api/health');

  assert.equal(response.status, 200);
  assert.equal(response.body.status, 'healthy');
  assert.ok(response.body.timestamp);
  assert.equal(typeof response.body.uptime, 'number');
  assert.ok(response.body.database);
});
