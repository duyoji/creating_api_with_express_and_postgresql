const express = require('express');
const router = require('./routes/api.router');
const logger = require('morgan');
const app = express();

app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', router);

module.exports = app
