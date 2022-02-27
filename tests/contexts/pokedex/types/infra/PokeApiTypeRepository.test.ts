import axios from 'axios'
import Type from '../../../../../src/contexts/pokedex/types/domain/Type'
import { TypeRepositoryNotWorkingException } from '../../../../../src/contexts/pokedex/types/domain/TypeRepositoryNotWorkingException'
import PokeApiTypeRepository from '../../../../../src/contexts/pokedex/types/infra/repositories/PokeApiTypeRepository'
import PokemonNameMother from '../domain/PokemonNameMother'

const pokeApiResponse = [
  {
    slot: 1,
    type: {
      name: 'fire',
      url: 'https://pokeapi.co/api/v2/type/10/'
    }
  },
  {
    slot: 2,
    type: {
      name: 'flying',
      url: 'https://pokeapi.co/api/v2/type/3/'
    }
  }
]

const toArrayPokeApi = pokeApiResponse.map((item) => item.type.name)

describe('PokeApiTypeRepository', () => {
  it('should return pokemon types given a name', async () => {
    // Arrange
    const pokemonName = PokemonNameMother.random()
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        types: pokeApiResponse
      }
    })
    const repository = new PokeApiTypeRepository()

    // Act
    const typesResult = await repository.searchByPokemonName(pokemonName)

    // Assert
    const typesArray = typesResult?.elements.map((item: Type) => item.getName().value)

    expect(typesArray).toEqual(toArrayPokeApi)
  })

  it('should return null when api response status code 404', async () => {
    // Arrange
    const pokemonName = PokemonNameMother.random()
    jest.spyOn(axios, 'get').mockRejectedValueOnce({
      response: {
        status: 404
      }
    })
    const repository = new PokeApiTypeRepository()

    // Act
    const typesResult = await repository.searchByPokemonName(pokemonName)

    // Assert
    expect(typesResult).toBeNull()
  })

  it('should throw an exception when the repository is not working', async () => {
    // Arrange
    const pokemonName = PokemonNameMother.random()
    jest.spyOn(axios, 'get').mockRejectedValueOnce({
      response: {
        status: 505
      }
    })
    const repository = new PokeApiTypeRepository()

    // Act
    const expectWrapper = expect(async () => {
      await repository.searchByPokemonName(pokemonName)
    }).rejects

    // Assert
    expectWrapper.toThrow(TypeRepositoryNotWorkingException)
  })
})
