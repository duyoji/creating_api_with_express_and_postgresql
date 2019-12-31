const helper = require("../../../helper/requestHelper");

describe("test GET /api/todos", () => {
  it("レスポンスのテスト", async () => {
    const response = await helper.request({
      method: "get",
      endPoint: "/api/todos",
      statusCode: 200
    });
    console.log(response.body);
  });
});
