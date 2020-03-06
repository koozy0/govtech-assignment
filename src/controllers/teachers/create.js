const db = require("../../db");

const createTeacher = (req, res, next) => {
  db("teacher")
    .insert({ email: req.body.email })
    .then(ids => res.json({ inserted_row_ids: ids }))
    .catch(err => next(err));
};

module.exports = createTeacher;
