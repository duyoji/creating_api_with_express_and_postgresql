const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const apiRouter = require('./resources/api.router');

app.use('/api/', [
  // Third party middlewares.
  // You can put any middle wares that handle what you want to do.
  bodyParser.json(),
  bodyParser.urlencoded({extended: true}),

  // Hanlde
  apiRouter
]);

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

module.exports = app;