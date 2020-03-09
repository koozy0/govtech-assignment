const { Router } = require("express");
const { api, notFound, methodNotAllowed } = require("../controllers");
const studentRouter = require("./student");
const teacherRouter = require("./teacher");
const { validators } = require("../middlewares");

const apiRouter = Router();

/**
 * @route       POST /api/register
 * @description Register one or more students to a specified teacher
 */
apiRouter
  .route("/register")
  .post(validators.register.hasValidRegisterRequestBody, api.register)
  .all(methodNotAllowed);

/**
 * @route       GET /api/commonstudents
 * @description Retrieve a list of students common to a given list of teachers
 */
apiRouter
  .route("/commonstudents")
  .get(api.commonStudents)
  .all(methodNotAllowed);

/**
 * @route       POST /api/suspend
 * @description Suspend a specified student
 */
apiRouter
  .route("/suspend")
  .post(
    validators.suspend.hasValidEmail,
    validators.suspend.studentExists,
    api.suspend
  )
  .all(methodNotAllowed);

/**
 * @route       POST /api/retrievefornotifications
 * @description Retrieve a list of students who can receive a given notification
 */
apiRouter
  .route("/retrievefornotifications")
  .post(api.retrieveForNotifications)
  .all(methodNotAllowed);

apiRouter.use("/student", studentRouter);
apiRouter.use("/teacher", teacherRouter);

/**
 * @route       GET *
 * @description Catch all
 */
apiRouter.get("*", notFound);

module.exports = apiRouter;
