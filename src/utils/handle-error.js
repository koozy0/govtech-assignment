const handleServerError = (err, res) => {
  const { code, status, message } = err;
  const response = { code, message };

  return res.status(status).json(response);
};

module.exports = {
  handleServerError,
};
