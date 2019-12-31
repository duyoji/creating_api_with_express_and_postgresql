'use strict';

const express = require('express');
const controller = require('../controllers/api.controller');
const router = express.Router();

router
    .route('/')
    .get(controller.getTodos)
    .post(controller.postTodo);

router
    .route('/:id')
    .put(controller.putTodo)
    .delete(controller.deleteTodo);

module.exports = router;