const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const computerSelection = getComputerChoice();
const computerScore = 0;
const playerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    
}


const game = () => {
    playRound();
}

game()

/*const playerSelection = prompt("Choose either rock, paper or scissors: ").toLowerCase();
    if (playerSelection === computerSelection) {
        alert('Its a tie')
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win')
        playerSelection++;
            }
    else {
        alert('You lose')
        computerScore++;
    }*/