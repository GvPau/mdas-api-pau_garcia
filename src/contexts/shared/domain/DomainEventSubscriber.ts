export interface DomainEventSubscriber {
  on(domainEvent: string): void
}
