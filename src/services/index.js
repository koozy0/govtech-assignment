const db = require("../db");

const getTeachers = teacherEmails => {
  return db.from("teacher").whereIn("email", teacherEmails);
};

const getCommonStudents = teachers => {
  const teacherIds = teachers.map(teacher => teacher.id);

  return db
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
};

module.exports = {
  getTeachers,
  getCommonStudents
};
