document.addEventListener('DOMContentLoaded', () => {
  let rPS = new RPS

  let rockBtn = document.getElementById('rock-btn');
  let paperBtn = document.getElementById('paper-btn');
  let scissorsBtn = document.getElementById('scissors-btn');
  // let instruction = document.getElementById('instruction');
  
  // let computerSays = document.getElementById('computer-says');
  let result = document.getElementById('result');
  let computerImage = document.getElementById('computerimage');

  let computerChoice
  let userChoice

  rockBtn.addEventListener('click', function() {
    userChoice = "rock"
    computerChoice = rPS.getComputerChoice()
    result.innerHTML = rPS.determineWinner(userChoice, computerChoice);
    rPS.resetGame();
  });

  paperBtn.addEventListener('click', function() {
    userChoice = "paper"
    computerChoice = rPS.getComputerChoice()
    result.innerHTML = rPS.determineWinner(userChoice, computerChoice);
    rPS.resetGame();
  });

  scissorsBtn.addEventListener('click', function() {
    userChoice = "scissors"
    computerChoice = rPS.getComputerChoice()
    result.innerHTML = rPS.determineWinner(userChoice, computerChoice);
    rPS.resetGame();
  });

})