let string = `I love Javascript
C and C++ is my ex
Java is my new friend`;

let string1 = string.replace(/\n/g,'<br>');
console.log(string1);


let string2 = string.split('\n').join('<br>');

console.log(string2);