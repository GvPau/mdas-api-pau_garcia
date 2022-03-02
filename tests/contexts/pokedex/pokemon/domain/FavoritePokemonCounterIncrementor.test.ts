import FavoritePokemonCounterIncrementor from '../../../../../src/contexts/pokedex/pokemon/domain/FavoritePokemonCounterIncrementor'
import PokemonMother from './PokemonMother'

describe('FavoritePokemonCounterIncrementor', () => {
  it('should increase a pokemon favorite counter', async () => {
    // Arrange
    const pokemon = PokemonMother.random()
    const saveFavoritePokemonSpy = jest.fn()
    const pokemonRepository = jest.fn().mockImplementation(() => ({
      saveFavoritePokemon: saveFavoritePokemonSpy
    }))

    const favoritePokemonCounterIncrementor = new FavoritePokemonCounterIncrementor(pokemonRepository())

    // Act
    await favoritePokemonCounterIncrementor.execute(pokemon)

    // Assert
    expect(saveFavoritePokemonSpy).toHaveBeenCalledWith(pokemon)
  })
})
