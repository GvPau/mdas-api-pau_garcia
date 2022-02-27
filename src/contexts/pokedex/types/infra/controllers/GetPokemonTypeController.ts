import { BaseController } from '../../../../shared/infra/controllers/BaseController'
import { Request, Response } from 'express'
import GetPokemonType from '../../application/GetPokemonType'
import { TypeRepositoryNotWorkingException } from '../../domain/TypeRepositoryNotWorkingException'
import PokemonTypeJsonConverter from '../services/PokemonTypeJsonConverter'
import { PokemonTypesNotFoundException } from '../../domain/PokemonTypesNotFoundException'

export default class GetPokemonTypeController extends BaseController {
  private useCase: GetPokemonType

  constructor(useCase: GetPokemonType) {
    super()
    this.useCase = useCase
  }

  async execute(req: Request, res: Response) {
    try {
      const { name } = req.query
      const types = await this.useCase.execute(name as string)

      return this.ok(res, PokemonTypeJsonConverter.execute(types))
    } catch (err: any) {
      const message = err.message
      if (err instanceof TypeRepositoryNotWorkingException) {
        return this.serviceUnavailable(res, message)
      }
      if (err instanceof PokemonTypesNotFoundException) {
        return this.notFound(res, message)
      }
      return this.fail(res, message)
    }
  }
}
