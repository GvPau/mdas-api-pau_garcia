import { User } from './User'
import { UserAlreadyExistException } from './UserAlreadyExistException'
import UserId from './UserId'
import UserRepository from './UserRepository'

export default class UserCreator {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(user: User) {
    this.guard(user.getId())
    await this.userRepository.save(user)
  }

  private guard(id: UserId) {
    if (this.userRepository.exists(id)) {
      throw new UserAlreadyExistException(id.value)
    }
  }
}
