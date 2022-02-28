import Pokemon from './Pokemon'
import Id from './Id'
import FavoriteCounter from './FavoriteCounter'

export default interface PokemonRepository {
  find: (userId: Id) => Promise<Pokemon | null>
  exists: (userId: Id) => Promise<boolean>
  saveFavoritePokemon(pokemonId: Id, favoriteCounter: FavoriteCounter): void
}
