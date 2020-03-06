const db = require("../../db");

const updateTeacher = (req, res, next) => {
  db("teacher")
    .where("id", req.params.id)
    .update({ email: req.body.email })
    .then(count => res.json({ rows_updated: count }))
    .catch(err => next(err));
};

module.exports = updateTeacher;
