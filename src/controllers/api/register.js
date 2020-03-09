const services = require("../../services");

const register = async (req, res, next) => {
  const { teacher: teacherEmail, students: studentEmails } = req.body;

  try {
    // insert ignore teacher
    await services.createTeacherIfNotCreated(teacherEmail);

    // insert ignore students
    await Promise.all(studentEmails.map(services.createStudentIfNotCreated));

    // select required rows
    const [teachers, students] = await Promise.all([
      services.getTeachers([teacherEmail]),
      services.getStudents(studentEmails)
    ]);

    // register the students to the given teacher
    await services.registerStudentToTeacher(teachers, students);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = register;
