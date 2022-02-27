import Height from './Height'
import Id from './Id'
import Name from './Name'
import Weight from './Weight'

export default class Pokemon {
  private id: Id
  private name: Name
  private height: Height
  private weight: Weight

  constructor(id: Id, name: Name, height: Height, weight: Weight) {
    this.id = id
    this.name = name
    this.height = height
    this.weight = weight
  }

  static create(id: Id, name: Name, height: Height, weight: Weight) {
    return new Pokemon(id, name, height, weight)
  }

  getId() {
    return this.id
  }
}
