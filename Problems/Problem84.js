let string = 'main.js';

let extension = string.split('.').pop();

console.log(extension);

extension = string.substring(string.indexOf('.')+1,string.length);
console.log(extension);