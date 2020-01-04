const helper = require('../../../helper/requestHelper');
const assert = require('power-assert');

describe('test GET /api/todos', () => {
  it('レスポンスのテスト', async () => {
    const response = await helper.request({
      method: 'get',
      endPoint: '/api/todos',
      statusCode: 200,
    });

    const todos = response.body;

    assert.strictEqual(Array.isArray(todos), true);
    assert.strictEqual(todos.length, 5);

    todos.forEach(todo => {
      assert.strictEqual(typeof todo.id, 'number');
      assert.strictEqual(typeof todo.title, 'string');
      assert.strictEqual(typeof todo.body, 'string');
      //Mysqlにbooleanという型はない。0と1で表現されている。https://qiita.com/ritukiii/items/3a3667391d4d65678d82
      assert.strictEqual(typeof todo.completed, 'number');
    });
  });
});
