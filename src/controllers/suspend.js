const db = require("../db");

const suspend = async (req, res, next) => {
  try {
    await db
      .update("is_suspended", true)
      .from("student")
      .where("email", req.body.email);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = suspend;
