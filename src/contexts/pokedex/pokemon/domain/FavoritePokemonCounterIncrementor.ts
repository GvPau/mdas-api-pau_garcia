import Pokemon from './Pokemon'
import PokemonRepository from './PokemonRepository'

export default class favoritePokemonCounterIncrementor {
  private pokemonRepository: PokemonRepository

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository
  }

  async execute(pokemon: Pokemon) {
    pokemon.getFavoriteCounter().increaseByOne()
    this.pokemonRepository.saveFavoritePokemon(pokemon)
  }
}
