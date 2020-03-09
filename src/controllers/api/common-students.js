const services = require('../../services');

const commonStudents = async (req, res, next) => {
  try {
    const teacherEmails = Array.isArray(req.query.teacher)
      ? req.query.teacher
      : [req.query.teacher];

    // get a list of teachers with the given emails
    const teachers = await services.getTeachers(teacherEmails);

    // get a list of common students
    const students = await services.getCommonStudents(teachers);

    // prepare the array of student emails
    const studentEmails = students.map(student => student.email);

    res.status(200).json({ students: studentEmails });
  } catch (err) {
    next(err);
  }
};

module.exports = commonStudents;
