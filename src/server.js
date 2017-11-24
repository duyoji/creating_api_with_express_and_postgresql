const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const apiRouter = require('./resources/api.router');

// Refer to https://enable-cors.org/server_expressjs.html
const middlewareForAllowOrigin = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
};

app.use('/api/', [
  // My middleware
  middlewareForAllowOrigin,

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