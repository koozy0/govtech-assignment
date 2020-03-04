const dotenv = require("dotenv");

const loaded = dotenv.config();

if (!loaded) {
  throw new Error(".env not loaded");
}

const { port = 3000 } = process.env;

module.exports = {
  port
};
