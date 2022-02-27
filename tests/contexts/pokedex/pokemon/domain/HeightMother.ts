import Height from '../../../../../src/contexts/pokedex/pokemon/domain/Height'
import NumberMother from '../../../shared/domain/NumberMother'

export default class HeightMother {
  static create(value: number) {
    return new Height(value)
  }

  static random() {
    return new Height(NumberMother.random())
  }
}
