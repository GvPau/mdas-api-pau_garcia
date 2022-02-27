import { Router, Request, Response } from 'express'
import container from '../DependencyContainer'

export const register = (router: Router) => {
  const addFavoritePokemonToUser = container.get('Apps.Users.controller.AddFavoritePokemonToUser')
  /**
   * @swagger
   * /users/favorite-pokemon/{pokemonId}:
   *  post:
   *    tags:
   *      - Users
   *    summary: Add favorite pokemon to user
   *    parameters:
   *      - name: "pokemonId"
   *        in: "path"
   *        description: "Pokemon's id"
   *        required: true
   *        type: "number"
   *      - name: "user_id"
   *        in: "header"
   *        description: "User's id"
   *        required: true
   *        type: "string"
   *    responses:
   *      "200":
   *        description: "Success"
   *      "409":
   *        description: "Favorite pokemon already exist"
   *      "404":
   *        description: "User does not exists"
   *      "400":
   *        description: "User validation"
   */
  router.post('/users/favorite-pokemon/:pokemonId', (req: Request, res: Response) =>
    addFavoritePokemonToUser.execute(req, res)
  )

  const createUser = container.get('Apps.Users.controller.CreateUser')
  /**
   * @swagger
   * /users:
   *  post:
   *    tags:
   *      - Users
   *    summary: Create a user
   *    requestBody:
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              userName:
   *                type: string
   *              userId:
   *                type: string
   *    responses:
   *      "201":
   *        description: "Success"
   *      "409":
   *        description: "User already exist"
   *      "400":
   *        description: "User validation"
   */
  router.post('/users', (req: Request, res: Response) => createUser.execute(req, res))
}
