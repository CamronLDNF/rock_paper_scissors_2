document.addEventListener('DOMContentLoaded', () => {
  let rPS = new RPS

  let rockBtn = document.getElementById('rock-btn');
  let paperBtn = document.getElementById('paper-btn');
  let scissorsBtn = document.getElementById('scissors-btn');
  let instruction = document.getElementById('instruction');
  
  let computerSays = document.getElementById('computer-says');
  let result = document.getElementById('result');
  let computerImage = document.getElementById('computerimage');

  let computerChoice = rPS.computerChoice

  rockBtn.addEventListener('click',function() {
    result.innerHTML = rPS.determineWinner("rock", computerChoice);
  });

  paperBtn.addEventListener('click', function() {
    result.innerHTML = rPS.determineWinner("paper", computerChoice);
  });

  scissorsBtn.addEventListener('click', function() {
    result.innerHTML = rPs.determineWinner("scissors", computerChoice);
  });

})


document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('button')
  let displayDiv = document.getElementById('display_answer')
  button.addEventListener('click', () => {
    let value = document.getElementById('value').value
    let fizzBuzz = new FizzBuzz
    let result = fizzBuzz.check(value)
    displayDiv.innerHTML = result;
  })
})