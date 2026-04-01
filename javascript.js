function getComputerChoice() {
    return Math.floor(Math.random()* 3);
}

function getHumanChoice() {
let scelta = prompt("fai la tua scelta: 's' per sasso, 'c' per carta e 'f' per forbice ?");  
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

console.log(getHumanChoice())
