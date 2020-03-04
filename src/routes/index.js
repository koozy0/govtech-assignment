const { Router } = require("express");
const {
  serverWorks,
  register,
  commonStudents,
  suspend,
  retrieveForNotifications,
  notFound
} = require("../controllers");

const router = Router();
const apiRouter = Router();

router.get("/", serverWorks);
router.use("/api", apiRouter);
router.get("*", notFound);

/**
 * @route       POST /api/register
 * @description Register one or more students to a specified teacher
 */
apiRouter.post("/register", register);

/**
 * @route       GET /api/commonstudents
 * @description Retrieve a list of students common to a given list of teachers
 */
apiRouter.get("/commonstudents", commonStudents);

/**
 * @route       POST /api/suspend
 * @description Suspend a specified student
 */
apiRouter.post("/suspend", suspend);

/**
 * @route       POST /api/retrievefornotifications
 * @description Retrieve a list of students who can receive a given notification
 */
apiRouter.post("/retrievefornotifications", retrieveForNotifications);

module.exports = {
  router
};
