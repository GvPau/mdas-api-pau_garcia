import FavoriteCounter from './FavoriteCounter'
import Height from './Height'
import Id from './Id'
import Name from './Name'
import Weight from './Weight'

export default class Pokemon {
  private id: Id
  private name: Name
  private height: Height
  private weight: Weight
  private favoriteCounter: FavoriteCounter

  constructor(id: Id, name: Name, height: Height, weight: Weight, favoriteCounter: FavoriteCounter) {
    this.id = id
    this.name = name
    this.height = height
    this.weight = weight
    this.favoriteCounter = favoriteCounter
  }

  static create(id: Id, name: Name, height: Height, weight: Weight, favoriteCounter: FavoriteCounter) {
    return new Pokemon(id, name, height, weight, favoriteCounter)
  }

  getId() {
    return this.id
  }

  getFavoriteCounter() {
    return this.favoriteCounter
  }
}
