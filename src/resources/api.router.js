'use strict'

const router = require('express').Router();
const controller = require('./api.controller');

router.route('/todos')
  .get(controller.getTodos)
  .post(controller.postTodo)
  .put(controller.putTodo)
  .delete(controller.deleteTodo);

module.exports = router;