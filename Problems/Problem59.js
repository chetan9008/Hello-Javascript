let string = 'javascript';

let regex = /a/g;

string2 = string.replace(regex,'A');

console.log(string2);

let string1 = string.split('a').join('A');

console.log(string1);