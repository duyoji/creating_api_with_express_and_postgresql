const helper = require('../../../helper/requestHelper');
const assert = require('power-assert');
const { sequelize } = require('../../../../src/db/models');

describe('test POST /api/todos', () => {
  //テーブルのデータを取得するメソッドの定義
  const getTodos = async () => {
    const response = await helper.request({
      method: 'get',
      endPoint: '/api/todos',
      statusCode: 200,
    });
    return response.body;
  };

  //全てのテスト終了後、作成したデータを削除する
  after(async () => {
    await sequelize.truncate();
  });

  it('正常系のテスト', async () => {
    const postData = {
      title: 'test title',
      body: 'test body',
      completed: false,
    };

    const oldTodos = await getTodos();
    const response = await helper
      .request({
        method: 'post',
        endPoint: '/api/todos',
        statusCode: 200,
      })
      .send(postData);
    const createdTodo = response.body;
    assert.deepStrictEqual(
      { ...createdTodo },
      {
        id: createdTodo.id,
        title: postData.title,
        body: postData.body,
        completed: createdTodo.completed,
        createdAt: createdTodo.createdAt,
        updatedAt: createdTodo.updatedAt,
      }
    );

    const currentTodos = await getTodos();
    assert.strictEqual(
      currentTodos.length,
      oldTodos.length + 1,
      'データ作成後、データが１件増えている'
    );
  });

  it('titleを送らなかったらエラーとなる', async () => {
    const postData = {
      body: 'test body',
    };
    const response = await helper
      .request({
        method: 'post',
        endPoint: '/api/todos',
        statusCode: 400,
      })
      .send(postData);
    assert.strictEqual(
      response.body.message,
      "Field 'title' doesn't have a default value"
    );
  });

  it('bodyを送らなかったらエラーとなる', async () => {
    const postData = {
      title: 'test title',
    };
    const response = await helper
      .request({
        method: 'post',
        endPoint: '/api/todos',
        statusCode: 400,
      })
      .send(postData);
    assert.strictEqual(
      response.body.message,
      "Field 'body' doesn't have a default value"
    );
  });
});
