import { UserAlreadyExistException } from '../../../../../src/contexts/pokedex/users/domain/UserAlreadyExistException'
import UserCreator from '../../../../../src/contexts/pokedex/users/domain/UserCreator'
import UserMother from '../domain/UserMother'

describe('UserCreator', () => {
  it('should save a user', async () => {
    // Arrange
    const user = UserMother.random()
    const saveSpy = jest.fn()
    const repository = jest.fn().mockImplementation(() => ({
      exists: () => {
        return false
      },
      save: saveSpy
    }))
    const createUser = new UserCreator(repository())

    // Act
    await createUser.execute(user)

    // Assert
    expect(saveSpy).toHaveBeenCalled()
  })

  it('should throw an exception when user already exist', async () => {
    // Arrange
    const user = UserMother.random()
    const repository = jest.fn().mockImplementation(() => ({
      save: () => {},
      exists: () => {
        return true
      }
    }))
    const createUser = new UserCreator(repository())

    // Act
    const expectWrapper = expect(async () => {
      await createUser.execute(user)
    }).rejects

    // Assert
    expectWrapper.toThrow(UserAlreadyExistException)
  })
})
