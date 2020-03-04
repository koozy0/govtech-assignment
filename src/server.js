const express = require("express");
const router = require("./routes");
const middlewares = require("./middlewares");
const { port } = require("./config");

const app = express();

app.use(...middlewares);
app.use(router);

app.listen(port, () => console.log(`Server started at port ${port}`));
