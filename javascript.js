let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let numRand = Math.floor(Math.random()* 3);
        if ( numRand == 0 ) { 
        return 'sasso'; 
    } else if ( numRand == 1 ) { 
        return 'carta';
    } else if ( numRand == 2 ) {
        return 'forbici';
    }
}

function getHumanChoice() {
let scelta = prompt( "fai la tua scelta: ' s ' per sasso, ' c ' per carta e ' f ' per forbice ?")?.toLowerCase();  
    if (scelta == 's') { 
        return 'sasso'; 
    } else if ( scelta == 'c' ) { 
        return 'carta';
    } else if ( scelta == 'f' ) {
        return 'forbici';
    }
}

function playRound ( humanChoice, computerChoice ) {
    if ( humanChoice == computerChoice ) {
    } else if (( humanChoice == 'sasso' && computerChoice == 2 ) 
        ||     ( humanChoice == 'forbici' && computerChoice == 1 ) 
        ||     ( humanChoice == 'carta' && computerChoice == 0 )) {
        humanScore ++;            
    } else {
        computerScore ++;
    }
}

function playGame () {
    for ( let round = 0; round < 5; round++ ) { 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
}
  
if ( humanScore > computerScore) {
    console.log('Hai vinto la partita!');
} else if ( computerScore > humanScore) {
    console.log('Hai perso la partita!');
} else 
    console.log('Partita pareggiata!');
}
playGame();