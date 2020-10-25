import supertest from "supertest";

import app from "../index";

describe("サーバのテスト", () => {
  it("Path [/] のテスト", async () => {
    const res = await supertest(app).get("/");
    expect(res.text).toBe("Hello World");
  });
});
