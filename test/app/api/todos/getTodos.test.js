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
      assert.strictEqual(typeof todo.completed, 'boolean');
    });
  });
});
