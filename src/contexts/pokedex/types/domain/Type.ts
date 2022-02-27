import TypeName from './TypeName'

export default class Type {
  private name: TypeName

  constructor(name: TypeName) {
    this.name = name
  }

  getName() {
    return this.name
  }
}
