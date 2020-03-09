const { port } = require("./config");
const db = require("./db");

const app = require("./app");

// validate db connection
db.raw("select 1+1 as result")
  .then(() => console.log("Database connection success"))
  .catch(err => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

app.listen(port, () => console.log(`Server started at port ${port}`));

module.exports = app;
