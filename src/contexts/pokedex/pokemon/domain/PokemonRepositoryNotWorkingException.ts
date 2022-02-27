export class PokemonRepositoryNotWorkingException extends Error {
  constructor() {
    super('An error occurred in the pokemon repository')
  }
}
