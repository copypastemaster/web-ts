class CustomNotFoundError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 404;
    this.name = "NotFoundError";

    Object.setPrototypeOf(this, CustomNotFoundError.prototype);
  }
}

export default CustomNotFoundError