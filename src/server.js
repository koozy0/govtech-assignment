const express = require("express");
const { router } = require("./routes");
const { middlewares, errorHandler } = require("./middlewares");
const { port } = require("./config");
const db = require("./db");

const app = express();

// validate db connection
db.raw("select 1+1 as result")
  .then(() => console.log("Database connection success"))
  .catch(err => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

app
  .use(...middlewares)
  .use(router)
  .use(errorHandler)
  .listen(port, () => console.log(`Server started at port ${port}`));
