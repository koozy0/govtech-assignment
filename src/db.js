const knex = require("knex");
const config = require("../knexfile");
const { env } = require("./config");

const options = config[env];
const db = knex(options);

module.exports = db;
