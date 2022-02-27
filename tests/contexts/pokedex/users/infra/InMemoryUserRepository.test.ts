import { InMemoryUserRepository } from '../../../../../src/contexts/pokedex/users/infra/repositories/InMemoryUserRepository'
import UserMother from '../domain/UserMother'

describe('InMemoryUserRepository', () => {
  it('should save a user', async () => {
    // Arrange
    const user = UserMother.random()
    const repository = new InMemoryUserRepository()

    // Act
    await repository.save(user)

    // Assert
    const userFinded = await repository.find(user.getId())
    expect(userFinded).toBeDefined()
  })

  it('should find a user', async () => {
    // Arrange
    const user = UserMother.random()
    const repository = new InMemoryUserRepository()
    await repository.save(user)

    // Act
    const userFinded = repository.find(user.getId())

    // Assert
    expect(userFinded).toBeDefined()
  })

  it('should verify if user exists', async () => {
    // Arrange
    const user = UserMother.random()
    const repository = new InMemoryUserRepository()
    await repository.save(user)

    // Act
    const result = repository.exists(user.getId())

    // Assert
    expect(result).toBeTruthy()
  })
})
