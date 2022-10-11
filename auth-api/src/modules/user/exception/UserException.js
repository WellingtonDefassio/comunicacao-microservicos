class UserException extends Error {
  constructor(status, message) {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    this.status = status;
    Error.captureStackTrace(this.constructor);
  }
}

export default UserException;
