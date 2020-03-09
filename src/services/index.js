const db = require("../db");

const getTeachers = teacherEmails => {
  return db.from("teacher").whereIn("email", teacherEmails);
};

const getStudents = studentEmails => {
  return db.from("student").whereIn("email", studentEmails);
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

const registerStudentToTeacher = (teachers, students) => {
  const teacherId = teachers[0].id;
  const studentIds = students.map(student => student.id);

  return db.from("student_teacher").insert(
    studentIds.map(studentId => ({
      student_id: studentId,
      teacher_id: teacherId
    }))
  );
};

const getMentionedStudents = notification => {
  return notification
    .match(/@[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)
    .map(mention => mention.slice(1));
};

const getNotificationRecipients = (teacherEmail, mentions) => {
  return db
    .select("student.email")
    .from("student")
    .where("is_suspended", false)
    .whereIn("email", mentions)
    .union(function() {
      this.select("student.email as email")
        .from("teacher")
        .where("teacher.email", teacherEmail)
        .where("student.is_suspended", false)
        .innerJoin(
          "student_teacher",
          "teacher.id",
          "student_teacher.teacher_id"
        )
        .innerJoin("student", "student.id", "student_teacher.student_id");
    });
};

const suspendStudent = studentEmail => {
  return db
    .update("is_suspended", true)
    .from("student")
    .where("email", studentEmail);
};

module.exports = {
  getTeachers,
  getStudents,
  getCommonStudents,
  createTeacherIfNotCreated,
  createStudentIfNotCreated,
  registerStudentToTeacher,
  getMentionedStudents,
  getNotificationRecipients,
  suspendStudent
};
