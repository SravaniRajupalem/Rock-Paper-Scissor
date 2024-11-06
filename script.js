let playerScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

// Function to handle the game logic
function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(playerChoice, computerChoice);

    // Display the results
    document.getElementById('result').innerHTML = `
        You chose <strong>${playerChoice}</strong><br>
        Computer chose <strong>${computerChoice}</strong><br>
        ${resultMessage}
    `;
    
    // Update the score
    document.getElementById('score').innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Event listeners for the player's choices
document.getElementById('rock').addEventListener('click', () => play('rock'));
document.getElementById('paper').addEventListener('click', () => play('paper'));
document.getElementById('scissors').addEventListener('click', () => play('scissors'));
