document.addEventListener('DOMContentLoaded', () => {
  let rPS = new RPS

  const gameImage = "src/assets/rps.png"
  const rockImage = "src/assets/rock.png";
  const paperImage = "src/assets/paper.png";
  const scissorsImage = "src/assets/scissors.png";

  let rockBtn = document.getElementById('rock-btn');
  let paperBtn = document.getElementById('paper-btn');
  let scissorsBtn = document.getElementById('scissors-btn');
  
  let result = document.getElementById('result');
  let computerImage = document.getElementById('computerimage');
  let computerSays = document.getElementById('computer-says');
  let instruction = document.getElementById('instruction');

  let computerChoice
  let userChoice


  function changeComputerImage(computerChoice) {
    if(computerChoice === 'rock') {
        computerImage.src = rockImage;
    } else if (computerChoice === 'paper') {
        computerImage.src = paperImage;
    } else if (computerChoice === 'scissors') {
        computerImage.src = scissorsImage;
    }
  }

  function resetGame() {

    computerChoice = '';
    userChoice = '';
    computerSays.innerHTML = '';

    setTimeout(function(){ 
      computerImage.src = gameImage;
      result.innerHTML = '';
      instruction.innerHTML = 'Play again:';
    }, 1500);

  }

  rockBtn.addEventListener('click', function() {
    instruction.innerHTML = ' ';
    userChoice = "rock"
    computerChoice = rPS.getComputerChoice()
    result.innerHTML = rPS.determineWinner(userChoice, computerChoice);
    changeComputerImage(computerChoice);
    resetGame();
  });

  paperBtn.addEventListener('click', function() {
    instruction.innerHTML = ' ';
    userChoice = "paper"
    computerChoice = rPS.getComputerChoice()
    result.innerHTML = rPS.determineWinner(userChoice, computerChoice);
    changeComputerImage(computerChoice);
    resetGame();
  });

  scissorsBtn.addEventListener('click', function() {
    instruction.innerHTML = ' ';
    userChoice = "scissors"
    computerChoice = rPS.getComputerChoice()
    result.innerHTML = rPS.determineWinner(userChoice, computerChoice);
    changeComputerImage(computerChoice);
    resetGame();
  });

})