function computerPlay() {
    // returns a random number between 0 and 2
    return Math.floor(Math.random() * 3);
}

// function get input from the player and returns the value between 0 and 2
function playerPlay(input) {
    input = input.toLowerCase();
    if (input == "rock") {
        return 0;
    } else if (input == "paper") {
        return 1;
    } else if (input == "scissors") {
        return 2;
    } else {
        console.log("invalid input");
    }
    
}

// Compares the values of the functions, logs a message and returns a number between -1 and 1
// 1 = player wins the round, 0 = tie, -1 = computer wins the round
function playRound(input) {
    playerSelection = playerPlay(input);
    computerSelection = computerPlay();
    playerSelectionDiv.textContent = "You chose " + playerSelection + ".";
    computerSelectionDiv.textContent = "The computer chose " + computerSelection + "."
    // 0 beats 2, 1 beats 0, 2 beats 1
    if (playerSelection == 0 && computerSelection == 0) {
        resultDiv.textContent = "It's a tie!";
        return 0;
    } else if (playerSelection == 0 && computerSelection == 1) {
        resultDiv.textContent = "You lose! Paper beats rock.";
        return -1;
    } else if (playerSelection == 0 && computerSelection == 2) {
        resultDiv.textContent = "You win! Rock beats scissors.";
        return 1;
    } else if (playerSelection == 1 && computerSelection == 0) {
        resultDiv.textContent = "You win! Paper beats rock.";
        return 1;
    } else if (playerSelection == 1 && computerSelection == 1) {
        resultDiv.textContent = "It's a tie!";
        return 0;
    } else if (playerSelection == 1 && computerSelection == 2) {
        resultDiv.textContent = "You lose! Scisccors beat paper.";
        return -1;
    } else if (playerSelection == 2 && computerSelection == 0) {
        resultDiv.textContent = "You lose! Rock beats scissors.";
        return -1;
    } else if (playerSelection == 2 && computerSelection == 1) {
        resultDiv.textContent = "You win! Scisssors beat paper.";
        return 1;
    } else if (playerSelection == 2 && computerSelection == 2) {
        resultDiv.textContent = "It's a tie!";
        return 0;
    }
}

/*// plays best of x games
function game(bestOfNo) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < bestOfNo; i++) {
        roundResult = playRound()

        if (roundResult == 1) {
            playerScore++;
        } else if (roundResult == -1) {
            computerScore++;
        } else {
            i--;
        }
        console.log("You vs Computer - " + playerScore + ":" + computerScore);

        if (playerScore == 3) {
            console.log("You win the game!")
            break;
        } else if (computerScore == 3) {
            console.log("You lose the game!")
            break;
        }
    }

}  */

function resultCalc(inputButton) {
    roundResult = playRound(inputButton);
    if (roundResult == 1) {
        playerScore++;
    } else if (roundResult == -1) {
        computerScore++;   
    } else {
        return;
    }
    playerRunningScoreDiv.textContent = "Player: " + playerScore;
    computerRunningScoreDiv.textContent = "Computer: " + computerScore;
    printDivs();

}

function printDivs() {
    if (playerScore < 5 && computerScore < 5) {
        container.appendChild(computerRunningScoreDiv);
        container.appendChild(playerRunningScoreDiv)
        container.appendChild(playerSelectionDiv);
        container.appendChild(computerSelectionDiv);
        container.appendChild(resultDiv);
    } else if (playerScore == 5) {
        container.removeChild(computerRunningScoreDiv);
        container.removeChild(playerRunningScoreDiv)
        container.removeChild(playerSelectionDiv);
        container.removeChild(computerSelectionDiv);
        container.removeChild(resultDiv);
        endResult.textContent = "YOU WIN!"
        container.appendChild(endResult);
        playerScore = 0
        computerScore = 0
    } else if (computerScore == 5) {
        container.removeChild(computerRunningScoreDiv);
        container.removeChild(playerRunningScoreDiv)
        container.removeChild(playerSelectionDiv);
        container.removeChild(computerSelectionDiv);
        container.removeChild(resultDiv);
        endResult.textContent = "YOU LOSE!"
        container.appendChild(endResult);
        playerScore = 0
        computerScore = 0
    } 
    
}

let playerScore = 0;
let computerScore = 0;



const container = document.querySelector('#resultContainer');
const playerSelectionDiv = document.createElement('p');
const computerSelectionDiv = document.createElement('p');
const resultDiv = document.createElement('p');
const playerRunningScoreDiv = document.createElement('p');
const computerRunningScoreDiv = document.createElement('p');
const endResult = document.createElement('h1');

playerRunningScoreDiv.textContent = "Player: " + playerScore;
computerRunningScoreDiv.textContent = "Computer: " + computerScore;


const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', function (e) {
    resultCalc("rock");
    });

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', function (e) {
    resultCalc("paper");
    
    });

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', function (e) {
    resultCalc("scissors");
    });

printDivs();



