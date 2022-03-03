import { Connection, Exchange } from 'amqp-ts'
import { DomainEventSubscriber } from '../../domain/DomainEventSubscriber'

interface RabbitMqStarterConfig {
  queue: string
  subscriber: DomainEventSubscriber
}

export default class RabbitMqStarter {
  private connection: Connection
  private exchange: Exchange

  constructor() {
    this.connection = new Connection('amqp://guest:guest@rabbitmq')
    this.exchange = this.connection.declareExchange('domain_events', 'fanout')
  }

  start(configs: RabbitMqStarterConfig[]) {
    configs.forEach(async (config) => {
      const queue = this.connection.declareQueue(config.queue)
      queue.bind(this.exchange)

      try {
        await queue.activateConsumer(
          (message) => {
            const event = message.content.toString()
            config.subscriber.on(event)
            message.ack()
          },
          { noAck: false }
        )
      } catch (error) {}
    })
  }
}
