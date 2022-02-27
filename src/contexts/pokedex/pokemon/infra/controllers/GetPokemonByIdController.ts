import { BaseController } from '../../../../shared/infra/controllers/BaseController'
import { Request, Response } from 'express'
import GetPokemonById from '../../application/GetPokemonById'
import { PokemonRepositoryNotWorkingException } from '../../domain/PokemonRepositoryNotWorkingException'
import { PokemonNotFoundException } from '../../domain/PokemonNotFoundException'

export default class GetPokemonByIdController extends BaseController {
  private useCase: GetPokemonById

  constructor(useCase: GetPokemonById) {
    super()
    this.useCase = useCase
  }

  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params
      const pokemon = await this.useCase.execute(parseInt(id))

      const pokemonValues: any = {}
      Object.keys(pokemon).forEach((key) => {
        pokemonValues[key] = (pokemon as any)[key].value
      })

      const result = { pokemon: pokemonValues }
      return this.ok(res, result)
    } catch (err: any) {
      const message = err.message
      if (err instanceof PokemonRepositoryNotWorkingException) {
        return this.serviceUnavailable(res, message)
      }
      if (err instanceof PokemonNotFoundException) {
        return this.notFound(res, message)
      }
      return this.fail(res, message)
    }
  }
}
