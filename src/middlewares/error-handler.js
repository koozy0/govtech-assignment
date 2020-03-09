const { ServerError } = require("../types");
const { handleServerError } = require("../utils");

const errorHandler = (err, req, res, next) => {
  // console.error(err);

  if (err instanceof ServerError) {
    handleServerError(err, res);
  } else {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = errorHandler;
