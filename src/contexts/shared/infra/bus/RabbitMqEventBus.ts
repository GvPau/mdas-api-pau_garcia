import { Connection, Exchange, Message } from 'amqp-ts'
import { DomainEvent } from 'contexts/shared/domain/DomainEvent'
import { EventBus } from '../../domain/EventBus'

export default class RabbitMqEventbus implements EventBus {
  private connection: Connection
  private exchange: Exchange

  constructor() {
    this.connection = new Connection('amqp://guest:guest@localhost')
    this.exchange = this.connection.declareExchange('domain_events', 'fanout')
  }

  publish(events: DomainEvent[]) {
    events.forEach((event) => {
      const message = new Message({
        data: {
          type: event.eventName,
          occurred_on: event.occurredOn,
          id: event.eventId,
          attributes: event.toPrimitive()
        },
        meta: {}
      })
      this.exchange.send(message)
    })
  }
}
