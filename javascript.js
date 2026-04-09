function getComputerChoice() {
    let numRand = Math.floor(Math.random()* 3);
    if ( numRand === 0 ) { 
        return 'rock'; 
    } else if ( numRand === 1 ) { 
        return 'paper';
    } else if ( numRand === 2 ) {
        return 'scissor';
    }
}

function getHumanChoice() {
    let scelta = prompt( "Take your pick: ' R ' for rock, ' P ' for paper, and ' S ' for scissors." )?.toLowerCase();  
    if (scelta == 's') { 
        return 'rock'; 
    } else if ( scelta === 'c' ) { 
        return 'paper';
    } else if ( scelta === 'f' ) {
        return 'scissor';
    } else {     
       alert( "Invalid choice, enter ' R ', ' P ', or ' S '." );
       return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame () {
    for ( let round = 0; round < 5; round++ ) { 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
function playRound ( humanChoice, computerChoice ) {
    if ( humanChoice == computerChoice ) {
        alert( `${humanChoice} and ${computerChoice}. Same choice, round tied!\nYour score: ${humanScore}\nComputer score: ${computerScore}` );
    } else if (( humanChoice === 'rock' && computerChoice === 'scissor' ) 
        ||     ( humanChoice === 'scissor' && computerChoice === 'paper' ) 
        ||     ( humanChoice === 'paper' && computerChoice === 'rock' )) {
        humanScore ++;
        alert( `You won the round! ${humanChoice} beats ${computerChoice}.\nYour score: ${humanScore}\nComputer score: ${computerScore}` );            
    } else {
        computerScore ++;
        alert( `You lost the round! ${computerChoice} beats ${humanChoice}.\nYour score : ${humanScore}\nComputer score: ${computerScore}` );
    }
}

if ( humanScore > computerScore) {
    alert( `You won the game!\nYour score: ${humanScore}\nComputer score: ${computerScore}` );
} else if ( computerScore > humanScore) {
    alert( `You lost the game!\nYour score: ${humanScore}\nComputer score: ${computerScore}` );
} else 
    alert( `Drawn game!\nYour score: ${humanScore}\nComputer score: ${computerScore}` );
}

playGame();
