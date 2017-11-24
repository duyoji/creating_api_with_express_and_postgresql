'use strict'

const Todo = require('../db/models/index').Todo;

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
   * // Example code for client.
   * fetch("http://127.0.0.1:8888/api/todos")
   *   .then(data => data.json())
   *   .then(result => console.log(result))
   */
  async getTodos(req, res) {
    const todos = await Todo.findAll({
      order: [
        ['id', 'ASC']
      ],
      raw: true
    });

    send(res, STATUS_CODES.OK, formatResponseData({todos}));
  },

  // Create
  postTodo(req, res){
    send(res, STATUS_CODES.OK, '`postTodo` should create a new todo to DB', false);
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