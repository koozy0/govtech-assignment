const express = require("express");
const { router } = require("./routes");
const { middlewares, errorHandler } = require("./middlewares");
const { db, port } = require("./config");

const app = express();

// db.authenticate()
//   .then(() => console.log("Database connected"))
//   .catch(err => console.log("Database connection error:", err));

app
  .use(...middlewares)
  .use(router)
  .use(errorHandler)
  .listen(port, () => console.log(`Server started at port ${port}`));
