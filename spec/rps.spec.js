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

  context('Player selects "paper"', () => {
    it('should return "It\'s a tie!" on "paper", "paper"', () => {
        expect(rPS.determineWinner('paper', 'paper')).to.equal('It\'s a tie!');
    });

    it('should return "You lose!" on "paper", "scissors"', () => {
        expect(rPS.determineWinner('paper', 'scissors')).to.equal('You lose!');
    });

    it('should return "You win!" on "paper", "rock"', () => {
        expect(rPS.determineWinner('paper', 'rock')).to.equal('You win!');
    });
  })

  context('Player selects "scissors"', () => {
    it('should return "It\'s a tie!" on "scissors", "scissors"', () => {
        expect(rPS.determineWinner('scissors', 'scissors')).to.equal('It\'s a tie!');
    });

    it('should return "You lose!" on "scissors", "rock"', () => {
        expect(rPS.determineWinner('scissors', 'rock')).to.equal('You lose!');
    });

    it('should return "You win!" on "scissors", "paper"', () => {
        expect(rPS.determineWinner('scissors', 'paper')).to.equal('You win!');
    });
  })

})

