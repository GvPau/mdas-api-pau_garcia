import Id from '../../../../../src/contexts/pokedex/pokemon/domain/Id'
import NumberMother from '../../../shared/domain/NumberMother'

export default class IdMother {
  static create(value: number) {
    return new Id(value)
  }

  static random() {
    return new Id(NumberMother.random())
  }
}
