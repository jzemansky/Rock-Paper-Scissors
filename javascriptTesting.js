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
    console.log('Computer: ' + computerChoice)
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = '';
    while (true) {
        playerChoice = prompt("Rock, paper, or scissors? ");
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            return playerChoice;
        } else {
            console.log('You need to choose rock, paper, or scissors.')
        }
    }
}

function playRound(playerChoice, computerChoice) {
    let tie = 0;
    let win = 1;
    let lose = -1;

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return win;
        } else if (computerChoice === 'paper') {
            return lose;
        } else {
            return tie;
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return win;
        } else if (computerChoice === 'scissors') {
            return lose;
        } else {
            return tie;
        }
    } else {
        if (computerChoice === 'paper') {
            return win;
        } else if (computerChoice === 'rock') {
            return lose;
        } else {
            return tie;
        }
    }
}

function playGame() {
    let score = 0;
    console.log('You will play 5 rounds, best of luck!');
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i + 1));
        score += playRound(getPlayerChoice(), getComputerChoice());
    }

    if (score > 0) {
        console.log('You win!');
    } else if (score = 0) {
        console.log('You tied!');
    } else {
        console.log('You lost, better luck next time!');
    }
}

playGame();
