const helper = require('../../../helper/requestHelper');
const assert = require('power-assert');
const { Todo, sequelize } = require('../../../../src/db/models');

describe('test GET /api/todos', () => {
  //テストが実行される前に、テスト用のデータ5件を作成する
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
    //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    //Promise.allで配列に入った各Promiseオブジェクトをresolveする。
    await Promise.all(promises);
  });
  //全てのテスト終了後、作成したデータを削除する
  after(async () => {
    await sequelize.truncate();
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
