const db = require('../../db');

const getAllStudents = (req, res, next) => {
  db.from('student')
    .then(students => res.json({ students }))
    .catch(err => next(err));
};

const getOneStudent = (req, res, next) => {
  db.from('student')
    .where('id', req.params.id)
    .then(students => res.json({ students }))
    .catch(err => next(err));
};

module.exports = { getAllStudents, getOneStudent };
