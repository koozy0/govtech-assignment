const request = require('supertest');
const app = require('../app');

describe('Testing POST /api/retrievefornotifications', () => {
  it('Should require a teacher email', async () => {
    const res = await request(app)
      .post('/api/retrievefornotifications')
      .send({ notification: 'Hello!' });

    expect(res.statusCode).toBe(400);
  });

  it('Should require a notification', async () => {
    const res = await request(app)
      .post('/api/retrievefornotifications')
      .send({ teacher: 'teacher.jon@gmail.com' });

    expect(res.statusCode).toBe(400);
  });

  it('Should exclude suspended students', async () => {
    const test = request(app);

    await request(app)
      .post('/api/suspend')
      .send({ email: 'student.rick@gmail.com' });

    const res = await test.post('/api/retrievefornotifications').send({
      teacher: 'teacher.ron@gmail.com',
      notification: 'Hello students! @student.rick@gmail.com',
    });

    expect(res.body.recipients).not.toContain('student.rick@gmail.com');
  });

  it('Should include mentioned students', async () => {
    const res = await request(app)
      .post('/api/retrievefornotifications')
      .send({
        teacher: 'teacher.ron@gmail.com',
        notification: 'Hello students! @student.morty@gmail.com',
      });

    expect(res.body.recipients).toContain('student.morty@gmail.com');
  });
});
