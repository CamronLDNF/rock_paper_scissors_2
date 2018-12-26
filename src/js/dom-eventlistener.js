document.addEventListener('DOMContentLoaded', () => {
  let rPS = new RPS

  let rockBtn = document.getElementById('rock-btn');
  let paperBtn = document.getElementById('paper-btn');
  let scissorsBtn = document.getElementById('scissors-btn');
  let instruction = document.getElementById('instruction');
  
  let computerSays = document.getElementById('computer-says');
  let result = document.getElementById('result');
  let computerImage = document.getElementById('computerimage');

  let computerChoice = getComputerChoice()
  let userChoice

  function getComputerChoice() {
      number = Math.floor(Math.random()*2)
      switch (number) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';}
  }

  rockBtn.addEventListener('click', function() {
    debugger;
    userChoice = "rock"
    result.innerHTML = rPS.determineWinner(userChoice, computerChoice);
    resetGame();
  });

  paperBtn.addEventListener('click', function() {
    result.innerHTML = rPS.determineWinner("paper", computerChoice);
    resetGame();
  });

  scissorsBtn.addEventListener('click', function() {
    result.innerHTML = rPS.determineWinner("scissors", computerChoice);
    resetGame();
  });

  function resetGame() {
    setTimeout(function(){ 
    // computerImage.src = gameImage;
    computerChoice = '';
    userChoice = '';
    computerSays.innerHTML = '';
    instruction.innerHTML = 'Play again:';
    }, 1500);
  }

})