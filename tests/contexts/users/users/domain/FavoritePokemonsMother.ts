import { FavoritePokemons } from '../../../../../src/contexts/users/users/domain/FavoritePokemons'
import FavoritePokemonMother from './FavoritePokemonMother'

export default class FavoritePokemonsMother {
  static create() {
    return new FavoritePokemons()
  }

  static random() {
    return new FavoritePokemons([FavoritePokemonMother.random(), FavoritePokemonMother.random()])
  }
}
