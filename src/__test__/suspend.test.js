const request = require("supertest");
const app = require("../app");

describe("Testing POST /api/suspend", () => {
  it("Should respond with a HTTP 400 when invalid request body is sent", async () => {
    const res = await request(app)
      .post("/api/suspend")
      .send({ invalid: true });
    expect(res.statusCode).toEqual(400);
  });

  it("Should respond with a HTTP 404 when student does not exist", async () => {
    const res = await request(app)
      .post("/api/suspend")
      .send({ email: "student.missing@gmail.com" });
    expect(res.statusCode).toEqual(404);
  });
});
