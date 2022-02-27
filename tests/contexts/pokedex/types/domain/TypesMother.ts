import Types from '../../../../../src/contexts/pokedex/types/domain/Types'
import TypeMother from './TypeMother'

export default class TypesMother {
  static fromCharizard() {
    return new Types([TypeMother.create('fire'), TypeMother.create('flying')])
  }

  static random() {
    return new Types([TypeMother.random(), TypeMother.random(), TypeMother.random()])
  }
}
