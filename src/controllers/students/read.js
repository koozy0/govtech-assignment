const getAllStudents = (req, res, next) => {
  res.json({ message: "getAllStudents works" });
};

const getOneStudent = (req, res, next) => {
  res.json({ message: "getOneStudent works" });
};

module.exports = { getAllStudents, getOneStudent };
