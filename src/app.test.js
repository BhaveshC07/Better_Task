const request = require('supertest');
const app = require('./index'); // Update if necessary to fit app exports

test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, CI/CD!');
});
