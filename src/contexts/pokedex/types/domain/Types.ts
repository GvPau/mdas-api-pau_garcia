import Type from './Type'

export default class Types {
  private _types: Type[]

  get elements() {
    return this._types
  }

  constructor(types: Type[]) {
    this._types = types
  }
}
