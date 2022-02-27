import { CreateUser } from '../../../../../src/contexts/pokedex/users/application/CreateUser'
import UserMother from '../domain/UserMother'

describe('CreateNewUser', () => {
  it('should create a user', async () => {
    // Arrange
    const user = UserMother.random()
    const executeSpy = jest.fn()
    const userCreator = jest.fn().mockImplementation(() => ({
      execute: executeSpy
    }))
    const createUser = new CreateUser(userCreator())

    // Act
    await createUser.execute(user.getId().value, user.getName().value)

    // Assert
    expect(executeSpy).toHaveBeenCalledWith(user)
  })
})
