'use strict';

const db = require('../db/models/index');
const todosController = {
  async getTodos(req, res) {
    try {
      const todos = await db.Todo.findAll({
        order: [['id', 'ASC']], //idを昇順でデータを取得する
      });
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async postTodo(req, res) {
    let transaction;
    try {
      transaction = await db.sequelize.transaction();
      const { title, body, completed = false } = req.body;
      const todo = await db.Todo.create(
        { title, body, completed },
        { transaction }
      );
      await transaction.commit();
      res.status(200).json(todo);
    } catch (error) {
      await transaction.rollback();
      res.status(400).json({ message: error.message });
    }
  },
  async putTodo(req, res) {
    let transaction;
    try {
      const { title, body, completed } = await req.body;
      const { id } = req.params;
      const parsedId = parseInt(id, 10);

      if (parsedId < 1 || isNaN(parsedId)) {
        const error = new Error('IDは必須です(1以上の数値)');
        throw error;
      }

      transaction = await db.sequelize.transaction();

      //https://sequelize.org/master/manual/models-usage.html#-code-find--code----search-for-one-specific-element-in-the-database
      const targetTodo = await db.Todo.findByPk(parsedId, { transaction });
      if (!targetTodo) {
        const error = new Error('存在しないIDです');
        error.status = 404;
        throw error;
      }

      const updatedTodo = await targetTodo.update(
        {
          id: parsedId,
          title,
          body,
          completed,
        },
        { transaction }
      );
      await transaction.commit();
      res.status(200).json({ updatedTodo });
    } catch (error) {
      res.status(error.status || 400).json({ message: error.message });
      //line38~41で投げられたエラーを返せるようにrollbackは最後に行うように修正。
      //上記のエラーはtransaction経由で投げられていないため。
      await transaction.rollback();
    }
  },
  deleteTodo(req, res) {
    res.status(200).json({ message: 'deleteTodo', id: req.params.id });
  },
};
module.exports = todosController;
