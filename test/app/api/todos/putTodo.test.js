const helper = require('../../../helper/requestHelper');
const { Todo, sequelize } = require('../../../../src/db/models');
const assert = require('power-assert');

describe('test PUT /api/todos', () => {
  //テーブルのデータを取得するメソッドの定義
  const getTodos = async () => {
    const response = await helper.request({
      method: 'get',
      endPoint: '/api/todos',
      statusCode: 200,
    });
    return response.body;
  };

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
    //Promise.allで配列に入った各Promiseオブジェクトをresolveする。
    await Promise.all(promises);
  });
  //全てのテスト終了後、作成したデータを削除する
  after(async () => {
    await sequelize.truncate();
  });
  it('正常系のテスト', async () => {
    //変更前のデータ一覧を取得
    const oldTodos = await getTodos();

    const VALID_ID = 1;
    const putData = {
      id: VALID_ID,
      title: 'updated title',
      body: 'updated body',
      completed: true,
    };
    const response = await helper
      .request({
        method: 'put',
        endPoint: `/api/todos/${VALID_ID}`,
        statusCode: 200,
      })
      .send(putData);

    // データの各要素を検証(リクエストした内容に変更されているか)
    const updatedTodo = response.body.updatedTodo;
    assert.deepStrictEqual(
      { ...updatedTodo },
      {
        id: VALID_ID,
        title: putData.title,
        body: putData.body,
        completed: putData.completed,
        createdAt: updatedTodo.createdAt,
        updatedAt: updatedTodo.updatedAt,
      }
    );

    //変更前と後のupdatedAtを比較
    const beforeTodo = oldTodos[0];
    assert.strictEqual(beforeTodo.updatedAt < updatedTodo.updatedAt, true);
  });

  it('idが不正だとエラーとなる', async () => {
    const INVALID_ID = 9999999999;
    const putData = {
      title: 'updated title',
      body: 'updated body',
    };
    const response = await helper
      .request({
        method: 'put',
        endPoint: `/api/todos/${INVALID_ID}`,
        statusCode: 404,
      })
      .send(putData);
    assert.strictEqual(response.body.message, '存在しないIDです');
  });
});
