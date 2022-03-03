/* eslint-disable camelcase */
import { BaseController } from '../../../../shared/infra/controllers/BaseController'
import { Request, Response } from 'express'
import { CreateUser } from '../../application/CreateUser'
import { UserAlreadyExistException } from '../../domain/UserAlreadyExistException'
import { UuidNotValidException } from '../../../../shared/domain/UuidNotValidException'

export default class CreateUserController extends BaseController {
  private useCase: CreateUser

  constructor(useCase: CreateUser) {
    super()
    this.useCase = useCase
  }

  async execute(req: Request, res: Response) {
    try {
      const { userName, userId } = req.body
      await this.useCase.execute(userId, userName)

      return this.created(res)
    } catch (err: any) {
      const message = err.message
      if (err instanceof UserAlreadyExistException) {
        return this.conflict(res, message)
      }
      if (err instanceof UuidNotValidException) {
        return this.clientError(res, message)
      }
      return this.fail(res, message)
    }
  }
}
