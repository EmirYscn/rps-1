let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  if (index === 0) {
    return "rock";
  } else if (index === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let message;

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      message = "tie!";
    } else if (computerSelection === "paper") {
      message = "You lose, paper beat rock";
      computerScore++;
    } else {
      message = "You won, rock beat scissors";
      userScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      message = "tie";
    } else if (computerSelection === "rock") {
      message = "You won, paper beat rock";
      userScore++;
    } else {
      message = "You lose, scissors beat paper";
      computerScore++;
    }
  } else {
    if (computerSelection === "scissors") {
      message = "tie!";
    } else if (computerSelection === "paper") {
      message = "You won, scissors beat paper";
      userScore++;
    } else {
      message = "You lose, rock beat scissors";
      computerScore++;
    }
  }
  return message;
}
function playGame() {
  for (let index = 0; index < 5; index++) {
    let computerChoice = getComputerChoice();
    let userChoice = prompt("Rock, paper or scissors?");
    let result = playRound(userChoice, computerChoice);
    alert(result);
    alert(
      `Your choice was ${userChoice}, computer choice was ${computerChoice}`
    );
  }
}

playGame();
alert(`Your score is ${userScore}, computer score is ${computerScore}`);
