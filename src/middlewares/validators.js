const db = require("../db");
const {
  ServerError,
  BAD_REQUEST,
  INVALID_EMAIL,
  UNREGISTERED_STUDENT,
  UNREGISTERED_TEACHER
} = require("../types");

// for GET /api/commonstudents
const hasMinReqQueryParams = (req, res, next) => {
  if (!req.query.teacher) {
    const err = new ServerError(
      BAD_REQUEST,
      400,
      "At least one teacher (email) is required."
    );
    return next(err);
  }

  next();
};

// for GET /api/commonstudents
const hasValidTeacherEmails = async (req, res, next) => {
  try {
    const teacherEmails = Array.isArray(req.query.teacher)
      ? req.query.teacher
      : [req.query.teacher];

    const teachers = await db
      .select("id")
      .from("teacher")
      .whereIn("email", teacherEmails);

    if (teachers.length !== teacherEmails.length) {
      const err = new ServerError(
        UNREGISTERED_TEACHER,
        404,
        "One or more teacher emails have not been registered"
      );
      return next(err);
    }

    next();
  } catch (err) {
    next(err);
  }
};

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
      UNREGISTERED_STUDENT,
      404,
      "Student with the given email was not found."
    );
    next(err);
  }
};

module.exports = {
  commonstudents: {
    hasMinReqQueryParams,
    hasValidTeacherEmails
  },
  register: {
    hasValidRegisterRequestBody
  },
  suspend: {
    hasValidEmail,
    studentExists
  }
};
