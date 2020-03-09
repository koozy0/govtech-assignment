const db = require("../../db");
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

    const teacherId = teachers[0].id;
    const studentIds = students.map(student => student.id);

    await db.from("student_teacher").insert(
      studentIds.map(studentId => ({
        student_id: studentId,
        teacher_id: teacherId
      }))
    );
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = register;
