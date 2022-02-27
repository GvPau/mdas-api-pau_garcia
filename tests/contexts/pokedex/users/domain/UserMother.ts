import { User } from '../../../../../src/contexts/pokedex/users/domain/User'
import UserId from '../../../../../src/contexts/pokedex/users/domain/UserId'
import UserName from '../../../../../src/contexts/pokedex/users/domain/UserName'
import UserIdMother from './UserIdMother'
import UserNameMother from './UserNameMother'

export default class UserMother {
  static create(id: string, name: string) {
    return User.create(new UserId(id), new UserName(name))
  }

  static random() {
    return User.create(UserIdMother.random(), UserNameMother.random())
  }
}
