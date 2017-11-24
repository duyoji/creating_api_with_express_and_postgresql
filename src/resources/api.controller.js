'use strict'

const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400
};

// Controllers (CRUD)
//   C: Create
//   R: Read
//   U: UPDATE
//   D: Delete
module.exports = {
  // Read
  getTodos(req, res) {
    send(res, STATUS_CODES.OK, '`getTotos` should return todo list from DB', false);
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