// Special Squence 

let string = "India The";

let reg = /The\b/;

console.log(string.match(reg));


string = "India The";

reg = /\BThe/;

console.log(string.match(reg));


string = "123";
string = "java1";

reg = /\d/;

console.log(string.match(reg));


string = "123";

reg = /\D/;

console.log(string.match(reg));


string = 'Javascript Programming';
reg = /\s/;
reg = /\S/;
console.log(string.match(reg));


string = '?:';
reg = /\w/;
reg = /\W/;
console.log(string.match(reg));


string = "Java";
reg = /Java\Z/;
console.log(string.match(reg));


// Methods 

string = "Java";
reg  = /^J..a$/;
console.log(reg.exec(string));

string = "Javascript Programming Language";
reg = /\s/g;

let iterator = string.matchAll(reg);

for(let value of iterator)
{
    console.log(value);
}

string = 'Java';
reg = /v/;

console.log(string.search(reg));

string = 'Find me';
reg = /me/;

let result = string.replace(reg,'you');
console.log(result);

string = 'Java Programming';
reg = /\s/;

let array = string.split(reg);
console.log(array);

string = `The
Java
Programming`;
reg = /J/;

console.log(reg.exec(string));


function validEmail(string)
{
    let reg = /\S+(@gmail.com)$/;
    console.log(reg.exec(string));
}
validEmail('tigerGourav@yahoo.com');