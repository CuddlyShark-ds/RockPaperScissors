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

function playerSelection() {
    let selection = prompt("Please enter: rock, paper or scissors");
    selection.toLocaleLowerCase();

    if(selection === "rock" || selection === "paper" || selection === "scissors"){
        return selection;
    }
    else{
        playerSelection();
    }
}

function game(){
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for(let i = 0; i < rounds; i++) {
        console.log("it's round: " + i);
        let outCome = playRound(getComputerChoice(), playerSelection());

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