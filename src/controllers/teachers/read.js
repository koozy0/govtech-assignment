const db = require("../../db");

const getAllTeachers = (req, res, next) => {
  db("teacher")
    .then(teachers => res.json({ teachers }))
    .catch(err => next(err));
};

const getOneTeacher = (req, res, next) => {
  db("teacher")
    .where("id", req.params.id)
    .then(teachers => res.json({ teachers }))
    .catch(err => next(err));
};

module.exports = { getAllTeachers, getOneTeacher };
