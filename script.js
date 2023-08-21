const choices = ["rock", "paper", "scissors"];
const playerTextScore = document.getElementById("playerScore");
const computerTextScore = document.getElementById("computerScore");
const tieGameTextScore = document.getElementById("tieGames");
const resultText = document.getElementById("results");

let maxRounds = 5;
let currentRound = 1;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

playerTextScore.textContent = playerScore;
computerTextScore.textContent = computerScore;

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * choices.length);
    return choices[computerSelection];
}

function playerSelection(choice) {
    let playSelection = choice;
    game(playSelection, getComputerChoice());
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

function game(playerChoice, computerChoice){
    console.log(`player choice: ${playerChoice}, computer choice: ${computerChoice}`);

    let outCome = playRound(getComputerChoice(), playerChoice);

    if(outCome === "win"){
        console.log("You are the winner!");
        playerTextScore.textContent = ++playerScore;
    }
    else if(outCome === "loss"){
        console.log("You've lost!");
        computerTextScore.textContent = ++computerScore;
    }
    else{
        console.log("It's a tie!")
        tieGameTextScore.textContent = `number of games tied: ${++ties}`;
    }

    console.log(currentRound++, maxRounds);
    if(currentRound > maxRounds){
        announceWinner();
        console.log("its winner time")
    }
}

function announceWinner(){
    let winner = Math.max(playerScore, computerScore);
    let loser = Math.min(playerScore, computerScore);
    let winnerContent = document.createElement("p");

    endGame();

    if(playerScore > computerScore){
        winnerContent.textContent = `You've won with a score of:\nwins: ${playerScore}\nlosses: ${computerScore}\nties: ${ties}`;
    }
    else if(computerScore > playerScore){
        winnerContent.textContent = `You've lost with a score of:\nwins: ${playerScore}\nlosses: ${computerScore}\nties: ${ties}`;
    }
    else if(computerScore === playerScore){
        winnerContent.textContent = `It's a Tie game with a score of:\nwins: ${playerScore}\nlosses: ${computerScore}\nties: ${ties}`;
    }
    else{
        winnerContent.textContent = `Error calculating a winner!!!`;
    }

    resultText.appendChild(winnerContent);
}

function endGame(){
    const buttons = document.getElementsByTagName("button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
}
