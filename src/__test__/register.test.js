const request = require("supertest");
const app = require("../app");

describe("Testing POST /api/register", () => {
  it("Should respond with a HTTP 400 when invalid request body is sent", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({ invalid: true });
    expect(res.statusCode).toBe(400);
  });

  it("Should respond with a HTTP 204 when valid request is sent", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({
        teacher: "teacher.john@gmail.com",
        students: [
          "student.will@gmail.com",
          "student.brad@gmail.com",
          "student.morty@gmail.com"
        ]
      });
    expect(res.statusCode).toEqual(204);
  });
});
