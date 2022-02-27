import TypeRepository from './TypeRepository'
import PokemonName from './PokemonName'
import { PokemonTypesNotFoundException } from './PokemonTypesNotFoundException'

export default class PokemonTypeSearcher {
  private typeRepository: TypeRepository

  constructor(pokemonRepository: TypeRepository) {
    this.typeRepository = pokemonRepository
  }

  async execute(name: PokemonName) {
    const result = await this.typeRepository.searchByPokemonName(name)
    if (result === null) {
      throw new PokemonTypesNotFoundException(name.value)
    }

    return result
  }
}
