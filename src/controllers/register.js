const { v4: uuid } = require("uuid");
const models = require("../../models");
const Student = models.Student;
const Teacher = models.Teacher;

const register = (req, res, next) => {
  const { teacher: teacherEmail, studentEmails } = req.body;
  console.log(teacherEmail, studentEmails);

  Teacher.findOne({ where: { email: teacherEmail } })
    .then(teacher => {
      if (!teacher) {
        console.log("teacher not found: creating new teacher");
        return Teacher.create({
          teacherId: uuid(),
          email: teacherEmail
        });
      } else {
        console.log("found teacher:", teacher);
        return teacher;
      }
    })
    .then(teacher => {
      console.log(teacher);
    })
    .catch(err => next(err));

  res.json({ message: "register works" });
};

module.exports = register;
