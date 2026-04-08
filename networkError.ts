export  class networkError extends Error {

    constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }

}