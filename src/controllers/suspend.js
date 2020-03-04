const suspend = (req, res, next) => {
  res.json({ message: "suspend works" });
};

module.exports = suspend;
