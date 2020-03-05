const createTeacher = require("./create");
const deleteTeacher = require("./delete");
const updateTeacher = require("./update");
const { getAllTeachers, getOneTeacher } = require("./read");

module.exports = {
  createTeacher,
  deleteTeacher,
  updateTeacher,
  getAllTeachers,
  getOneTeacher
};
