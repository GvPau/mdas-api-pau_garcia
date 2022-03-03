import GetPokemonById from '../../../../../src/contexts/pokedex/pokemon/application/GetPokemonById'
import PokemonMother from '../domain/PokemonMother'
import IncrementPokemonFavoriteCounter from '../../../../../src/contexts/pokedex/pokemon/application/IncrementPokemonFavoriteCounter'

describe('IncreasePokemonFavoriteCounter', () => {
  it('should increase a pokemon favorite counter', async () => {
    // Arrange
    const pokemon = PokemonMother.random()
    const pokemonFinder = jest.fn().mockImplementation(() => ({
      execute: () => Promise.resolve(pokemon)
    }))

    const executefavoritePokemonCounterIncrementor = jest.fn()
    const favoritePokemonCounterIncrementor = jest.fn().mockImplementation(() => ({
      execute: executefavoritePokemonCounterIncrementor
    }))

    const incrementPokemonFavoriteCounter = new IncrementPokemonFavoriteCounter(
      pokemonFinder(),
      favoritePokemonCounterIncrementor()
    )

    // Act
    await incrementPokemonFavoriteCounter.execute(pokemon.getId().value)

    // Assert
    expect(executefavoritePokemonCounterIncrementor).toHaveBeenCalledWith(pokemon)
  })
})
