const common = require("./common");
const logger = require("./logger");
const errorHandler = require("./error-handler");

const middlewares = [...common, logger];

module.exports = {
  middlewares,
  errorHandler
};
