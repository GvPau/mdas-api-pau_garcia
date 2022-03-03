import FavoritePokemonCounterIncrementor from '../domain/FavoritePokemonCounterIncrementor'
import Id from '../domain/Id'
import PokemonFinder from '../domain/PokemonFinder'

export default class IncrementPokemonFavoriteCounter {
  private pokemonFinder: PokemonFinder
  private favoritePokemonCounterIncrementor: FavoritePokemonCounterIncrementor

  constructor(pokemonFinder: PokemonFinder, favoritePokemonCounterIncrementor: FavoritePokemonCounterIncrementor) {
    this.pokemonFinder = pokemonFinder
    this.favoritePokemonCounterIncrementor = favoritePokemonCounterIncrementor
  }

  async execute(pokemonId: number) {
    const pokemon = await this.pokemonFinder.execute(new Id(pokemonId))
    await this.favoritePokemonCounterIncrementor.execute(pokemon)
  }
}
