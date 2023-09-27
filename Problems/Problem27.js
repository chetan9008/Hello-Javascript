const prompt = require('prompt-sync')();

let computerGuess = Math.floor(Math.random() * 10 + 1);
console.log(computerGuess);

let guess = prompt('Guess the number from  1 to 10 : ');

let counter = 0;
while (guess != computerGuess) {
    counter++;
    guess = prompt('Guess the number from  1 to 10 : ');
}
console.log(`You take ${counter} time to guess\n Computer number is ${computerGuess}`);
