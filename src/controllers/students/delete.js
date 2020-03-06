const db = require("../../db");

const deleteStudent = (req, res, next) => {
  db.from("student")
    .where("id", req.params.id)
    .delete()
    .then(count => res.json({ rows_deleted: count }))
    .catch(err => next(err));
};

module.exports = deleteStudent;
