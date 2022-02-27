import PokemonName from './PokemonName'
import Types from './Types'

export default interface TypeRepository {
  searchByPokemonName: (name: PokemonName) => Promise<Types | null>
}
