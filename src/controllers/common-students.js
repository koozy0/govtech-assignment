const { v4: uuid } = require("uuid");
const models = require("../../models");
const Student = models.Student;
const Teacher = models.Teacher;

const commonStudents = (req, res, next) => {
  res.json({ message: "commonStudents works" });
};

module.exports = commonStudents;
