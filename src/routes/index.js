const { Router } = require("express");
const { serverWorks, notFound, methodNotAllowed } = require("../controllers");
const apiRouter = require("./api");

const router = Router();

/**
 * @route       GET /
 * @description Simple route to check that the server works
 */
router
  .route("/")
  .get(serverWorks)
  .all(methodNotAllowed);

/**
 * Adding the child router
 */
router.use("/api", apiRouter);

/**
 * @route       GET *
 * @description Catch all
 */
router.get("*", notFound);

module.exports = {
  router
};
