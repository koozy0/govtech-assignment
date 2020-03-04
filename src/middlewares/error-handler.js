const { ServerError } = require("../types");
const { handleServerError } = require("../utils");

const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (Error instanceof ServerError) {
    handleServerError(err, res);
  }

  return res.status(status).json(response);
};

module.exports = errorHandler;
