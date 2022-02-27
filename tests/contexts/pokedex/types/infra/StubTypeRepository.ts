import PokemonName from '../../../../../src/contexts/pokedex/types/domain/PokemonName'
import TypeRepository from '../../../../../src/contexts/pokedex/types/domain/TypeRepository'
import TypesMother from '../domain/TypesMother'

export default class StubTypeRepository implements TypeRepository {
  private pokemon = 'charizard'
  async searchByPokemonName(name: PokemonName) {
    return name.value === this.pokemon ? Promise.resolve(TypesMother.fromCharizard()) : null
  }
}
