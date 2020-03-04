const { Router } = require("express");
const {
  serverWorks,
  register,
  commonStudents,
  suspend,
  retrieveForNotifications,
  notFound,
  methodNotAllowed
} = require("../controllers");

const router = Router();
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
  .get(suspend)
  .all(methodNotAllowed);

/**
 * @route       POST /api/retrievefornotifications
 * @description Retrieve a list of students who can receive a given notification
 */
api
  .route("/retrievefornotifications")
  .get(retrieveForNotifications)
  .all(methodNotAllowed);

/**
 * @route       GET *
 * @description Catch all
 */
api.get("*", notFound);

router.get("/", serverWorks); // simple route to check that the server works
router.use("/api", api); // child router for api routes
router.get("*", notFound); // catch-all

module.exports = {
  router
};
