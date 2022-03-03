import FavoriteCounter from '../../../../../src/contexts/pokedex/pokemon/domain/FavoriteCounter'
import NumberMother from '../../../shared/domain/NumberMother'

export default class FavoriteCounterMother {
  static create(value: number) {
    return new FavoriteCounter(value)
  }

  static random() {
    return new FavoriteCounter(NumberMother.random())
  }
}
