const { Router } = require("express");
const {
  register,
  commonStudents,
  suspend,
  retrieveForNotifications,
  notFound,
  methodNotAllowed
} = require("../controllers");
const studentRouter = require("./student");
const teacherRouter = require("./teacher");

const api = Router();

/**
 * @route       POST /api/register
 * @description Register one or more students to a specified teacher
 */
api
  .route("/register")
  .post(register)
  .all(methodNotAllowed);

/**
 * @route       GET /api/commonstudents
 * @description Retrieve a list of students common to a given list of teachers
 */
api
  .route("/commonstudents")
  .get(commonStudents)
  .all(methodNotAllowed);

/**
 * @route       POST /api/suspend
 * @description Suspend a specified student
 */
api
  .route("/suspend")
  .post(suspend)
  .all(methodNotAllowed);

/**
 * @route       POST /api/retrievefornotifications
 * @description Retrieve a list of students who can receive a given notification
 */
api
  .route("/retrievefornotifications")
  .get(retrieveForNotifications)
  .all(methodNotAllowed);

api.use("/student", studentRouter);
api.use("/teacher", teacherRouter);

/**
 * @route       GET *
 * @description Catch all
 */
api.get("*", notFound);

module.exports = api;
