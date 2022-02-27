import MotherCreator from './MotherCreator'

export default class WordMother {
  static random() {
    return MotherCreator.random().lorem.word()
  }
}
