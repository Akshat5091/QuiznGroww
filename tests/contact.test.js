const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../server');

test('POST /api/contact - rejects payload with missing required fields', async () => {
  const response = await request(app).post('/api/contact').send({
    name: 'Akshat',
    email: '',
    subject: 'Feedback',
    message: '',
  });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});

test('POST /api/contact - rejects email with CRLF injection attempt', async () => {
  const response = await request(app).post('/api/contact').send({
    name: 'Attacker',
    email: 'victim@example.com\r\nBcc: evil@domain.com',
    subject: 'Injected Subject',
    message: 'Testing CRLF header injection defense.',
  });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
  assert.match(response.body.message, /valid email address/i);
});

test('POST /api/contact - successfully accepts valid, sanitized contact inquiry', async () => {
  const response = await request(app).post('/api/contact').send({
    name: 'Test Student',
    email: 'student@example.com',
    subject: 'General Question',
    message: 'Great platform! Keep up the good work.',
  });

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.match(response.body.message, /message has been received/i);
});

