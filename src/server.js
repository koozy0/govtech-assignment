const express = require("express");
const { router } = require("./routes");
const { middlewares, errorHandler } = require("./middlewares");
const { port } = require("./config");

const app = express();

app
  .use(...middlewares)
  .use(router)
  .use(errorHandler)
  .listen(port, () => console.log(`Server started at port ${port}`));
