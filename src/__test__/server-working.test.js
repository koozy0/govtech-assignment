const request = require("supertest");
const app = require("../app");

describe("Server", () => {
  it("Should respond with a server is working message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });
});
