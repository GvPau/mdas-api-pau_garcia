export class TypeRepositoryNotWorkingException extends Error {
  constructor() {
    super('An error occurred in the type repository')
  }
}
