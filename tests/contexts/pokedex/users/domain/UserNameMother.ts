import WordMother from '../../../shared/domain/WordMother'
import UserName from '../../../../../src/contexts/users/users/domain/UserName'

export default class UserNameMother {
  static create(value: string) {
    return new UserName(value)
  }

  static random() {
    return new UserName(WordMother.random())
  }
}
