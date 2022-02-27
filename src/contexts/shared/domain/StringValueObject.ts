export default abstract class StringValueObject {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  equals(other: StringValueObject) {
    return this.value === other.value
  }
}
