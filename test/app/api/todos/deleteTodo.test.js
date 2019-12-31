const helper = require('../../../helper/requestHelper');

const VALID_ID = 1;
describe('test DELETE api/todos', () => {
    it('レスポンスのテスト', async () => {
        const response = await helper.request({
            method: "delete",
            endPoint: `/api/todos/${VALID_ID}`,
            statusCode: 200
        });
        console.log(response.body);
    });
});