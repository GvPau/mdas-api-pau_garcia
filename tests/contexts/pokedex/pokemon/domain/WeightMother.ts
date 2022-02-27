import Weight from '../../../../../src/contexts/pokedex/pokemon/domain/Weight'
import NumberMother from '../../../shared/domain/NumberMother'

export default class WeightMother {
  static create(value: number) {
    return new Weight(value)
  }

  static random() {
    return new Weight(NumberMother.random())
  }
}
