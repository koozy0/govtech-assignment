const { Router } = require("express");

const router = Router();

/**
 * @route       GET /
 * @description Verify server is responding
 */
router.get("/", (req, res) => {
  res.json({ message: "Server works!" });
});

/**
 * @route       GET *
 * @description Catch-all route
 */
router.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = {
  router
};
