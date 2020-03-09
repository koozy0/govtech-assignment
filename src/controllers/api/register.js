const db = require("../../db");

const register = async (req, res, next) => {
  const { teacher: teacherEmail, students: studentEmails } = req.body;

  try {
    // insert ignore teacher
    await db.raw(
      db
        .from("teacher")
        .insert({ email: teacherEmail })
        .toString()
        .replace(/insert/i, "INSERT IGNORE")
    );

    // insert ignore students
    await Promise.all(
      studentEmails.map(studentEmail =>
        db.raw(
          db
            .from("student")
            .insert({ email: studentEmail })
            .toString()
            .replace(/insert/i, "INSERT IGNORE")
        )
      )
    );

    // select required rows
    const [teachers, students] = await Promise.all([
      db.from("teacher").where("email", teacherEmail),
      db.from("student").whereIn("email", studentEmails)
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
