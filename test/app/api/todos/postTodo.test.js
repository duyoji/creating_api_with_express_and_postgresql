const helper = require("../../../helper/requestHelper");

describe("test POST /api/todos", () => {
  it("レスポンスのテスト", async () => {
    const response = await helper.request({
      method: "post",
      endPoint: "/api/todos",
      statusCode: 200
    });
    console.log(response.body);
  });
});
