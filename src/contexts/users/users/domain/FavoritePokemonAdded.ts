import { DomainEvent } from '../../../shared/domain/DomainEvent'

export default class FavoritePokemonAdded extends DomainEvent {
  private pokemonId: string
  static readonly EVENT_NAME = 'user.favorite_pokemon_added'

  constructor(idAggregate: string, pokemonId: string) {
    super(FavoritePokemonAdded.EVENT_NAME, idAggregate)
    this.pokemonId = pokemonId
  }

  toPrimitive(): Object {
    return {
      eventName: FavoritePokemonAdded.EVENT_NAME,
      pokemonId: this.pokemonId
    }
  }
}
