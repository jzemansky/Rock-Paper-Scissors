function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    let choice = '';

    console.log(x);
    switch(x) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
            break;
    }
    return choice;
}

console.log(getComputerChoice());