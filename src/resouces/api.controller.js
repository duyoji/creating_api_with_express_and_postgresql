// strictモードを指定https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode
'use strict'

const todosController = {
    getTodos(req, res) {
        res.statuscode(200).json({message: 'getTodos'});
    },
    postTodos(req, res) {
        res.statuscode(200).json({message: 'postTodo'});
    },
    putTodos(req, res) {
        res.statuscode(200).json({message: 'putTodo', id: req.params.id});
    },
    deleteTodo(req, res) {
        res.statuscode(200).json({message: 'deleteTodo', id: req.params.id});
    }
};

module.exports = todosController;