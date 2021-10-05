console.log('guess the number lab')

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.setRange()
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        this.prevGuesses.push(this.getGuess())
        this.render()
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
  },
  getGuess: function() {
    let guess

    do {
      guess = parseInt(
        prompt(
          `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
        )
      )
    } while(
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
    )
    return guess
  },
  setRange: function() {
    do {
      this.smallestNum = parseInt(
        prompt(
          `Enter a number - this will be the low end of the range`
        )
      )
    } while (isNaN(this.smallestNum))
    do {
      this.biggestNum = parseInt(
        prompt(`Enter a number that is ${this.smallestNum + 2} or more. This will be the high end of the range`)
      )
    } while (isNaN(this.biggestNum) || this.biggestNum < this.smallestNum + 2)
  },
  render: function() {
    let msg
    if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
      msg = `Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "guess"}!`
    } else {
      msg = `Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? "high" : "low"} \Previous guesses: ${this.prevGuesses.join(", ")}`
    }
    alert(msg)
  }
}

game.play()