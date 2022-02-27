import MotherCreator from './MotherCreator'

export default class NumberMother {
  static random() {
    return MotherCreator.random().datatype.number()
  }
}
