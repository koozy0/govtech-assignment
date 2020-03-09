// TODO: replace this with a proper logging library like morgan + winston to avoid performance problems
// basic logger using console.log
const logger = (req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
};

module.exports = logger;
