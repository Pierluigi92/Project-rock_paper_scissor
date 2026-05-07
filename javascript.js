let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const buttons = document.querySelectorAll(".button");
const risultati = document.querySelector(".risultati");
const finalResult = document.querySelector(".final-result");
const newTextGame = document.querySelector(".new-text");

function getComputerChoice() {
    let numRand = Math.floor(Math.random()* 3);
    if ( numRand === 0 ) { 
        return 'rock'; 
    } else if ( numRand === 1 ) { 
        return 'paper';
    } else {
        return 'scissor';
    }
};

buttons.forEach( button => {
    button.addEventListener('click', () => {
        risultati.textContent = "";
        finalResult.textContent = "";
        newTextGame.innerText = "";
        if ( humanScore < 5 && computerScore < 5 ) {
            const humanSelection = button.getAttribute("data-scelta")
            const computerSelection = getComputerChoice();
            currentRound++;
            playRound(humanSelection, computerSelection);
        } if ( humanScore === 5 || computerScore === 5 ) {
            winner();
        }
    });
});
    
function playRound ( humanChoice, computerChoice ) {
    const h = cap(humanChoice);
    const c = cap(computerChoice);
    if ( humanChoice == computerChoice ) {
        risultati.innerText = ( `${h} and ${c}. Same choice, round tied!
            Your score: ${humanScore}
            Computer score: ${computerScore}
            Round: ${currentRound}` );
    } else if (( humanChoice === 'rock' && computerChoice === 'scissor' ) 
        ||     ( humanChoice === 'scissor' && computerChoice === 'paper' ) 
        ||     ( humanChoice === 'paper' && computerChoice === 'rock' )) {
        humanScore ++;
        risultati.innerText = ( `You won the round! ${h} beats ${c}.
            Your score: ${humanScore}
            Computer score: ${computerScore}
            Round: ${currentRound}` );            
    } else {
        computerScore ++;
        risultati.innerText = ( `You lost the round! ${c} beats ${h}.
        Your score : ${humanScore}
        Computer score: ${computerScore}
        Round: ${currentRound}` );
    }
};

function winner() { 
    if ( humanScore > computerScore) {
        finalResult.innerText=( `You won the game!
            Your score: ${humanScore}
            Computer score: ${computerScore}` );
            newTextGame.innerText="Make a choice to start a new game";
    } else {
        finalResult.innerText=( `You lost the game!
            Your score: ${humanScore}
            Computer score: ${computerScore}` );
            newTextGame.innerText="Make a choice to start a new game.";
    }
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
};
