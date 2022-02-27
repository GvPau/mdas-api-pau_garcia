import UserFinder from '../../../../../src/contexts/pokedex/users/domain/UserFinder'
import { UserNotFoundException } from '../../../../../src/contexts/pokedex/users/domain/UserNotFoundException'
import UserMother from './UserMother'

describe('UserFinder', () => {
  it('should find a user', async () => {
    // Arrange
    const user = UserMother.random()
    const userRepository = jest.fn().mockImplementation(() => ({
      find: () => {
        return Promise.resolve(user)
      },
      exists: () => {
        return true
      }
    }))

    const userFinder = new UserFinder(userRepository())

    // Act
    const result = await userFinder.execute(user.getId())

    // Assert
    expect(result).toEqual(user)
  })

  it('should throw an exception when user does not exist', async () => {
    // Arrange
    const user = UserMother.random()

    const userRepository = jest.fn().mockImplementation(() => ({
      find: () => {
        return null
      },
      exists: () => {
        return false
      }
    }))

    const userFinder = new UserFinder(userRepository())

    // Act
    const expectWrapper = expect(async () => {
      await userFinder.execute(user.getId())
    }).rejects

    // Assert
    expectWrapper.toThrow(UserNotFoundException)
  })
})
