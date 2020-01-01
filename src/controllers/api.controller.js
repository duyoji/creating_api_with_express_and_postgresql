'use strict';

const db = require('../db/models/index');
const todosController = {
  async getTodos(req, res) {
    try {
      //idを昇順でデータを取得する
      const todos = await db.Todo.findAll({
        order: [['id', 'ASC']], //生のデータを取得
        raw: true,
      });
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  postTodo(req, res) {
    res.status(200).json({ message: 'postTodo' });
  },
  putTodo(req, res) {
    res.status(200).json({ message: 'putTodo', id: req.params.id });
  },
  deleteTodo(req, res) {
    res.status(200).json({ message: 'deleteTodo', id: req.params.id });
  },
};

module.exports = todosController;
