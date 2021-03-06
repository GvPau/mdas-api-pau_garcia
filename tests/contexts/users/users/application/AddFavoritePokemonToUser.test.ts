import { AddFavoritePokemonToUser } from '../../../../../src/contexts/users/users/application/AddFavoritePokemonToUser'
import Uuid from '../../../../../src/contexts/shared/domain/Uuid'
import { UuidNotValidException } from '../../../../../src/contexts/shared/domain/UuidNotValidException'
import FavoritePokemonMother from '../domain/FavoritePokemonMother'
import UserMother from '../domain/UserMother'
import { MockEventBus } from '../infra/bus/MockEventBus'

describe('AddFavoritePokemonToUser', () => {
  it('should add a favorite pokemon to a user', async () => {
    // Arrange
    const userId = Uuid.random()
    const pokemonId = 1
    const user = UserMother.random()
    const favoritePokemon = FavoritePokemonMother.create(pokemonId)

    const userFinder = jest.fn().mockImplementation(() => ({
      execute: () => Promise.resolve(user)
    }))

    const executeCreatorSpy = jest.fn()
    const favoritePokemonCreator = jest.fn().mockImplementation(() => ({
      execute: executeCreatorSpy
    }))

    const eventBus = new MockEventBus()

    const addFavoritePokemonToUser = new AddFavoritePokemonToUser(userFinder(), favoritePokemonCreator(), eventBus)

    // Act
    await addFavoritePokemonToUser.execute(userId.value, pokemonId)

    // Assert
    expect(executeCreatorSpy).toHaveBeenCalledWith(user, favoritePokemon)
  })

  it('should throw an exception when user id is not valid', async () => {
    // Arrange
    const userId = 'not_valid'
    const pokemonId = 1
    const user = UserMother.random()

    const userFinder = jest.fn().mockImplementation(() => ({
      execute: () => Promise.resolve(user)
    }))

    const favoritePokemonCreator = jest.fn().mockImplementation(() => ({
      execute: jest.fn()
    }))

    const eventBus = new MockEventBus()

    const addFavoritePokemonToUser = new AddFavoritePokemonToUser(userFinder(), favoritePokemonCreator(), eventBus)

    // Act
    const expectWrapper = expect(async () => {
      await addFavoritePokemonToUser.execute(userId, pokemonId)
    }).rejects

    // Assert
    expectWrapper.toThrow(UuidNotValidException)
  })
})
