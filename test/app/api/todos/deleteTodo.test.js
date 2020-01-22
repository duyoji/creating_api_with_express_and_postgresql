const helper = require('../../../helper/requestHelper');
const { Todo, sequelize } = require('../../../../src/db/models');
const assert = require('power-assert');

describe('test DELETE api/todos', () => {
  //テーブルのデータを取得するメソッドの定義
  const getTodos = async () => {
    const response = await helper.request({
      method: 'get',
      endPoint: '/api/todos/',
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
    //削除前のtodo一覧を取得
    const oldTodos = await getTodos();

    //idが1のtodoデータを削除する
    const VALID_ID = 1;
    const response = await helper.request({
      method: 'delete',
      endPoint: `/api/todos/${VALID_ID}`,
      statusCode: 200,
    });

    //削除した際レスポンスで返ってくるTodoは削除前のTodoと一致する
    const beforeTodo = oldTodos[0];
    const deletedTodo = response.body;
    assert.deepStrictEqual({ ...deletedTodo }, { ...beforeTodo });

    //削除後の件数は削除前の件数より少なくなっている
    const currentTodos = await getTodos();
    assert.strictEqual(currentTodos.length < oldTodos.length, true);
  });

  it('idが不正だとエラーとなる', async () => {
    //リクエスト前のTodo一覧を取得
    const oldTodos = await getTodos();

    //存在しないIDでリクエストを投げると404エラーが返ってくる
    const INVALID_ID = 99999999;
    const response = await helper.request({
      method: 'delete',
      endPoint: `/api/todos/${INVALID_ID}`,
      statusCode: 404,
    });

    //エラーメッセージの確認
    assert.strictEqual(response.body.message, '存在しないIDです');

    //現在のTodo一覧を取得
    const currentTodos = await getTodos();

    //エラーが出るとrollbackされるのでリクエスト前と後のTodo一覧は同じ件数になる
    assert.strictEqual(oldTodos.length, currentTodos.length);
  });
});
