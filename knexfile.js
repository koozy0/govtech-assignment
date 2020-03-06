const dotenv = require("dotenv");
const loaded = dotenv.config();

if (!loaded) {
  throw new Error("Environment variables not loaded");
}

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  },

  staging: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds/staging"
    }
  },

  production: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds/production"
    }
  }
};
