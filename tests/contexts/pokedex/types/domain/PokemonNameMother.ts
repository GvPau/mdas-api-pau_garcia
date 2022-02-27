import WordMother from '../../../shared/domain/WordMother'
import PokemonName from '../../../../../src/contexts/pokedex/types/domain/PokemonName'

export default class PokemonNameMother {
  static create(value: string) {
    return new PokemonName(value)
  }

  static random() {
    return new PokemonName(WordMother.random())
  }
}
