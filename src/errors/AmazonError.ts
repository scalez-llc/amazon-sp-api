export class AmazonError extends Error {

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, AmazonError.prototype);
  }
}
