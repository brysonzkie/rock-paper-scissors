//Create a function that will the user choice with "rock, paper, scissors"


function getComputerChoice() {
    var choices = ['rock', 'paper','scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
   
}

console.log(getHumanChoice());