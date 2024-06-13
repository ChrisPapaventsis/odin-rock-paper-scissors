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

function getHumanChoice() {
    const choice = prompt("Rock, Paper, Scissors, Shoot!");
    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        console.log("Incorrect Input! You can choose from: rock, paper, or scissors.")
        getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    let humanSelection, computerSelection;
    function playRound(computerChoice, humanChoice) {
        if (computerChoice == "rock" && humanChoice == "paper") {
            console.log("You win! Paper beats Rock.");
            humanScore ++;
        } else if (computerChoice == "rock" && humanChoice == "scissors") {
            console.log("You lose! Rock beats Scissors.");
            computerScore ++;
        } else if (computerChoice == "paper" && humanChoice == "rock") {
            console.log("You lose! Paper beats Rock.");
            computerScore ++;
        } else if (computerChoice == "paper" && humanChoice == "scissors") {
            console.log("You win! Scissors beats Paper.");
            humanScore ++;
        } else if (computerChoice == "scissors" && humanChoice == "rock") {
            console.log("You win! Rock  beats Scissors.");
            humanScore ++;
        } else if (computerChoice == "scissors" && humanChoice == "paper") {
            console.log("You lose! Scissors beats Paper.");
            computerScore ++;
        }
    }

    for (let i = 1; i < 6; i++) {
        humanSelection = getHumanChoice(), computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        console.log("Round " + i + " result:");
        console.log("You: " + humanScore);
        console.log("CPU: " + computerScore);
    }
}

playGame();