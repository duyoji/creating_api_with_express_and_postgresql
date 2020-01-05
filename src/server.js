const express = require('express');
const router = require('./routes/api.router');
const logger = require('morgan');
const app = express();

//CORSを許可
const middlewareForAllowOrigin = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
};

app.use(logger());
app.use(middlewareForAllowOrigin);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', router);

module.exports = app;
