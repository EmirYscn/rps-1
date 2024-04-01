let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let ch = Math.floor(Math.random() * 3);
  switch (ch) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "TIE!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else {
    userScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  }
}
function playGame() {
  for (let index = 0; index < 5; index++) {
    let computerChoice = getComputerChoice();
    let userChoice = prompt("Rock, paper or scissors?");
    let result = playRound(userChoice, computerChoice);
    alert(result);
  }
  alert("Game End");
  alert(`Overall score, User: ${userScore}, Computer: ${computerScore}`);

  if (userScore > computerScore) {
    alert("You won");
  } else if (userScore < computerScore) {
    alert("You lost");
  } else {
    alert("Its TIE");
  }
}

playGame();
