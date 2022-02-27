import GetPokemonType from '../../../../../src/contexts/pokedex/types/application/GetPokemonType'
import TypesMother from '../domain/TypesMother'
import Types from '../../../../../src/contexts/pokedex/types/domain/Types'

describe('GetPokemonType', () => {
  it('should return pokemon types given a name', async () => {
    // Arrange
    const types = TypesMother.random()
    const pokemonTypeSearcher = jest.fn().mockImplementation(() => ({
      execute: () => Promise.resolve(types)
    }))
    const getPokemonType = new GetPokemonType(pokemonTypeSearcher())

    // Act
    const typesResult = await getPokemonType.execute('example')

    // Assert
    const toArray = (list: Types) => list.elements.map((item) => item.getName().value)
    expect(toArray(typesResult)).toEqual(toArray(types))
  })
})
