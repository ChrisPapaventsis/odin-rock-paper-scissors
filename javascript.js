// create the UI
const container = document.querySelector("#container");

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => playRound(getComputerChoice(), "rock"));
container.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => playRound(getComputerChoice(), "paper"));
container.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", () => playRound(getComputerChoice(), "scissors"));
container.appendChild(scissorsButton);

const displayBox = document.createElement("div");
displayBox.textContent = "Click a button to play rock paper scissors!";
container.appendChild(displayBox);

const scoreBox = document.createElement("div");
scoreBox.textContent = "Human: 0 | Computer: 0";
container.appendChild(scoreBox);

// variables initialization
let humanScore = 0, computerScore = 0;

// computer choice function
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// round logic
function playRound(computerChoice, humanChoice) {
    if (computerChoice == "rock" && humanChoice == "paper") {
        displayBox.textContent = "You win! Paper beats Rock.";
        humanScore++;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        displayBox.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        displayBox.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        displayBox.textContent = "You win! Scissors beats Paper.";
        humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        displayBox.textContent = "You win! Rock beats Scissors.";
        humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        displayBox.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
    } else {
        displayBox.textContent = "It's a tie!";
    }

    updateScore();
    checkWinner();
}

// update the score display
function updateScore() {
    scoreBox.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

// check if there is a winner
function checkWinner() {
    if (humanScore === 5) {
        displayBox.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        displayBox.textContent = "Sorry, you lost the game. Try again!";
        disableButtons();
    }
}

// disable buttons when game is over
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}