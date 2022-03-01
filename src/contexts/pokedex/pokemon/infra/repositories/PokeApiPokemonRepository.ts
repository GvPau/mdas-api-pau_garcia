import axios, { AxiosError } from 'axios'
import Pokemon from '../../domain/Pokemon'
import Height from '../../domain/Height'
import Id from '../../domain/Id'
import Name from '../../domain/Name'
import PokemonRepository from '../../domain/PokemonRepository'
import { PokemonRepositoryNotWorkingException } from '../../domain/PokemonRepositoryNotWorkingException'
import Weight from '../../domain/Weight'
import FavoriteCounter from '../../domain/FavoriteCounter'

export default class PokeApiPokemonRepository implements PokemonRepository {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
  private favoritePokemons: Map<number, Pokemon> = new Map()

  async find(id: Id) {
    try {
      const response = await axios.get(`${this.baseUrl}${id.value}`)
      console.log('response: ', response)

      const {
        data: { id: pokemonId, name, weight, height }
      } = response

      console.log('antes de pokemon conter: ')
      console.log('pokemon Id: ', pokemonId)

      console.log('pokemonId de api: ', pokemonId)

      const pokemonCounter = this.findFavoritePokemonCounter(pokemonId)
      console.log('pokemon counter: ', pokemonCounter)

      return Pokemon.create(
        new Id(pokemonId),
        new Name(name),
        new Height(height),
        new Weight(weight),
        new FavoriteCounter(pokemonCounter)
      )
    } catch (ex) {
      const error = (ex as AxiosError).response
      if (error && error.status === 404) {
        return null
      }
      throw new PokemonRepositoryNotWorkingException()
    }
  }

  async exists(id: Id) {
    return (await this.find(id)) !== null
  }

  saveFavoritePokemon(pokemon: Pokemon): void {
    console.log('entro en save favorite pokemon')

    if (this.favoritePokemons.has(pokemon.getId().value)) {
      console.log('entro en update de pokemon')
      this.favoritePokemons.set(pokemon.getId().value, pokemon)
    } else {
      console.log('guardo pokemon')

      this.favoritePokemons.set(pokemon.getId().value, pokemon)
    }
  }

  findFavoritePokemonCounter(pokemonId: number): number {
    console.log('entro en findFavoritePOkemon')
    console.log('favorite pokemons: ', this.favoritePokemons)

    if (this.favoritePokemons.size > 0) {
      const pokemon = this.favoritePokemons.get(pokemonId)
      console.log('pokemon en find favorite: ', pokemon)

      if (!pokemon) {
        return 0
      }
      return pokemon.getFavoriteCounter().value
    }
    return 0
  }
}
