import Id from './Id'
import Pokemon from './Pokemon'
import { PokemonNotFoundException } from './PokemonNotFoundException'
import PokemonRepository from './PokemonRepository'

export default class PokemonFinder {
  private repository: PokemonRepository

  constructor(repository: PokemonRepository) {
    this.repository = repository
  }

  async execute(id: Id) {
    await this.guard(id)
    const pokemon = await this.repository.find(id)
    return pokemon as Pokemon
  }

  private async guard(id: Id) {
    if (!(await this.repository.exists(id))) {
      throw new PokemonNotFoundException(id.value)
    }
  }
}
