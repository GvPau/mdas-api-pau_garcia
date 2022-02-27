import axios, { AxiosError } from 'axios'
import PokemonName from '../../domain/PokemonName'
import Type from '../../domain/Type'
import TypeName from '../../domain/TypeName'
import TypeRepository from '../../domain/TypeRepository'
import { TypeRepositoryNotWorkingException } from '../../domain/TypeRepositoryNotWorkingException'
import Types from '../../domain/Types'

export default class PokeApiTypeRepository implements TypeRepository {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  async searchByPokemonName(name: PokemonName) {
    try {
      const response = await axios.get(`${this.baseUrl}${name.value}`)
      const { data } = response

      return new Types(
        data.types.map((item: any) => {
          return new Type(new TypeName(item.type.name))
        })
      )
    } catch (ex) {
      const error = (ex as AxiosError).response
      if (error && error.status === 404) {
        return null
      }
      throw new TypeRepositoryNotWorkingException()
    }
  }
}
