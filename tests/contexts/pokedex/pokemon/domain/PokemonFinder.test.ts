import PokemonFinder from '../../../../../src/contexts/pokedex/pokemon/domain/PokemonFinder'
import { PokemonNotFoundException } from '../../../../../src/contexts/pokedex/pokemon/domain/PokemonNotFoundException'
import PokemonMother from './PokemonMother'

describe('PokemonFinder', () => {
  it('should return a pokemon', async () => {
    // Arrange
    const pokemon = PokemonMother.random()
    const pokemonRepository = jest.fn().mockImplementation(() => ({
      find: () => {
        return Promise.resolve(pokemon)
      },
      exists: () => {
        return true
      }
    }))

    const pokemonFinder = new PokemonFinder(pokemonRepository())

    // Act
    const result = await pokemonFinder.execute(pokemon.getId())

    // Assert
    expect(result).toEqual(pokemon)
  })

  it('should throw an exception when pokemon was not found', async () => {
    // Arrange
    const pokemon = PokemonMother.random()

    const pokemonRepository = jest.fn().mockImplementation(() => ({
      find: () => {
        return null
      },
      exists: () => {
        return false
      }
    }))

    const pokemonFinder = new PokemonFinder(pokemonRepository())

    // Act
    const expectWrapper = expect(async () => {
      await pokemonFinder.execute(pokemon.getId())
    }).rejects

    // Assert
    expectWrapper.toThrow(PokemonNotFoundException)
  })
})
