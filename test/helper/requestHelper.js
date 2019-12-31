const request = require("supertest");
const app = require("../../src/server");

module.exports = {
  request: ({ method, endPoint, statusCode }) => {
    return request(app)
      [method](endPoint)
      .set("Accept", "application/json")
      .expect("Content-type", /application\/json/)
      .expect(statusCode);
  }
};
