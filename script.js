const choices = ["rock", "paper", "scissors"];
const playerSelection = "paper";

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * choices.length);
    return choices[computerSelection];
}

function playRound(computerSelection, playerSelection) {
    switch(playerSelection) {
        case "rock":
            if(computerSelection === "rock"){
                console.log("It's a tie")
            }
            else if(computerSelection === "paper"){
                console.log("You loose!");
            }
            else{
                console.log("You win!");
            }
            console.log("computer: " + computerSelection);
            console.log("player: " + playerSelection);
            break;
        case "paper":
            if(computerSelection === "rock"){
                console.log("You win!")
            }
            else if(computerSelection === "paper"){
                console.log("It's a tie!");
            }
            else{
                console.log("You loose!");
            }
            console.log("computer: " + computerSelection);
            console.log("player: " + playerSelection);
            break;
        case "scissors":
            if(computerSelection === "rock"){
                console.log("You loose!")
            }
            else if(computerSelection === "paper"){
                console.log("You win!");
            }
            else{
                console.log("It's a tie!");
            }
            console.log("computer: " + computerSelection);
            console.log("player: " + playerSelection);
            break;
        default:
            break;
    }
}

playRound(getComputerChoice(), playerSelection);