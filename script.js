// return random "rock", "paper", or "scissors"
function computerPlay(){
    let random = Math.random();
    if(random < .33333){
        return "rock";
    }else if(random < .66666){
        return "paper";
    }else{
        return "scissors";
    }
}
//plays one round and declares winner or loser
function playRound(){
    let userChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    let computerChoice = computerPlay();
    let msg = "You chose " + userChoice + ". The computer chose " + computerChoice + ". ";
    //winner: 0=tie, 1=player, 2=computer
    let winner = 1;
    if(userChoice == computerChoice){
        winner = 0;
    }else if(userChoice == "rock"){
        if(computerChoice == "paper"){
            winner = 2;
        }
    }else if(userChoice == "paper"){
        if(computerChoice == "scissors"){
            winner = 2;
        }
    }else if(userChoice=="scissors" || userChoice == "scissor"){
        if(computerChoice == "rock"){
            winner = 2;
        }
    }else{
        console.log("Invalid Input");
        return playRound();
    }
    if(winner == 0){
        msg+="It's a tie."
    }else if(winner == 1){
        msg+="You win"
    }else{
        msg+="You lose"
    }
    console.log(msg);
    return winner;
}

function game(){
    let firstGame = true;
    let roundsPlayed = 0;
    let wins = 0;
    let losses = 0;
    let ties = 0;
    while(firstGame || playAgain()){
        firstGame=false;
        let result = playRound();
        if(result == 1){
            wins++;
        }else if(result == 2){
            losses++;
        }else{
            ties++;
        }
    }
    console.log("Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties);
    if(wins > losses){
        console.log("You won game")
    }else if(wins < losses){
        console.log("You lost game")
    }else{
        console.log("You tied game")
    }
}
//returns true or false whether to play again
function playAgain(){
    let answer = prompt("Do you want to play again? (yes or no)").toLowerCase();
    if(answer == "yes"){
        return true;
    }else if(answer == "no"){
        return false;
    }else{
        return playAgain();
    }
}

game();