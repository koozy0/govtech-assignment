const request = require('supertest');
const app = require('../app');

describe('Testing GET /api/commonstudents', () => {
  it('Should require at least one teacher', async () => {
    const res = await request(app).get('/api/commonstudents');
    expect(res.statusCode).toBe(400);
  });

  it('Should return an empty list if there are no common students', async () => {
    const res = await request(app)
      .get('/api/commonstudents')
      .query({ teacher: 'teacher.ron@gmail.com' })
      .query({ teacher: 'teacher.dan@gmail.com' })
      .query({ teacher: 'teacher.ben@gmail.com' })
      .query({ teacher: 'teacher.jon@gmail.com' });

    expect(res.body.students.length).toBe(0);
  });

  it('Should return a list of common students', async () => {
    const res = await request(app)
      .get('/api/commonstudents')
      .query({ teacher: 'teacher.ron@gmail.com' })
      .query({ teacher: 'teacher.dan@gmail.com' })
      .query({ teacher: 'teacher.ben@gmail.com' });

    expect(res.body.students).toEqual(
      expect.arrayContaining(['student.jack@gmail.com']),
    );
  });
});
