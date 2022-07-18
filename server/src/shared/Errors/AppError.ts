class AppError {
  public readonly statusCode;

  public readonly message;

  constructor(message: string, statusCode = 400) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { AppError };
