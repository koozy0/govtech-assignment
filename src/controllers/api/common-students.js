const db = require("../../db");

const commonStudents = async (req, res, next) => {
  try {
    const teacherQuery = db.select("id").from("teacher");

    if (Array.isArray(req.query.teacher)) {
      teacherQuery.whereIn("email", req.query.teacher);
    } else {
      teacherQuery.where("email", req.query.teacher);
    }

    const teachers = await teacherQuery;
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

    res.status(200).json({ students });
  } catch (err) {
    next(err);
  }
};

module.exports = commonStudents;
