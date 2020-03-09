const createStudent = require('./create');
const deleteStudent = require('./delete');
const updateStudent = require('./update');
const { getAllStudents, getOneStudent } = require('./read');

module.exports = {
  createStudent,
  deleteStudent,
  updateStudent,
  getAllStudents,
  getOneStudent,
};
