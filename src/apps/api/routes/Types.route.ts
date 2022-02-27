import { Router, Request, Response } from 'express'
import container from '../DependencyContainer'

export const register = (router: Router) => {
  const getPokemonType = container.get('Apps.PokedexConsole.controller.GetPokemonType')
  /**
   * @swagger
   * /pokemon-type:
   *  get:
   *    tags:
   *      - PokemonType
   *    summary: Get pokemon's type
   *    parameters:
   *      - name: "name"
   *        in: "query"
   *        description: "Pokemon's name"
   *        required: true
   *        type: "string"
   *    responses:
   *      "200":
   *        description: "Success"
   *      "404":
   *        description: "Pokemon does not have types"
   *      "503":
   *        description: "An error occurred in the connection"
   */
  router.get('/pokemon-type', (req: Request, res: Response) => getPokemonType.execute(req, res))
}
