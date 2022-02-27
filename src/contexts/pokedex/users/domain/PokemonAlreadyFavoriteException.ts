export class PokemonAlreadyFavoriteException extends Error {
  constructor(value: number) {
    super(`Pokemon ${value} is already favorite`)
  }
}
