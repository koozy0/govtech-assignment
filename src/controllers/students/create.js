const { v4: uuid } = require("uuid");
const models = require("../../../models");
const Student = models.Student;

const createStudent = (req, res, next) => {
  Student.create({ studentId: uuid(), email: req.body.email })
    .then(student => res.json({ student }))
    .catch(err => next(err));
};

module.exports = createStudent;
