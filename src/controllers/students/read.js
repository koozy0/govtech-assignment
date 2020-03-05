const models = require("../../../models");
const Student = models.Student;

const getAllStudents = (req, res, next) => {
  Student.findAll()
    .then(students => res.json({ students }))
    .catch(err => next(err));
};

const getOneStudent = (req, res, next) => {
  Student.findOne({ where: { studentId: req.params.id } })
    .then(student => {
      if (!student) {
        return res.status(404).json({
          message: `Student where id = '${req.params.id}' was not found`
        });
      }
      res.json({ student });
    })
    .catch(err => next(err));
};

module.exports = { getAllStudents, getOneStudent };
