import Id from '../../../../../src/contexts/pokedex/pokemon/domain/Id'
import Pokemon from '../../../../../src/contexts/pokedex/pokemon/domain/Pokemon'
import PokemonRepository from '../../../../../src/contexts/pokedex/pokemon/domain/PokemonRepository'
import PokemonMother from '../domain/PokemonMother'

export default class StubPokemonRepository implements PokemonRepository {
  private pokemonId = 1

  async find(id: Id) {
    return id.value === this.pokemonId ? Promise.resolve(PokemonMother.fromBulbasaur()) : null
  }

  async exists(id: Id) {
    return Promise.resolve(id.value === this.pokemonId)
  }

  saveFavoritePokemon(pokemon: Pokemon): void {}
}
