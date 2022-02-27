export default abstract class NumberValueObject {
  public value: number

  constructor(value: number) {
    this.value = value
  }

  equals(other: NumberValueObject) {
    return this.value === other.value
  }
}
