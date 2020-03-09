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

const createTeacherIfNotCreated = teacherEmail => {
  return db.raw(
    db
      .from("teacher")
      .insert({ email: teacherEmail })
      .toString()
      .replace(/insert/i, "INSERT IGNORE")
  );
};

const createStudentIfNotCreated = studentEmail => {
  return db.raw(
    db
      .from("student")
      .insert({ email: studentEmail })
      .toString()
      .replace(/insert/i, "INSERT IGNORE")
  );
};

const getStudents = studentEmails => {
  return db.from("student").whereIn("email", studentEmails);
};

module.exports = {
  getTeachers,
  getStudents,
  getCommonStudents,
  createTeacherIfNotCreated,
  createStudentIfNotCreated
};
