const getAllTeachers = (req, res, next) => {
  res.json({ message: "getAllTeachers works" });
};

const getOneTeacher = (req, res, next) => {
  res.json({ message: "getOneTeacher works" });
};

module.exports = { getAllTeachers, getOneTeacher };
