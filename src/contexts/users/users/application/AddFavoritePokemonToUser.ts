import { EventBus } from '../../../shared/domain/EventBus'
import { FavoritePokemon } from '../domain/FavoritePokemon'
import { FavoritePokemonCreator } from '../domain/FavoritePokemonCreator'
import { PokemonId } from '../domain/PokemonId'
import UserFinder from '../domain/UserFinder'
import UserId from '../domain/UserId'

export class AddFavoritePokemonToUser {
  private userFinder: UserFinder
  private favoritePokemonCreator: FavoritePokemonCreator
  private eventBus: EventBus

  constructor(userFinder: UserFinder, favoritePokemonCreator: FavoritePokemonCreator, eventBus: EventBus) {
    this.userFinder = userFinder
    this.favoritePokemonCreator = favoritePokemonCreator
    this.eventBus = eventBus
  }

  async execute(userId: string, pokemonId: number) {
    const user = await this.userFinder.execute(new UserId(userId))
    await this.favoritePokemonCreator.execute(user, new FavoritePokemon(new PokemonId(pokemonId)))
    console.log('AddFavoritePokemonToUser', JSON.stringify(user.getFavoritePokemons()))
    const events = user.pullDomainEvents()
    console.log(events)
    this.eventBus.publish(events)
  }
}
