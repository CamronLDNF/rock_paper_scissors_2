document.addEventListener('DOMContentLoaded', () => {
  let rPS = new RPS

  let rockDiv = document.getElementById('rock');
  let paperDiv = document.getElementById('paper');
  let scissorsDiv = document.getElementById('scissors');
  let instruction = document.getElementById('instruction');
  
  let computerSays = document.getElementById('computer-says');
  let result = document.getElementById('result');
  let computerImage = document.getElementById('computerimage');

  let computerChoice = rPS.computerChoice

  rockDiv.addEventListener('click',function() {
    result.innerHTML = rPS.determineWinner("rock", computerChoice);
  });

  // paperDiv.addEventListener('click', function() {
  // result.innerHTML = determineWinner("paper", computerChoice);
  // });

  // scissorsDiv.addEventListener('click', function() {
  // result.innerHTML = determineWinner("scissors", computerChoice);
  // });

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