const supertest = require("supertest");
const { request } = require("../app.js");
const app = require("../app.js");

//comparison value type test
it(`Testing to see if supertest works`, () => {
  expect(1).toBe(1);
});

//get home ("/") type route test
describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
