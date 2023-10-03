const prompt = require('prompt-sync')();

let character = prompt('Enter the character : ');

let charCode = character.charCodeAt();

let codePoint = character.codePointAt();
console.log(`Code is ${charCode}`);
console.log(`Code is ${codePoint}`);

