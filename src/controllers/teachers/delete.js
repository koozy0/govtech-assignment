const db = require("../../db");

const deleteTeacher = (req, res, next) => {
  db("teacher")
    .where("id", req.params.id)
    .delete()
    .then(rows_deleted => res.json({ rows_deleted }))
    .catch(err => next(err));
};

module.exports = deleteTeacher;
