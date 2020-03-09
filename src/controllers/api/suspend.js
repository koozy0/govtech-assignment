const services = require("../../services");

const suspend = async (req, res, next) => {
  try {
    await services.suspendStudent(req.body.email);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = suspend;
