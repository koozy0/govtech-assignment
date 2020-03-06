module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "develop",
      user: "develop",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations"
    }
  },

  staging: {
    client: "mysql",
    connection: {
      database: "staging",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      database: "production",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations"
    }
  }
};
