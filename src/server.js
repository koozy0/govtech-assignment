const express = require("express");
const { router } = require("./routes");
const { middlewares, errorHandler } = require("./middlewares");
const { db, env, port } = require("./config");

// db config
const config = require("../knexfile")[env];

const app = express();

app
  .use(...middlewares)
  .use(router)
  .use(errorHandler)
  .listen(port, () => console.log(`Server started at port ${port}`));
