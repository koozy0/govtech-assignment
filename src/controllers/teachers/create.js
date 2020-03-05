const { v4: uuid } = require("uuid");
const models = require("../../../models");
const Teacher = models.Teacher;

const createTeacher = (req, res, next) => {
  Teacher.create({ teacherId: uuid(), email: req.body.email })
    .then(teacher => res.json({ teacher }))
    .catch(err => next(err));
};

module.exports = createTeacher;
