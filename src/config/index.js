const dotenv = require('dotenv');

const loaded = dotenv.config();

if (!loaded) {
  throw new Error('.env not loaded');
}

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

module.exports = {
  env,
  port,
};
