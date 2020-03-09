const { Router } = require('express');
const { methodNotAllowed, students } = require('../controllers');

const router = Router();

router
  .route('/')
  .get(students.getAllStudents)
  .post(students.createStudent)
  .all(methodNotAllowed);

router
  .route('/:id')
  .get(students.getOneStudent)
  .put(students.updateStudent)
  .delete(students.deleteStudent)
  .all(methodNotAllowed);

module.exports = router;
