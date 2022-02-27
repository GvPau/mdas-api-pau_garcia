import axios from 'axios'
import PokeApiPokemonRepository from '../../../../../src/contexts/pokedex/pokemon/infra/repositories/PokeApiPokemonRepository'
import IdMother from '../domain/IdMother'
import PokemonMother from '../domain/PokemonMother'
import { PokemonRepositoryNotWorkingException } from '../../../../../src/contexts/pokedex/pokemon/domain/PokemonRepositoryNotWorkingException'

const pokeApiResponse = {
  name: 'Bulbasaur',
  height: 7,
  weight: 69,
  id: 1
}

describe('PokeApiPokemonRepository', () => {
  it('should find a pokemon by id', async () => {
    // Arrange
    const id = IdMother.random()
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: pokeApiResponse
    })

    const repository = new PokeApiPokemonRepository()

    // Act
    const pokemonResult = await repository.find(id)

    // Assert
    expect(pokemonResult).toEqual(
      PokemonMother.create(pokeApiResponse.id, pokeApiResponse.name, pokeApiResponse.height, pokeApiResponse.weight)
    )
  })

  it('should return null when api response status code 404', async () => {
    // Arrange
    const id = IdMother.random()
    jest.spyOn(axios, 'get').mockRejectedValueOnce({
      response: {
        status: 404
      }
    })
    const repository = new PokeApiPokemonRepository()

    // Act
    const pokemonResult = await repository.find(id)

    // Assert
    expect(pokemonResult).toBeNull()
  })

  it('should verify if pokemon exists', async () => {
    // Arrange
    const id = IdMother.random()
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: pokeApiResponse
    })

    const repository = new PokeApiPokemonRepository()

    // Act
    const pokemonResult = await repository.exists(id)

    // Assert
    expect(pokemonResult).toBeTruthy()
  })

  it('should throw an exception when the repository is not working', async () => {
    // Arrange
    const id = IdMother.random()
    jest.spyOn(axios, 'get').mockRejectedValueOnce({
      response: {
        status: 505
      }
    })
    const repository = new PokeApiPokemonRepository()

    // Act
    const expectWrapper = expect(async () => {
      await repository.find(id)
    }).rejects

    // Assert
    expectWrapper.toThrow(PokemonRepositoryNotWorkingException)
  })
})
