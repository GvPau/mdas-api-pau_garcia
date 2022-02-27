export class PokemonTypesNotFoundException extends Error {
  constructor(value: string) {
    super(`Pokemon ${value} does not have types`)
  }
}
