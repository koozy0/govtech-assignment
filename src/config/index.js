const dotenv = require("dotenv");

const loaded = dotenv.config();

if (!loaded) {
  throw new Error(".env not loaded");
}

const db = require("./db");
const port = process.env.PORT || 3000;

module.exports = {
  db,
  port
};
