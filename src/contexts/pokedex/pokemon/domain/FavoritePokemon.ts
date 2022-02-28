import FavoriteCounter from './FavoriteCounter'
import Id from './Id'

export class FavoritePokemon {
  private pokemonId: Id
  private counter: FavoriteCounter

  constructor(pokemonId: Id, counter: FavoriteCounter) {
    this.pokemonId = pokemonId
    this.counter = counter
  }

  static create(id: Id, counter: FavoriteCounter) {
    return new FavoritePokemon(id, counter)
  }

  getPokemonId() {
    return this.pokemonId
  }

  getCounter() {
    return this.counter
  }
}
