const { ServerError } = require("../types");
const { handleServerError } = require("../utils");

const errorHandler = (err, req, res, next) => {
  if (err instanceof ServerError) {
    // TODO: replace this with a proper logging library
    console.error(err.code, err.message); // only print the error code and error message
    handleServerError(err, res);
  } else {
    // TODO: replace this with a proper logging library
    console.error(err); // print everything incl. stack trace
    return res.status(500).json({ message: err.message });
  }
};

module.exports = errorHandler;
