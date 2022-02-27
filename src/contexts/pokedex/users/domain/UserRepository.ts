import { User } from './User'
import UserId from './UserId'

export default interface UserRepository {
  save: (user: User) => void
  exists: (userId: UserId) => boolean
  find: (userId: UserId) => Promise<User>
}
