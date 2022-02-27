import GetPokemonById from '../../../../../src/contexts/pokedex/pokemon/application/GetPokemonById'
import PokemonMother from '../domain/PokemonMother'

describe('GetPokemonById', () => {
  it('should return a pokemon', async () => {
    // Arrange
    const pokemon = PokemonMother.random()
    const pokemonFinder = jest.fn().mockImplementation(() => ({
      execute: () => Promise.resolve(pokemon)
    }))

    const getPokemonById = new GetPokemonById(pokemonFinder())

    // Act
    const result = await getPokemonById.execute(pokemon.getId().value)

    // Assert
    expect(result).toEqual(pokemon)
  })
})
