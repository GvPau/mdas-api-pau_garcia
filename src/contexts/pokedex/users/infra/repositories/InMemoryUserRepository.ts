import { User } from '../../domain/User'
import UserId from '../../domain/UserId'
import UserRepository from '../../domain/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  save(user: User) {
    if (!this.exists(user.getId())) {
      this.users.push(user)

      return
    }
    this.users.forEach((item, index) => {
      if (item.getId().equals(user.getId())) {
        this.users[index] = user
      }
    })
  }

  async find(userId: UserId) {
    return this.users.find((user) => user.getId().equals(userId)) as User
  }

  exists(userId: UserId) {
    return !!this.users.find((user) => user.getId().equals(userId))
  }
}
