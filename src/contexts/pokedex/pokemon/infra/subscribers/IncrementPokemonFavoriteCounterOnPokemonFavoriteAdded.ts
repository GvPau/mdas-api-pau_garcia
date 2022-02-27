import { DomainEventSubscriber } from '../../../../shared/domain/DomainEventSubscriber'

export class IncrementPokemonFavoriteCounterOnPokemonFavoriteAdded implements DomainEventSubscriber {
  on(domainEvent: string) {
    console.log('IncrementPokemonFavoriteCounterOnPokemonFavoriteAdded', domainEvent)
  }
}
