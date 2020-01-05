const helper = require('../../../helper/requestHelper');
const assert = require('power-assert');
const { Todo, sequelize } = require('../../../../src/db/models');

describe('test GET /api/todos', () => {
  before(async () => {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      const insertTodo = {
        title: 'test title' + i,
        body: 'test body' + i,
        completed: false,
      };
      const promise = Todo.create(insertTodo);
      promises.push(promise);
    }
    await Promise.all(promises);
  });
  after(async () => {
    await sequelize.truncate();
    await sequelize.close();
  });

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
