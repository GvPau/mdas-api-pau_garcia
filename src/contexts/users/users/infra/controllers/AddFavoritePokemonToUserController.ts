/* eslint-disable camelcase */
import { BaseController } from '../../../../shared/infra/controllers/BaseController'
import { Request, Response } from 'express'
import { AddFavoritePokemonToUser } from '../../application/AddFavoritePokemonToUser'
import { PokemonAlreadyFavoriteException } from '../../domain/PokemonAlreadyFavoriteException'
import { UserNotFoundException } from '../../domain/UserNotFoundException'
import { UuidNotValidException } from '../../../../shared/domain/UuidNotValidException'

export default class AddFavoritePokemonToUserController extends BaseController {
  private useCase: AddFavoritePokemonToUser

  constructor(useCase: AddFavoritePokemonToUser) {
    super()
    this.useCase = useCase
  }

  async execute(req: Request, res: Response) {
    try {
      const { user_id } = req.headers
      const { pokemonId } = req.params
      await this.useCase.execute(user_id as string, +pokemonId)

      return this.ok(res)
    } catch (err: any) {
      const message = err.message
      if (err instanceof PokemonAlreadyFavoriteException) {
        return this.conflict(res, message)
      }
      if (err instanceof UserNotFoundException) {
        return this.notFound(res, message)
      }
      if (err instanceof UuidNotValidException) {
        return this.clientError(res, message)
      }
      return this.fail(res, message)
    }
  }
}
