let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    return Math.floor(Math.random()* 3);
}

function getHumanChoice() {
let scelta = prompt( "fai la tua scelta: 's' per sasso, 'c' per carta e 'f' per forbice ?")?.toLowerCase();  
    if (scelta == 's') { 
        return 0; 
    } else if ( scelta == 'c' ) { 
        return 1;
    } else if ( scelta == 'f' ) {
        return 2;
    } else {
        return console.log( 'Scelta errata!' );
    } 
}

function playRound ( humanChoice, computerChoice ) {
    if ( humanSelection == computerSelection ) {
        console.log( 'Pareggio!' );
    } else if (( humanSelection == 0 && computerSelection == 2 ) 
        ||     ( humanSelection == 2 && computerSelection == 1 ) 
        ||     ( humanSelection == 1 && computerSelection == 0 )) {
            console.log( 'Hai vinto!' );
            humanScore ++;
    } else {
            console.log( 'Hai perso!' );
            computerScore ++;
    }
}

playRound(humanSelection, computerSelection);

console.log(('Il tuo punteggio:'), humanScore);
console.log(('Punteggio computer:'), computerScore);

