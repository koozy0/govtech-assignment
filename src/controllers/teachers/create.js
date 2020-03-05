const models = require("../../../models");
const Teacher = models.Teacher;

const createTeacher = (req, res, next) => {
  Teacher.create({ email: req.body.email })
    .then(teacher => res.json({ teacher }))
    .catch(err => next(err));
};

module.exports = createTeacher;
