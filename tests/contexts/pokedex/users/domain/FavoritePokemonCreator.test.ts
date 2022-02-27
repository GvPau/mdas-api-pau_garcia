import { FavoritePokemonCreator } from '../../../../../src/contexts/pokedex/users/domain/FavoritePokemonCreator'
import UserMother from '../domain/UserMother'
import FavoritePokemonMother from './FavoritePokemonMother'

describe('FavoritePokemonCreator', () => {
  it('should add a favorite pokemon to user', async () => {
    // Arrange
    const user = UserMother.random()
    const favoritePokemon = FavoritePokemonMother.random()
    const saveSpy = jest.fn()
    const userRepository = jest.fn().mockImplementation(() => ({
      save: saveSpy
    }))

    const favoritePokemonCreator = new FavoritePokemonCreator(userRepository())

    // Act
    await favoritePokemonCreator.execute(user, favoritePokemon)

    // Assert
    expect(saveSpy).toHaveBeenCalledWith(user)
  })
})
