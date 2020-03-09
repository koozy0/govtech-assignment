const express = require('express');
const { router } = require('./routes');
const { middlewares, errorHandler } = require('./middlewares');

const app = express();

app
  .use(...middlewares)
  .use(router)
  .use(errorHandler);

module.exports = app;
