const commonStudents = require("./common-students");
const register = require("./register");
const retrieveForNotifications = require("./retrieve-for-notifications");
const suspend = require("./suspend");
const students = require("./students");
const teachers = require("./teachers");

const serverWorks = (req, res) => {
  res.json({ message: "Server works!" });
};

const notFound = (req, res) => {
  res.status(404).json({ message: "Resource not found" });
};

const methodNotAllowed = (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
};

module.exports = {
  commonStudents,
  register,
  retrieveForNotifications,
  suspend,
  serverWorks,
  notFound,
  methodNotAllowed,
  students,
  teachers
};
