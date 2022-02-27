import FavoritePokemonMother from './FavoritePokemonMother'
import { PokemonAlreadyFavoriteException } from '../../../../../src/contexts/pokedex/users/domain/PokemonAlreadyFavoriteException'
import { FavoritePokemons } from '../../../../../src/contexts/pokedex/users/domain/FavoritePokemons'

describe('FavoritePokemon', () => {
  it('should throw an exception when pokemon is already favorite', async () => {
    // Arrange
    const favoritePokemon = FavoritePokemonMother.random()
    const favoritePokemons = new FavoritePokemons()

    // Act
    const expectWrapper = expect(async () => {
      favoritePokemons.add(favoritePokemon)
      favoritePokemons.add(favoritePokemon)
    }).rejects

    // Assert
    expectWrapper.toThrow(PokemonAlreadyFavoriteException)
  })
})
