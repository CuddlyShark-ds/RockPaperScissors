const choices = ["rock", "paper", "scissors"];
const playerSelection = "paper";

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * choices.length);
    return choices[computerSelection];
}

console.log(getComputerChoice());