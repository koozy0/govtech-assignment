const db = require("../../db");

const createStudent = (req, res, next) => {
  db("student")
    .insert({ email: req.body.email })
    .then(ids => res.json({ inserted_row_ids: ids }))
    .catch(err => next(err));
};

module.exports = createStudent;
