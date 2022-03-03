import { FavoritePokemon } from './FavoritePokemon'
import { PokemonAlreadyFavoriteException } from './PokemonAlreadyFavoriteException'

export class FavoritePokemons {
  private elements: FavoritePokemon[]

  constructor(elements: FavoritePokemon[] = []) {
    this.elements = elements
  }

  add(favoritePokemon: FavoritePokemon) {
    if (this.exist(favoritePokemon)) {
      throw new PokemonAlreadyFavoriteException(favoritePokemon.getPokemonId().value)
    }
    this.elements.push(favoritePokemon)
  }

  private exist(favoritePokemon: FavoritePokemon) {
    return !!this.elements.find((pokemon) => pokemon.getPokemonId().value === favoritePokemon.getPokemonId().value)
  }

  getList() {
    return this.elements
  }
}
