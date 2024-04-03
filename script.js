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

  const user_score = document.getElementById("user-score");
  const computer_score = document.getElementById("computer-score");

  if (playerSelection === computerSelection) {
    alert("TIE!");
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    alert(`You lose, ${computerSelection} beats ${playerSelection}`);
  } else {
    userScore++;
    alert(`You win, ${playerSelection} beats ${computerSelection}`);
  }
  user_score.textContent = `User Score: ${userScore}`;
  computer_score.textContent = `Computer Score: ${computerScore}`;
  console.log(userScore);
  console.log(computerScore);
}
function haveWinner() {
  return userScore === 5 || computerScore === 5;
}
function checkWinner() {
  if (userScore > computerScore) {
    alert("You won");
  } else {
    alert("You lost");
  }
  alert("GAME END");
}

function playGame(choice) {
  playRound(choice, getComputerChoice());
  if (userScore === 5 || computerScore === 5) {
    checkWinner();
  }
}

function createDiv(result) {
  const div = document.createElement("div");
  div.textContent = result;
  body.appendChild(div);
}

const btnRock = document.getElementById("rock");
btnRock.addEventListener("click", () => {
  console.log("rock");
  playGame("rock");
  //createDiv(result);
});

const btnPaper = document.getElementById("paper");
btnPaper.addEventListener("click", () => {
  console.log("paper");
  playGame("paper");
  //createDiv(result);
});

const btnScissors = document.getElementById("scissors");
btnScissors.addEventListener("click", () => {
  console.log("scissors");
  playGame("scissors");
  //createDiv(result);
});
