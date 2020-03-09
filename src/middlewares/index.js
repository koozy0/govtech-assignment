const common = require("./common");
const logger = require("./logger");
const errorHandler = require("./error-handler");
const validators = require("./validators");

const middlewares = [...common, logger];

module.exports = {
  middlewares,
  errorHandler,
  validators
};
