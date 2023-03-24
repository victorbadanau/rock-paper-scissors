const options = ["Rock", "Paper", "Scissors"]
// Function to get a random computer choice from the above array
function getComputerChoice(){
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}
//Function to check the winner of one round of the game
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
        return "player";
        }
    else {
        return "computer"
    }
}
//Function to display a message with the result of the round played
function playRound (playerSelection, computerSelection) {
    const result = checkWinner (playerSelection, computerSelection);
    if (result === "tie") {
        return "That's a Tie!";
    }
    else if (result === "player") {
        return `You Win! ${playerSelection} beats ${computerSelection}!`; 
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}
//Function to get the player choice through a prompt window
function getPlayerChoice() {
    let validInput = false;
    while (validInput === false) {
        const playerChoice = prompt("Rock Paper Scissors! Make your choice! Your life depends on it!");
        if (playerChoice === null) {
            continue;
        }
        const playerChoiceCorrected = playerChoice.charAt(0).toUpperCase()+playerChoice.toLowerCase().slice(1);
        //the above line formats the player input so that it corresponds to the option array formatting
        if (options.includes(playerChoiceCorrected)) {
            validInput = true;
            return playerChoiceCorrected;
        }
    }
}

//Function to play the game 5 times and print the results to the console
function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome to the Rock Paper Scissors game!");
    console.log("----------"); // puts some delimitation between the welcoming message and the printed results
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------"); // puts some delimitation between played round results
        if (checkWinner(playerSelection, computerSelection) === "player") {
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) === "computer") {
            computerScore++;
        }
    }
    console.log("Game Over!");
   if (playerScore > computerScore) {
    console.log("You won the game!");
   }
   else if (computerScore > playerScore) {
    console.log("You lost the game!");
   }
   else {
    console.log("It's a Tie!")
   }
}

game()