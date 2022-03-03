import { DomainEvent } from '../../../../../../src/contexts/shared/domain/DomainEvent'
import { EventBus } from '../../../../../../src/contexts/shared/domain/EventBus'

export class MockEventBus implements EventBus {
  publish(events: DomainEvent[]): void {}
}
