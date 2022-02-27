import Height from '../../../../../src/contexts/pokedex/pokemon/domain/Height'
import Id from '../../../../../src/contexts/pokedex/pokemon/domain/Id'
import Pokemon from '../../../../../src/contexts/pokedex/pokemon/domain/Pokemon'
import HeightMother from './HeightMother'
import IdMother from './IdMother'
import NameMother from './NameMother'
import WeightMother from './WeightMother'

export default class PokemonMother {
  static create(id: number, name: string, height: number, weight: number) {
    return new Pokemon(
      IdMother.create(id),
      NameMother.create(name),
      HeightMother.create(height),
      WeightMother.create(weight)
    )
  }

  static random() {
    return new Pokemon(IdMother.random(), NameMother.random(), HeightMother.random(), WeightMother.random())
  }

  static fromBulbasaur() {
    return new Pokemon(
      IdMother.create(1),
      NameMother.create('Bulbasaur'),
      HeightMother.create(7),
      WeightMother.create(69)
    )
  }
}
