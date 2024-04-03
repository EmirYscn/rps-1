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

  const user_score = document.querySelector(".user-score");
  const computer_score = document.querySelector(".computer-score");

  if (playerSelection === computerSelection) {
    userScore++;
    computerScore++;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
  } else {
    userScore++;
  }
  user_score.textContent = `You: ${userScore}`;
  computer_score.textContent = `Computer: ${computerScore}`;
  console.log(userScore);
  console.log(computerScore);
}
function haveWinner() {
  return userScore === 5 || computerScore === 5;
}
function checkWinner() {
  if (userScore > computerScore) {
    return "user";
  } else {
    return "computer";
  }
}
function endGame() {
  let winner = checkWinner();
  createEndGameModal(winner);
}

function playGame(choice) {
  playRound(choice, getComputerChoice());
  if (haveWinner()) {
    endGame();
  }
}
function restartGame() {
  location.reload();
}

function createEndGameModal(winner) {
  const div = document.createElement("div");
  const divSub = document.createElement("div");
  const divSubMessage = document.createElement("p");
  const button = document.createElement("button");
  button.style.cssText =
    "width: 80px; height: 50px; border-radius: 10px; background-color: #053e56; color: white;";
  button.textContent = "Play Again";
  div.style.cssText = "width; 300px";
  divSub.style.cssText = "font-size: 80px;";
  divSubMessage.style.cssText =
    "color: white; font-size: 22px; font-weight: bold;";
  if (winner === "user") {
    divSub.textContent = "👤";
    divSubMessage.textContent = "You Won!";
  } else {
    divSub.textContent = "🤖";
    divSubMessage.textContent = "You Lost!";
  }
  const scoresContainer = document.querySelector(".scores-container");
  while (scoresContainer.firstChild) {
    scoresContainer.removeChild(scoresContainer.firstChild);
  }

  scoresContainer.appendChild(div);
  div.appendChild(divSub);
  divSub.appendChild(divSubMessage);
  div.appendChild(button);

  button.addEventListener("click", restartGame);
}

const btnRock = document.querySelector(".rock");
btnRock.addEventListener("click", () => {
  console.log("rock");
  playGame("rock");
  //createDiv(result);
});

const btnPaper = document.querySelector(".paper");
btnPaper.addEventListener("click", () => {
  console.log("paper");
  playGame("paper");
  //createDiv(result);
});

const btnScissors = document.querySelector(".scissors");
btnScissors.addEventListener("click", () => {
  console.log("scissors");
  playGame("scissors");
  //createDiv(result);
});
