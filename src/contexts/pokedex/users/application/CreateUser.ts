import { User } from '../domain/User'
import UserCreator from '../domain/UserCreator'
import UserId from '../domain/UserId'
import UserName from '../domain/UserName'

export class CreateUser {
  private userCreator: UserCreator

  constructor(userCreator: UserCreator) {
    this.userCreator = userCreator
  }

  async execute(id: string, name: string) {
    await this.userCreator.execute(User.create(new UserId(id), new UserName(name)))
  }
}
