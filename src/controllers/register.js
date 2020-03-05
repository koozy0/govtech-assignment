const { v4: uuid } = require("uuid");
const models = require("../../models");
const Student = models.Student;
const Teacher = models.Teacher;

const register = async (req, res, next) => {
  const { teacher: teacherEmail, studentEmails } = req.body;
  console.log(teacherEmail, studentEmails);

  try {
    // const teacher = await Teacher.findOne({ where: { email: teacherEmail } });

    // if (teacher) {
    //   console.log("Teacher found:");
    // } else {
    //   console.log("Teacher not found - creating new teacher");
    // }
    // const _teacher = teacher || (await createTeacher(teacherEmail));

    const teacherStudents = await Teacher.findOne({
      where: { email: teacherEmail },
      include: [{ model: Student, as: "student" }]
    });

    res.json({ data: teacherStudents });
  } catch (err) {
    next(err);
  }
};

const createTeacher = email => {
  return Teacher.create({ teacherId: uuid(), email });
};

module.exports = register;
