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
  putTodo(req, res) {
    res.status(200).json({ message: 'putTodo', id: req.params.id });
  },
  deleteTodo(req, res) {
    res.status(200).json({ message: 'deleteTodo', id: req.params.id });
  },
};
module.exports = todosController;
