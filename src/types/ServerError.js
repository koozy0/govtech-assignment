class ServerError extends Error {
  constructor(code = 'GENERIC', status = 500, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServerError);
    }

    this.name = this.constructor.name;
    this.code = code;
    this.status = status;
  }
}

module.exports = ServerError;
