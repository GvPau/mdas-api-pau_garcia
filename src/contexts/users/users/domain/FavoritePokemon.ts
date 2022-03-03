import { PokemonId } from './PokemonId'

export class FavoritePokemon {
  private pokemonId: PokemonId

  constructor(pokemonId: PokemonId) {
    this.pokemonId = pokemonId
  }

  getPokemonId() {
    return this.pokemonId
  }
}
