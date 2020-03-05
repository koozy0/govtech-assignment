const models = require("../../../models");
const Teacher = models.Teacher;

const getAllTeachers = (req, res, next) => {
  Teacher.findAll()
    .then(data => res.json({ data }))
    .catch(err => next(err));
};

const getOneTeacher = (req, res, next) => {
  res.json({ message: "get one teachers works" });
};

module.exports = { getAllTeachers, getOneTeacher };
