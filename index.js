//Create a global scope variable for their scores

let humanScore = 0;
let computerScore = 0;



//Create a function that will let the computer randomly choose "rock, paper, scissors"
function getComputerChoice() {
    var choices = ['rock', 'paper','scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
   
}

//Create a function that will let the users choice "rock, paper, scissors"
function getHumanChoice() {
    let userChoice = prompt("Please choice of these three: 'rock, paper, scissors '")

    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice.toLowerCase();
    } 
    else {
        alert("Invalid input. Please choose 'rock', 'paper', or'scissors'.");
        return getHumanChoice();
    }
}


//Create a function that will determine the winner based on the user and computer's choices

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } 
    if (humanChoice.toLowerCase() === 'rock') {
        if (computerChoice === 'scissors'){
            humanScore++;
            return 'You win!';
        } else if (computerChoice === 'paper') {
            computerScore++;
            return 'You lost, Computer wins';
        }
    }
    if (humanChoice.toLowerCase() === 'paper') {
        if (computerChoice === 'rock'){
            humanScore++;
            return 'You win!';
        } else if (computerChoice ==='scissors') {
            computerScore++;
            return 'You lost, Computer wins';
        }
    }
    if (humanChoice.toLowerCase() ==='scissors') {
        if (computerChoice === 'paper'){
            humanScore++;
            return 'You win!';
        } else if (computerChoice === 'rock') {
            computerScore++;
            return 'You lost, Computer wins';
        }
    }
    return 'Invalid input. Please choose rock, paper, or scissors.';

}

//Create a function that will play the game for 5 rounds

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(`Round ${i+1}: You chose ${humanChoice}, Computer chose ${computerChoice}. ${result}`);
    }
    console.log(`Final Score: Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
    