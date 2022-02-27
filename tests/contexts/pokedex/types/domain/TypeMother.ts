import Type from '../../../../../src/contexts/pokedex/types/domain/Type'
import TypeNameMother from './TypeNameMother'

export default class TypeMother {
  static create(name: string) {
    return new Type(TypeNameMother.create(name))
  }

  static random() {
    return new Type(TypeNameMother.ramdom())
  }
}
