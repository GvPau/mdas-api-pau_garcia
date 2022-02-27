import UserId from './UserId'
import { UserNotFoundException } from './UserNotFoundException'
import UserRepository from './UserRepository'

export default class UserFinder {
  private repository: UserRepository

  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async execute(id: UserId) {
    this.guard(id)
    const user = await this.repository.find(id)
    return user
  }

  private guard(userId: UserId) {
    if (!this.repository.exists(userId)) {
      throw new UserNotFoundException(userId.value)
    }
  }
}
