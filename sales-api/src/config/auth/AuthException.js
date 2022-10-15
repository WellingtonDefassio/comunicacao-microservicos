class AuthException extends Error {
  constructor(status, message) {
    super(message);
    this.message = message;
    this.status = status;
    Error.captureStackTrace(this.constructor);
  }
}

export default AuthException;
