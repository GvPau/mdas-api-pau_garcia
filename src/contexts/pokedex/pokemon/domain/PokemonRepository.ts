import Pokemon from './Pokemon'
import Id from './Id'

export default interface PokemonRepository {
  find: (userId: Id) => Promise<Pokemon | null>
  exists: (userId: Id) => Promise<boolean>
}
