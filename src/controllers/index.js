const commonStudents = require("./common-students");
const register = require("./register");
const retrieveForNotifications = require("./retrieve-for-notifications");
const suspend = require("./suspend");

const serverWorks = (req, res) => {
  res.json({ message: "Server works!" });
};

const notFound = (req, res) => {
  res.status(404).json({ message: "Resource not found" });
};

module.exports = {
  commonStudents,
  register,
  retrieveForNotifications,
  suspend,
  serverWorks,
  notFound
};
