export class PokemonNotFoundException extends Error {
  constructor(value: number) {
    super(`Pokemon ${value} does not exists`)
  }
}
