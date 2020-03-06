const db = require("../db");

const register = async (req, res, next) => {
  const { teacher: teacherEmail, students: studentEmails } = req.body;

  try {
    const [teachers, students] = await Promise.all([
      db.from("teacher").where("email", teacherEmail),
      db.from("student").whereIn("email", studentEmails)
    ]);
    const teacher = teachers[0];

    if (!teacher) {
      return res.status(400).json({
        message:
          "Could not register student(s) as teacher records were not found",
        missing_teacher: teacherEmail
      });
    }

    if (students.length < studentEmails.length) {
      const missingStudents = studentEmails.filter(
        studentEmail =>
          !students.find(student => student.email === studentEmail)
        // use a hashtable for lookup instead for better performance
      );
      return res.status(400).json({
        message:
          "Could not register student(s) as student(s) records were not found",
        missing_students: missingStudents
      });
    }

    const teacherId = teacher.id;
    const studentIds = students.map(student => student.id);
    await db("student_teacher").insert(
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
