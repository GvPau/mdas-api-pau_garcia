import { PokemonTypesNotFoundException } from '../../../../../src/contexts/pokedex/types/domain/PokemonTypesNotFoundException'
import PokemonTypeSearcher from '../../../../../src/contexts/pokedex/types/domain/PokemonTypeSearcher'
import TypesMother from '../domain/TypesMother'
import Types from '../../../../../src/contexts/pokedex/types/domain/Types'
import TypeNameMother from './TypeNameMother'

describe('PokemonTypeSearcher', () => {
  it('should return pokemon types given a name', async () => {
    // Arrange
    const types = TypesMother.random()
    const name = TypeNameMother.ramdom()
    const repository = jest.fn().mockImplementation(() => ({
      searchByPokemonName: () => {
        return types
      }
    }))
    const pokemonTypeSearcher = new PokemonTypeSearcher(repository())

    // Act
    const typesResult = await pokemonTypeSearcher.execute(name)

    // Assert
    const toArray = (list: Types) => list.elements.map((item) => item.getName().value)
    expect(toArray(typesResult)).toEqual(toArray(types))
  })

  it('should throw an exception when pokemon does not have types', async () => {
    // Arrange
    const name = TypeNameMother.ramdom()
    const repository = jest.fn().mockImplementation(() => ({
      searchByPokemonName: () => {
        return null
      }
    }))
    const pokemonTypeSearcher = new PokemonTypeSearcher(repository())

    // Act
    const expectWrapper = expect(async () => {
      await pokemonTypeSearcher.execute(name)
    }).rejects

    // Assert
    expectWrapper.toThrow(PokemonTypesNotFoundException)
  })
})
