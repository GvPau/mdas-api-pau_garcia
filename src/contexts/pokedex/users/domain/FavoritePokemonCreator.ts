import { FavoritePokemon } from './FavoritePokemon'
import { User } from './User'
import UserRepository from './UserRepository'

export class FavoritePokemonCreator {
  private repositoryUser: UserRepository

  constructor(repositoryUser: UserRepository) {
    this.repositoryUser = repositoryUser
  }

  async execute(user: User, favoritePokemon: FavoritePokemon) {
    user.addFavoritePokemon(favoritePokemon)
    this.repositoryUser.save(user)
  }
}
