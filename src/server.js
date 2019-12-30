const express = require('express');
const add = express();
const router = require('../src/routes/api.router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.user('/api/todos', router);

module.exports = app;