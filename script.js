const rockImg = document.createElement('img');
const paperImg = document.createElement('img');
const scissorsImg = document.createElement('img');
const vsImg = document.createElement('img');

rockImg.setAttribute('src', 'images/rock.png')
paperImg.setAttribute('src', 'images/paper.png')
scissorsImg.setAttribute('src', 'images/scissors.png')
vsImg.setAttribute('src', 'images/versus.png');
vsImg.setAttribute('style', 'width: 130px')

const container = document.querySelector('.container');
const buttonContainer = document.querySelector('.buttonContainer');
const playButton = document.querySelector('.playButton');
const endgameButton = document.createElement('button');
endgameButton.classList.add('endButton');
endgameButton.textContent = "End Game";

const rockButton = document.createElement('button');
rockButton.classList.add('choice');
rockButton.textContent = "Rock";
const paperButton = document.createElement('button');
paperButton.classList.add('choice');
paperButton.textContent = "Paper";
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('choice');
scissorsButton.textContent = "Scissors";

const images = document.createElement('div');
rockImg.setAttribute('style', `width: ${rockButton.offsetWidth}px;`);
paperImg.setAttribute('style', `width: ${paperButton.offsetWidth}px;`);
scissorsImg.setAttribute('style', `width: ${scissorsButton.offsetWidth}px;`);
images.classList.add('images');
container.insertBefore(images, buttonContainer);

const computerMove = document.createElement('div');
const playerMove = document.createElement('div');
const computerMoveText = document.createElement('p');
computerMoveText.textContent = "Computer Move:";
const playerMoveText = document.createElement('p');
playerMoveText.textContent = "Player Move:";
const move1 = document.createElement('p');
const move2 = document.createElement('p');
computerMove.appendChild(computerMoveText);
computerMove.appendChild(move1);
playerMove.appendChild(playerMoveText);
playerMove.appendChild(move2);

const results = document.createElement('div');
results.classList.add('results');
const resultsText = document.createElement('p');
container.insertBefore(results, buttonContainer);

const info = document.createElement('div');
info.classList.add('info');
const infoText = document.createElement('p');
info.appendChild(infoText);
container.appendChild(info)

function setImgAttributes(){
    rockImg.setAttribute('style', `width: ${rockButton.offsetWidth}px;`);
    paperImg.setAttribute('style', `width: ${paperButton.offsetWidth}px;`);
    scissorsImg.setAttribute('style', `width: ${scissorsButton.offsetWidth}px;`);
}
// For end Screen
function refactorImgAttributes(){
    rockImg.setAttribute('style', `width: ${paperButton.offsetWidth}px;`);
    scissorsImg.setAttribute('style', `width: ${paperButton.offsetWidth}px;`);
}
toGameScreen()
// toGameEnd("rock", "scissors", "YEE");
function toGameScreen(){
    info.innerText = "Pick rock, paper or scissors!"
    results.innerHTML = "";
    buttonContainer.innerHTML = "";
    buttonContainer.appendChild(rockButton);
    buttonContainer.appendChild(paperButton);
    buttonContainer.appendChild(scissorsButton);
    setImgAttributes();
    images.innerHTML = "";
    images.appendChild(rockImg);
    images.appendChild(paperImg);
    images.appendChild(scissorsImg);
}
function toGameEnd(computerChoice, playerChoice, resultMsg){
    refactorImgAttributes()
    info.innerHTML = "";
    buttonContainer.innerHTML = "";
    images.innerHTML = "";
    move1.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);
    move2.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1);
    images.appendChild(computerMove);
    images.appendChild(returnImg(computerChoice));
    images.appendChild(vsImg);
    images.appendChild(returnImg(playerChoice));
    images.appendChild(playerMove);
    resultsText.textContent = resultMsg;
    results.appendChild(resultsText);
    playButton.textContent = "Play Again!";
    buttonContainer.appendChild(playButton);
    results.setAttribute('style', `width: ${playButton.offsetWidth * 2}px;`);
}

function returnImg(move){
    if(move == "rock"){
        if(rockImg.offsetWidth>0){
            const temp = document.createElement('img');
            temp.setAttribute('src', 'images/rock.png')
            temp.setAttribute('style', `width: ${rockImg.offsetWidth}px;`);
            return temp;
        }
        return rockImg;
    }else if(move == "paper"){
        if(paperImg.offsetWidth>0){
            const temp = document.createElement('img');
            temp.setAttribute('src', 'images/paper.png')
            temp.setAttribute('style', `width: ${paperImg.offsetWidth}px;`);
            return temp;
        }
        return paperImg;
    }else{
        if(scissorsImg.offsetWidth>0){
            const temp = document.createElement('img');
            temp.setAttribute('src', 'images/scissors.png')
            temp.setAttribute('style', `width: ${scissorsImg.offsetWidth}px;`);
            return temp;
        }
        return scissorsImg;
    }
}

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
function playRound(userChoice){
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
        msg+="You win!"
    }else{
        msg+="You lose!"
    }
    toGameEnd(computerChoice, userChoice, msg);
    return winner;
}

playButton.addEventListener('click', toGameScreen);
rockButton.addEventListener('click', ()=>{
    playRound('rock');
})
paperButton.addEventListener('click', ()=>{
    playRound('paper');
})
scissorsButton.addEventListener('click', ()=>{
    playRound('scissors');
})