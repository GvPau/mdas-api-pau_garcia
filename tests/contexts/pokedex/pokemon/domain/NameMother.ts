import Name from '../../../../../src/contexts/pokedex/pokemon/domain/Name'
import WordMother from '../../../shared/domain/WordMother'

export default class NameMother {
  static create(value: string) {
    return new Name(value)
  }

  static random() {
    return new Name(WordMother.random())
  }
}
