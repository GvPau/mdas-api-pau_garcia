export class UuidNotValidException extends Error {
  constructor(value: string) {
    super(`${value} is not a valid uuid`)
  }
}
