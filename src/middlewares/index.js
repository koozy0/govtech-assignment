const common = require("./common");
const logger = require("./logger");

const middlewares = [...common, logger];

module.exports = middlewares;
