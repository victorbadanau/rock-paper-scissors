let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const player = document.querySelector(".player-score");
player.textContent = `${playerScore}`;

const computer = document.querySelector(".computer-score");
computer.textContent = `${computerScore}`;

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener('click', () => {

    computerSelection = getComputerChoice();
    playerSelection = button.value;
    playGame();
  });
});

const resultsDiv = document.querySelector("div.results");
const resultList = document.createElement("ul");

const message1 = document.createElement("h1");
message1.textContent = "You Win!";

const message2 = document.createElement("h1");
message2.textContent = "You Lose!";

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
    }

function playRound() {
    if (playerSelection === computerSelection) {
        listItem = document.createElement('li');
        listItem.textContent = "That's a Tie!";
        resultList.appendChild(listItem);
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
         (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
        listItem = document.createElement('li');
        listItem.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
        resultList.appendChild(listItem);
        playerScore++;
    }
    else {
        listItem = document.createElement('li');
        listItem.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        resultList.appendChild(listItem);
        computerScore++;
    }
}

function playGame() {
    playRound();
    player.textContent = `${playerScore}`;
    computer.textContent = `${computerScore}`;
    resultsDiv.appendChild(resultList);
    message1.remove();
    message2.remove();

    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        player.textContent = `${playerScore}`;
        computer.textContent = `${computerScore}`;
        removeAllChildNodes(resultList);
        resultList.remove();
        resultsDiv.appendChild(message1);        
    }
    else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        player.textContent = `${playerScore}`;
        computer.textContent = `${computerScore}`;
        removeAllChildNodes(resultList);
        resultList.remove();
        resultsDiv.appendChild(message2);  
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}