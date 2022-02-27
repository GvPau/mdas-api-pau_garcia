import { v4 as uuidv4, validate } from 'uuid'
import { UuidNotValidException } from './UuidNotValidException'

export default class Uuid {
  private _value: string
  constructor(value: string) {
    this.ensureIsValidUuid(value)
    this._value = value
  }

  static random(): Uuid {
    return new Uuid(uuidv4())
  }

  get value() {
    return this._value
  }

  equals(other: Uuid) {
    return this._value === other.value
  }

  toString() {
    return this._value
  }

  private ensureIsValidUuid(id: string) {
    if (!validate(id)) {
      throw new UuidNotValidException(id)
    }
  }
}
