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

let humanScore = 0, computerScore = 0;