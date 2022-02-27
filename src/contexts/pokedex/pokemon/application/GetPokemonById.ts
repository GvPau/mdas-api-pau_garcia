import PokemonFinder from '../domain/PokemonFinder'
import Id from '../domain/Id'

export default class GetPokemonById {
  private pokemonFinder: PokemonFinder

  constructor(pokemonFinder: PokemonFinder) {
    this.pokemonFinder = pokemonFinder
  }

  async execute(id: number) {
    return await this.pokemonFinder.execute(new Id(id))
  }
}
