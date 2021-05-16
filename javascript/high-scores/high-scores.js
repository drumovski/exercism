export class HighScores {
  constructor(scoresArray) {
    this.scoresArray = scoresArray
  }

  get scores() {
    return this.scoresArray
  }

  get latest() {
    return this.scoresArray[this.scoresArray.length -1]
  }

  get personalBest() {
    return Math.max(...this.scoresArray)
  }

  get personalTopThree() {
    return this.scoresArray.sort((a,b) => b - a).slice(0,3)
  }
}
