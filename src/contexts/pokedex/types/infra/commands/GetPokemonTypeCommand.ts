import GetPokemonType from '../../application/GetPokemonType'
import PokemonTypeJsonConverter from '../services/PokemonTypeJsonConverter'

export default class GetPokemonTypeCommand {
  private useCase: GetPokemonType

  constructor(useCase: GetPokemonType) {
    this.useCase = useCase
  }

  async execute(name: string) {
    const types = await this.useCase.execute(name)
    return PokemonTypeJsonConverter.execute(types)
  }
}
