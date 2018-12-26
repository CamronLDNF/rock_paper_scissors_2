const { RPS } = require('./spec.helper');

describe('Rock Paper Scissors', () => {
  let rPS = new RPS

  context('Player selects "rock"', () => {
    it('should return "It\'s a tie!" on "rock", "rock"', () => {
        expect(rPS.determineWinner('rock', 'rock')).to.equal('It\'s a tie!');
    });

    it('should return "You lose!" on "rock", "paper"', () => {
        expect(rPS.determineWinner('rock', 'paper')).to.equal('You lose!');
    });

    it('should return "You win!" on "rock", "scissors"', () => {
        expect(rPS.determineWinner('rock', 'scissors')).to.equal('You win!');
    });

})
})

