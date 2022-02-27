import bodyParser from 'body-parser'
import compress from 'compression'
import Logger from '../../contexts/shared/domain/Logger'
import errorHandler from 'errorhandler'
import express, { Request, Response } from 'express'
import Router from 'express-promise-router'
import helmet from 'helmet'
import * as http from 'http'
import httpStatus from 'http-status'
import { registerRoutes } from './routes'
import container from './DependencyContainer'
import swaggerDocs from './Swagger'

export class Server {
  private express: express.Express
  private port: string
  private logger: Logger
  private httpServer?: http.Server
  private env = process.env.NODE_ENV || 'dev'

  constructor(port: string) {
    this.port = port
    this.logger = container.get('Shared.Logger')
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(helmet.xssFilter())
    this.express.use(helmet.noSniff())
    this.express.use(helmet.hidePoweredBy())
    this.express.use(helmet.frameguard({ action: 'deny' }))
    this.express.use(compress())
    const router = Router()
    router.use(errorHandler())
    this.express.use(router)
    if (this.env !== 'test') {
      swaggerDocs(this.express, port)
    }

    registerRoutes(router)

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      this.logger.error(err)
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    })
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      if (this.env !== 'test') {
        this.httpServer = this.express.listen(this.port, () => {
          this.logger.info(`App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`)
          this.logger.info('Press CTRL-C to stop\n')
          resolve()
        })
      }
      resolve()
    })
  }

  getHTTPServer() {
    return this.httpServer
  }

  getExpress() {
    return this.express
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error)
          }
          return resolve()
        })
      }

      return resolve()
    })
  }
}
