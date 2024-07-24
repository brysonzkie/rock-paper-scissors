//create a game called rock-paper-scissors
//the game will be played users vs computers


//Create a function getComputerChoice that will randomly returns "rock", "paper" and "scissors"

function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomize =  Math.floor(Math.random() * computerChoices.length );
    return computerChoices[randomize];
}

//Create a function getHumanChoice that will let the user choice within the three choices

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


//Create a two new variables named humanScore and computerScore in the global scope
//initialize those variables to 0

let humanScore = 0;
let computerScore = 0;


//Create a function that takes the human and computer player choices as arguments,
//plays a single round, increments the round winner’s score and logs a winner announcement.


//Create a function called playRound that has two parameters: humanChoice and computerChoice
//also this will serve as their first round 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } 
    if (humanChoice.toLowerCase() === 'rock') {
        if (computerChoice === 'scissors'){
            humanScore++;
            return 'You win! Rock beats Scissors';
        } else if (computerChoice === 'paper') {
            computerScore++;
            return 'You lost, Computer wins! Papers beats Rocks';
        }
    }
    if (humanChoice.toLowerCase() === 'paper') {
        if (computerChoice === 'rock'){
            humanScore++;
            return 'You win! Paper beats Rocks';
        } else if (computerChoice ==='scissors') {
            computerScore++;
            return 'You lost, Computer wins! Scissors beats Papers';
        }
    }
    if (humanChoice.toLowerCase() ==='scissors') {
        if (computerChoice === 'paper'){
            humanScore++;
            return 'You win! Scissors beats Paper';
        } else if (computerChoice === 'rock') {
            computerScore++;
            return 'You lost, Computer wins! Rocks beats Scissors';
        }
    }
    return 'Invalid input. Please choose rock, paper, or scissors.';

}



//Write the logic to play the entire game that means 5 rounds 
//Create a function playGame that will call the playRound function to play 5 rounds 
//It should keep track of the scores and declares a winner at the end   

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
    