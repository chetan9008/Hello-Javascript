let string = '           Hello Java          ';

result = string.trim();
console.log(result);

let regEx = /^\s+|\s+$/g;

anotherResult = string.replace(regEx,'');

console.log(anotherResult);