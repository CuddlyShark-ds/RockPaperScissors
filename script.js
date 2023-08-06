const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * choices.length);
    return choices[computerSelection];
}

function playRound(computerSelection, playerSelection) {
    switch(playerSelection) {
        case "rock":
            if(computerSelection === "rock"){
                return "tie";
            }
            else if(computerSelection === "paper"){
                return "loss";
            }
            else{
                return "win";
            }
            break;
        case "paper":
            if(computerSelection === "rock"){
                return "win";
            }
            else if(computerSelection === "paper"){
                return "tie";
            }
            else{
                return "loss";
            }
            break;
        case "scissors":
            if(computerSelection === "rock"){
                return "loss";
            }
            else if(computerSelection === "paper"){
                return "win";
            }
            else{
                return "tie";
            }
            break;
        default:
            break;
    }
}

function game(){
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for(let i = 0; i < rounds; i++) {
        console.log("it's round: " + i);
        let playerSelection = prompt("Please enter: rock, paper or scissors");
        let outCome = playRound(getComputerChoice(), playerSelection.toLocaleLowerCase());

        if(outCome === "win"){
            console.log("You are the winner!");
            playerScore++;
        }
        else if(outCome === "loss"){
            console.log("You've lost!");
            computerScore++;
        }
        else{
            console.log("It's a tie!")
            ties++;
        }
    }
    console.log(`The final score is you \n won: ${playerScore} rounds \n lost: ${computerScore} rounds \n tied: ${ties} rounds`)
}

game();