function getComputerChoice() {
    let numRand = Math.floor(Math.random()* 3);
    if ( numRand === 0 ) { 
        return 'sasso'; 
    } else if ( numRand === 1 ) { 
        return 'carta';
    } else if ( numRand === 2 ) {
        return 'forbici';
    }
}

function getHumanChoice() {
    let scelta = prompt( "Fai la tua scelta: ' s ' per sasso, ' c ' per carta e ' f ' per forbice ?")?.toLowerCase();  
    if (scelta == 's') { 
        return 'sasso'; 
    } else if ( scelta === 'c' ) { 
        return 'carta';
    } else if ( scelta === 'f' ) {
        return 'forbici';
    } else {     
       alert( "Scelta non valida, inserisci ' s ', ' c ', o ' f '." );
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
        alert( `${humanChoice} e ${computerChoice}, stessa scelta, round pareggiato!\nIl tuo punteggio: ${humanScore}\nPunteggio computer: ${computerScore}` );
    } else if (( humanChoice === 'sasso' && computerChoice === 'forbici' ) 
        ||     ( humanChoice === 'forbici' && computerChoice === 'carta' ) 
        ||     ( humanChoice === 'carta' && computerChoice === 'sasso' )) {
        humanScore ++;
        alert( `Hai vinto il round! ${humanChoice} batte ${computerChoice}\nIl tuo punteggio: ${humanScore}\nPunteggio computer: ${computerScore}` );            
    } else {
        computerScore ++;
        alert( `Hai perso il round! ${computerChoice} batte ${humanChoice}\nIl tuo punteggio: ${humanScore}\nPunteggio computer: ${computerScore}` );
    }
}

if ( humanScore > computerScore) {
    alert( `Hai vinto la partita!\nIl tuo punteggio: ${humanScore}\nPunteggio computer: ${computerScore}` );
} else if ( computerScore > humanScore) {
    alert( `Hai perso la partita!\nIl tuo punteggio: ${humanScore}\nPunteggio computer: ${computerScore}` );
} else 
    alert( `Partita pareggiata!\nIl tuo punteggio: ${humanScore}\nPunteggio computer: ${computerScore}` );
}

playGame();