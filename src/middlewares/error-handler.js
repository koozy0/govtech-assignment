const errorHandler = (err, req, res, next) => {
  console.log(err);

  const { statusCode = 500 } = err;
  const response = { message: err.message };

  return res.status(statusCode).json(response);
};

module.exports = errorHandler;
