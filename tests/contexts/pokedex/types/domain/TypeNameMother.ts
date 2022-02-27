import TypeName from '../../../../../src/contexts/pokedex/types/domain/TypeName'
import WordMother from '../../../shared/domain/WordMother'

export default class TypeNameMother {
  static create(value: string) {
    return new TypeName(value)
  }

  static ramdom() {
    return new TypeName(WordMother.random())
  }
}
