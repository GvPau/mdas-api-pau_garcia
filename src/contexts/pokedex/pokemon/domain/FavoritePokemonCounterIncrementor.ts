import Pokemon from './Pokemon'
import PokemonRepository from './PokemonRepository'

export default class favoritePokemonCounterIncrementor {
  private pokemonRepository: PokemonRepository

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository
  }

  async execute(pokemon: Pokemon) {
    pokemon.getFavoriteCounter().increaseByOne()
    console.log('POKEMON DESPUES DEL INCREMENT: ', pokemon)
    this.pokemonRepository.saveFavoritePokemon(pokemon.getId(), pokemon.getFavoriteCounter())
    console.log('pokemon guardado!')
  }
}
