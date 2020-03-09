const db = require("../../db");
const services = require("../../services");

const commonStudents = async (req, res, next) => {
  try {
    const teacherEmails = Array.isArray(req.query.teacher)
      ? req.query.teacher
      : [req.query.teacher];

    const teachers = await services.getTeachers(teacherEmails);

    const students = await services.getCommonStudents(teachers);

    res.status(200).json({ students });
  } catch (err) {
    next(err);
  }
};

module.exports = commonStudents;
