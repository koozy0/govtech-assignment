const { Router } = require("express");
const { methodNotAllowed, teachers } = require("../controllers");

const router = Router();

router
  .route("/")
  .get(teachers.getAllTeachers)
  .post(teachers.createTeacher)
  .all(methodNotAllowed);

router
  .route("/:id")
  .get(teachers.getOneTeacher)
  .put(teachers.updateTeacher)
  .delete(teachers.deleteTeacher)
  .all(methodNotAllowed);

module.exports = router;
