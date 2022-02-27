import Types from '../../domain/Types'

export default class PokemonTypeJsonConverter {
  static execute(types: Types) {
    return types.elements.map((item) => item.getName().value)
  }
}
