const db = require("../../db");

const retrieveForNotifications = async (req, res, next) => {
  const mentions = req.body.notification
    .match(/@[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)
    .map(mention => mention.slice(1));

  try {
    const _recipients = await db
      .select("student.email")
      .from("student")
      .where("is_suspended", false)
      .whereIn("email", mentions)
      .union(function() {
        this.select("student.email as email")
          .from("teacher")
          .where("teacher.email", req.body.teacher)
          .where("student.is_suspended", false)
          .innerJoin(
            "student_teacher",
            "teacher.id",
            "student_teacher.teacher_id"
          )
          .innerJoin("student", "student.id", "student_teacher.student_id");
      });

    const recipients = _recipients.map(recipient => recipient.email);

    res.status(200).json({ recipients });
  } catch (err) {
    next(err);
  }
};

module.exports = retrieveForNotifications;
