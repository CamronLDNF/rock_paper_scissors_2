function RPS()  {

  // let computerSays = document.getElementById('computer-says');
  // let instruction = document.getElementById('instruction');

  this.determineWinner = (userChoice, computerChoice) => {

    //  scenarios where there is a tie
    if (userChoice === computerChoice) {
        // changeComputerImage(computerChoice);
        // computerSays.innerHTML = '';
        // instruction.innerHTML = 'Play again:';
        // resetGame();
        // userChoice = '';
        return 'It\'s a tie!';
    }

    // scenarios where the player wins
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
    // changeComputerImage(computerChoice);
    // computerSays.innerHTML = '';
    // instruction.innerHTML = 'Play again:';
    // resetGame();
    // userChoice = '';
    return 'You win!';
    };

    // all other scenarios, computer wins per automatic
    // changeComputerImage(computerChoice);
    // computerSays.innerHTML = '';
    // instruction.innerHTML = 'Play again:';
    // resetGame();
    // userChoice = '';
    return 'You lose!';

  }

}