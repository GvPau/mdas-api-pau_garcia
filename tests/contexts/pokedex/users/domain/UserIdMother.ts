import Uuid from '../../../../../src/contexts/shared/domain/Uuid'
import UserId from '../../../../../src/contexts/pokedex/users/domain/UserId'

export default class UserIdMother {
  static create(value: string) {
    return new UserId(value)
  }

  static random() {
    return new UserId(Uuid.random().value)
  }
}
