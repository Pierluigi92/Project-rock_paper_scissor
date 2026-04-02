let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function getComputerChoice() {
    return Math.floor(Math.random()* 3);
}

function getHumanChoice() {
let scelta = prompt("fai la tua scelta: 's' per sasso, 'c' per carta e 'f' per forbice ?")?.toLowerCase();  
if (scelta === 's') { 
    return 0; 
} else if (scelta === 'c') { 
    return 1;
} else if (scelta === 'f') {
    return 2;
} else {
    return 'Scelta errata!';
}
}

function playRound (humanChoice, computerChoice) {
   if (humanChoice == computerChoice ) {
        console.log('Pareggio');
   } else if (( humanChoice == 's' && computerChoice == 'f' ) 
        ||   ( humanChoice == 'f' && computerChoice == 'c') 
        ||   ( humanChoice == 'c' && computerChoice == 's')) {
            console.log('Hai vinto!');
            humanScore = +1;
        } else {
            console.log('Hai perso!');
            computerScore = +1;
        }
}

