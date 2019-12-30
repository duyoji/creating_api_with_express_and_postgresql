const express = require('express');
const app = express();
const router = require('./routes/api.router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/todos', router);

module.exports = app;