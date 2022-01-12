let score = document.querySelector('#score').innerHTML;
let scoreboard = document.querySelector('.score-board');
const computerScore = document.querySelector('#computer');
let scoreboard_computer = document.querySelector('.score-board-computer');
let computer = document.querySelector('#computer').innerHTML;
const resetGame = document.querySelector('#reset');
const playarea = document.querySelector('.playarea');
let player_choice = document.querySelector('#player_choice');
let  computer_choice = document.querySelector('#computer_choice');
const playagainBtn = document.querySelector('#playAgain')
const result_table = document.querySelector('.result-table');
let message = document.querySelector('#message');
const player = document.querySelector('#player');
const computer_pick = document.querySelector('#computerPick');


// getting playerchoice by ID
function getPlayerChoice(e) {
     if (e.target.id) {
        const getIdOfChoice = e.target.id;
         player_choice = getIdOfChoice;
    }
}
// getting ComputerChoice by generating a random number from 1 to 3
function getComputerChoice() {
    const generateRand = Math.floor(Math.random() * 3);
    if (generateRand === 0) {
        computer_choice = 'Paper';
    } else if (generateRand === 1) {
        computer_choice = 'Rock';
    } else if (generateRand === 2) {
        computer_choice = 'Scissors';
    }
}

// getting the winner by what the player selected and what the computer selected
function getWinner() {
    if (player_choice == 'Rock' && computer_choice == 'Scissors') {
        message.innerHTML = 'Player Wins';
        score++;
    }
    else if (player_choice == 'Paper' && computer_choice == 'Rock') {
        message.innerHTML = 'Player Wins';
        score++;
    }
    else if (player_choice == 'Scissors' && computer_choice == 'Paper') {
        message.innerHTML = 'Player Wins';
        score++;
    }
    else if (player_choice == 'Rock' && computer_choice == 'Paper') {
        message.innerHTML = 'Computer Wins';
        computer++; ''
    }
    else if (player_choice == 'Paper' && computer_choice == 'Scissors') {
        message.innerHTML = 'Computer Wins';
        computer++;
    } else if (player_choice == 'Scissors' && computer_choice == 'Rock') {
        message.innerHTML = 'Computer Wins';
        computer++;
    } else {
        message.innerHTML = 'Draw';
    }
    scoreboard.innerHTML = `<p>Player Score: ${score}</p>`;
    scoreboard_computer.innerHTML = `<p>Computer Score: ${computer}`;
}

// reseting the scoreboard at the top if player wants to reset game
function resetScore() {
    score = 0;
    computer = 0;
    scoreboard_computer.innerHTML = `<p>Computer Score: ${computer}</p>`;
    scoreboard.innerHTML = `<p>Player Score: ${score}</p>`;
}
// displaying the player selected and what the computer selected
function displayResults() {
  result_table.style.display = 'flex';
    player.innerHTML = player_choice;
    computer_pick.innerHTML = computer_choice;
}
// if player clicks on play again button the window will close
function playAgain() {
    result_table.style.display = 'none';
 }

// function that setups everything above
function clickChoice(e) {
    getPlayerChoice(e);
    getComputerChoice();
    getWinner();
    displayResults();
}
    
// event listeners
playarea.addEventListener('click', clickChoice);
playagainBtn.addEventListener('click', playAgain);
resetGame.addEventListener('click', resetScore);