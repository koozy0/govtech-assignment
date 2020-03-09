const db = require('../../db');

const deleteTeacher = (req, res, next) => {
  db.from('teacher')
    .where('id', req.params.id)
    .delete()
    .then(count => res.json({ rows_deleted: count }))
    .catch(err => next(err));
};

module.exports = deleteTeacher;
