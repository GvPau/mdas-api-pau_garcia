import axios, { AxiosError } from 'axios'
import Pokemon from '../../domain/Pokemon'
import Height from '../../domain/Height'
import Id from '../../domain/Id'
import Name from '../../domain/Name'
import PokemonRepository from '../../domain/PokemonRepository'
import { PokemonRepositoryNotWorkingException } from '../../domain/PokemonRepositoryNotWorkingException'
import Weight from '../../domain/Weight'
import FavoriteCounter from '../../domain/FavoriteCounter'
import { FavoritePokemon } from '../../domain/FavoritePokemon'

export default class PokeApiPokemonRepository implements PokemonRepository {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
  private favoritePokemons: FavoritePokemon[] = []

  async find(id: Id) {
    try {
      const response = await axios.get(`${this.baseUrl}${id.value}`)
      const {
        data: { id: pokemonId, name, weight, height }
      } = response

      console.log('antes de pokemon conter: ')
      console.log('pokemon Id: ', pokemonId.value)

      console.log('pokemonId de api: ', pokemonId.value)

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

  saveFavoritePokemon(pokemonId: Id, favoriteCounter: FavoriteCounter): void {
    for (let i = 0; i < this.favoritePokemons.length; i++) {
      if (this.favoritePokemons[i].getPokemonId().value === pokemonId.value) {
        this.favoritePokemons[i].getCounter().increaseByOne()
      }
    }

    const favoritePokemon = FavoritePokemon.create(pokemonId, favoriteCounter)
    if (!this.favoritePokemons.includes(favoritePokemon)) this.favoritePokemons.push(favoritePokemon)
  }

  findFavoritePokemonCounter(pokemonId: number): number {
    console.log('this,favoritePokemons: ', this.favoritePokemons)
    console.log('pokemonid:', pokemonId)

    console.log('antes de buscar el pokemon favorito si existe')
    for (let i = 0; i < this.favoritePokemons.length; i++) {
      console.log('valor de pokemon id en array: ', this.favoritePokemons[i].getPokemonId())

      if (this.favoritePokemons[i].getPokemonId().value === pokemonId) {
        console.log('encuentro el pokemon, devuelo el counter')

        return this.favoritePokemons[i].getCounter().value
      }
    }
    console.log('no encuentro pokemon como favorito')

    return 0
  }
}
