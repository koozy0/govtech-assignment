const db = require("../db");
const {
  ServerError,
  BAD_REQUEST,
  INVALID_EMAIL,
  STUDENT_NOT_FOUND
} = require("../types");

// for POST /api/register
const hasValidRegisterRequestBody = (req, res, next) => {
  if (!req.body.teacher) {
    const err = new ServerError(BAD_REQUEST, 400, "Teacher email is required.");
    return next(err);
  }

  if (!req.body.students || !Array.isArray(req.body.students)) {
    const err = new ServerError(
      BAD_REQUEST,
      400,
      "Valid students list is required."
    );
    return next(err);
  }

  next();
};

// for POST /api/suspend
const hasValidEmail = (req, res, next) => {
  if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi.test(req.body.email)) {
    next();
  } else {
    const err = new ServerError(INVALID_EMAIL, 400, "Invalid email provided.");
    next(err);
  }
};

// for POST /api/suspend
const studentExists = async (req, res, next) => {
  const students = await db.from("student").where("email", req.body.email);
  if (students[0]) {
    next();
  } else {
    console.log("here");
    const err = new ServerError(
      STUDENT_NOT_FOUND,
      404,
      "Student with the given email was not found."
    );
    next(err);
  }
};

module.exports = {
  suspend: {
    hasValidEmail,
    studentExists
  },
  register: {
    hasValidRegisterRequestBody
  }
};
