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
   *     headers = {'Content-Type': 'application/json'},
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

  // Update
  putTodo(req, res){
    send(res, STATUS_CODES.OK, '`putTodo` should update a todo in DB', false);
  },

  // Delete
  deleteTodo(req, res){
    send(res, STATUS_CODES.OK, '`deleteTodo` should delete a todo from DB', false);
  }
}

/***Helpers***/
const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};