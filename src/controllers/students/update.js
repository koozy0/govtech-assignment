const db = require("../../db");

const updateStudent = (req, res, next) => {
  db.from("teacher")
    .where("id", req.params.id)
    .update({ email: req.body.email })
    .then(count => res.json({ rows_updated: count }))
    .catch(err => next(err));
};

module.exports = updateStudent;
