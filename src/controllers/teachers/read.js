const models = require("../../../models");
const Teacher = models.Teacher;

const getAllTeachers = (req, res, next) => {
  Teacher.findAll()
    .then(teachers => res.json({ teachers }))
    .catch(err => next(err));
};

const getOneTeacher = (req, res, next) => {
  Teacher.findOne({ where: { teacherId: req.params.id } })
    .then(teacher => {
      if (!teacher) {
        return res.status(404).json({
          message: `Teacher where id = '${req.params.id}' was not found`
        });
      }
      res.json({ teacher });
    })
    .catch(err => next(err));
};

module.exports = { getAllTeachers, getOneTeacher };
