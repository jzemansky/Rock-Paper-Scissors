const prompt = require("prompt-sync")();

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    let computerChoice = '';

    switch(x) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors? ");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

console.log(getPlayerChoice());
console.log(getComputerChoice());