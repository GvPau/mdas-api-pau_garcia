import { Router, Request, Response } from 'express'
import container from '../DependencyContainer'

export const register = (router: Router) => {
  const getPokemonById = container.get('Apps.Pokemon.controller.GetPokemonById')
  /**
   * @swagger
   * /pokemon/{id}:
   *  get:
   *    tags:
   *      - Pokemon
   *    summary: Get a pokemon by an id
   *    parameters:
   *      - name: "id"
   *        in: "path"
   *        description: "Pokemon's id"
   *        required: true
   *        type: "number"
   *    responses:
   *      "200":
   *        description: "Success"
   *      "404":
   *        description: "Pokemon does not exist"
   *      "503":
   *        description: "An error occurred in the connection"
   */
  router.get('/pokemon/:id', (req: Request, res: Response) => getPokemonById.execute(req, res))
}
