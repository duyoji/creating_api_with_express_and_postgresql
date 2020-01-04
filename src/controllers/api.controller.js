'use strict';

const db = require('../db/models/index');
const todosController = {
  async getTodos(req, res) {
    try {
      const todos = await db.Todo.findAll({
        order: [['id', 'ASC']], //idを昇順でデータを取得する
        raw: true, //生のデータを取得
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
