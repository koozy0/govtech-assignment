const models = require("../../../models");
const Student = models.Student;

const createStudent = (req, res, next) => {
  Student.create({ email: req.body.email })
    .then(student => res.json({ student }))
    .catch(err => next(err));
};

module.exports = createStudent;
