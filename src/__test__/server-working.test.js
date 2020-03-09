const request = require('supertest');
const app = require('../app');

describe('Testing GET /', () => {
  it('Should respond with a HTTP 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});
