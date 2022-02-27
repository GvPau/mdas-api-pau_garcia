export class UserAlreadyExistException extends Error {
  constructor(value: string) {
    super(`User ${value} is already exist`)
  }
}
