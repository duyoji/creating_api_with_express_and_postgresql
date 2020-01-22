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

      transaction = await db.sequelize.transaction();

      //findByPk()→https://sequelize.org/master/manual/models-usage.html#-code-find--code----search-for-one-specific-element-in-the-database
      const targetTodo = await db.Todo.findByPk(parsedId, { transaction });
      if (!targetTodo) {
        const error = new Error('存在しないIDです');
        error.status = 404;
        throw error;
      }

      const updatedTodo = await targetTodo.update(
        {
          title,
          body,
          completed,
        },
        { transaction }
      );
      await transaction.commit();
      res.status(200).json({ updatedTodo });
    } catch (error) {
      await transaction.rollback();
      res.status(error.status || 400).json({ message: error.message });
    }
  },
  async deleteTodo(req, res) {
    let transaction;
    try {
      const { id } = req.params;
      const parsedId = parseInt(id, 10);

      transaction = await db.sequelize.transaction();
      const targetTodo = await db.Todo.findByPk(parsedId, { transaction });
      if (!targetTodo) {
        const error = new Error('存在しないIDです');
        error.status = 404;
        throw error;
      }

      const deletedTodo = await targetTodo.destroy({ transaction });
      await transaction.commit();
      res.status(200).json(deletedTodo);
    } catch (error) {
      await transaction.rollback();
      res.status(error.status || 400).json({ message: error.message });
    }
  },
};
module.exports = todosController;
