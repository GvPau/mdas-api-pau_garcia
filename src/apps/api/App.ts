import RabbitMqStarter from '../../contexts/shared/infra/bus/RabbitMqStarter'
import container from './DependencyContainer'
import { Server } from './Server'

export class App {
  server?: Server

  async start() {
    const port = process.env.PORT || '5001'
    this.initRabbitMq()
    this.server = new Server(port)
    return this.server.listen()
  }

  async stop() {
    return this.server?.stop()
  }

  get httpServer() {
    return this.server?.getHTTPServer()
  }

  get express() {
    return this.server?.getExpress()
  }

  private initRabbitMq() {
    const starter = container.get('Shared.EventBusStarter') as RabbitMqStarter
    const subscriber = container.get('Apps.Pokemon.subscriber.IncrementPokemonFavoriteCounterOnPokemonFavoriteAdded')
    const configs = [
      {
        queue: 'increment_favorite_pokemon_on_favorite_pokemon_added',
        subscriber
      }
    ]

    starter.start(configs)
  }
}
