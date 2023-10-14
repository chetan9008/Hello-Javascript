let prompt = require('prompt-sync');

let string = 'Are you fucking boy?';

let regex = /u/g;

let newString = string.replace(regex,'I');

let neWString = string.split('u').join('I');
console.log(newString);
console.log(neWString);

