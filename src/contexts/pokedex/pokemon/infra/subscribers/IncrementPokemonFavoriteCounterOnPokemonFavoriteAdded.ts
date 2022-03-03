import { DomainEventSubscriber } from '../../../../shared/domain/DomainEventSubscriber'
import IncrementPokemonFavoriteCounter from '../../application/IncrementPokemonFavoriteCounter'

export class IncrementPokemonFavoriteCounterOnPokemonFavoriteAdded implements DomainEventSubscriber {
  private useCase: IncrementPokemonFavoriteCounter

  constructor(useCase: IncrementPokemonFavoriteCounter) {
    this.useCase = useCase
  }

  on(domainEvent: string) {
    this.useCase.execute(parseInt(JSON.parse(domainEvent).data.attributes.pokemonId))
  }
}
