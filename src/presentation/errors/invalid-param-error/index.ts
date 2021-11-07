class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Missing Param: ${paramName}`);
    this.name = 'InvalidParamError';
  }
}

export { InvalidParamError };
