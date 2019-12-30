'use strict';

const todosController = {
    getTodos(req, res) {
        res.status(200).json({message: 'getTodos'});
    },
    postTodo(req, res) {
        res.status(200).json({message: 'postTodo'});
    },
    putTodo(req, res) {
        res.status(200).json({message: 'putTodo', id: req.params.id});
    },
    deleteTodo(req, res) {
        res.status(200).json({message: 'deleteTodo', id: req.params.id});
    }
};

module.exports = todosController;