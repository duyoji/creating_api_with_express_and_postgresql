'use strict'

const models = require('../db/models/index');

const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400
};

const formatResponseData = (data) => ({ data });

// Controllers (CRUD)
//   C: Create
//   R: Read
//   U: UPDATE
//   D: Delete
module.exports = {
  /**
   * Read
   *
   * Example code for client.
   *
   *   fetch('http://127.0.0.1:8888/api/todos')
   *     .then(data => data.json())
   *     .then(result => console.log(result))
   */
  async getTodos(req, res) {
    try {
      const todos = await models.Todo.findAll({
        order: [
          ['id', 'ASC']
        ],
        raw: true
      });

      send(res, STATUS_CODES.OK, formatResponseData({todos}));
    } catch(error) {
      send(res, STATUS_CODES.BAD_REQUEST, formatResponseData({
        error: error.message
      }));
    }
  },

  /**
   * Create
   *
   * Example code for client.
   *
   *   const options = {
   *     headers: {'Content-Type': 'application/json'},
   *     method: 'POST',
   *     body: JSON.stringify({title: 'title', body: 'body'})
   *   };
   *   fetch('http://127.0.0.1:8888/api/todos', options)
   *     .then(data => data.json())
   *     .then(result => console.log(result))
   */
  async postTodo(req, res){
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const todo = await models.Todo.create({
        title: req.body.title,
        body: req.body.body
      }, { transaction });

      await transaction.commit();
      send(res, STATUS_CODES.OK, formatResponseData({todo}), false);
    } catch (error) {
      await transaction.rollback();
      send(res, STATUS_CODES.BAD_REQUEST, formatResponseData({
        error: error.message
      }));
    }
  },

  /**
   * Update
   *
   * Example code for client.
   *
   *   const options = {
   *     headers: {'Content-Type': 'application/json'},
   *     method: 'PUT',
   *     body: JSON.stringify({id: 1, title: 'updated title', body: 'updated body'})
   *   };
   *   fetch('http://127.0.0.1:8888/api/todos', options)
   *     .then(data => data.json())
   *     .then(result => console.log(result))
   */
  async putTodo(req, res){
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const todo = await models.Todo.findById(req.body.id, { transaction });
      if (!todo) {
        throw new Error(`Couldn't find a todo of ID ${req.body.id}`);
      }

      for(let prop in req.body) {
        if(prop !== 'id') {
          todo[prop] = req.body[prop];
        }
      }
      await todo.save({ transaction });
      await transaction.commit();
      send(res, STATUS_CODES.OK, formatResponseData({todo}), false);
    } catch (error) {
      await transaction.rollback();
      send(res, STATUS_CODES.BAD_REQUEST, formatResponseData({
        error: error.message
      }));
    }
  },

  /**
   * Delete
   *
   * Example code for client.
   *
   *   const options = {
   *     headers: {'Content-Type': 'application/json'},
   *     method: 'DELETE',
   *     body: JSON.stringify({id: 2})
   *   };
   *   fetch('http://127.0.0.1:8888/api/todos', options)
   *     .then(data => data.json())
   *     .then(result => console.log(result))
   */
  async deleteTodo(req, res){
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const todo = await models.Todo.findById(req.body.id, { transaction });
      if (!todo) {
        throw new Error(`Couldn't find a todo of ID ${req.body.id}`);
      }
      await todo.destroy({ transaction });
      await transaction.commit();
      send(res, STATUS_CODES.OK, formatResponseData({todo}), false);
    } catch (error) {
      await transaction.rollback();
      send(res, STATUS_CODES.BAD_REQUEST, formatResponseData({
        error: error.message
      }));
    }
  }
}

/***Helpers***/
const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};