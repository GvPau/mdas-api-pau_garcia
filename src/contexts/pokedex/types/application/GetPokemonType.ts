import PokemonTypeSearcher from '../domain/PokemonTypeSearcher'
import PokemonName from '../domain/PokemonName'

export default class GetPokemonType {
  private pokemonTypeSearcher: PokemonTypeSearcher

  constructor(PokemonTypeSearcher: PokemonTypeSearcher) {
    this.pokemonTypeSearcher = PokemonTypeSearcher
  }

  async execute(name: string) {
    return await this.pokemonTypeSearcher.execute(new PokemonName(name))
  }
}
