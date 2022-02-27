import { PokemonId } from '../../../../../src/contexts/pokedex/users/domain/PokemonId'
import NumberMother from '../../../shared/domain/NumberMother'

export default class PokemonIdMother {
  static create(value: number) {
    return new PokemonId(value)
  }

  static random() {
    return new PokemonId(NumberMother.random())
  }
}
