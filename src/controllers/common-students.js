const db = require("../db");

const commonStudents = async (req, res, next) => {
  try {
    const teachers = await db
      .select("id")
      .from("teacher")
      .whereIn("email", req.query.teacher);
    const teacherIds = teachers.map(teacher => teacher.id);

    const students = await db
      .select("cs.student_id", "student.email")
      .from(
        db
          .select("student_id")
          .from("student_teacher")
          .whereIn("teacher_id", teacherIds)
          .groupBy("student_id")
          .havingRaw("count(distinct teacher_id) = " + teacherIds.length)
          .as("cs")
      )
      .innerJoin("student", "cs.student_id", "id");

    res.json({ students });
  } catch (err) {
    next(err);
  }
};

module.exports = commonStudents;
