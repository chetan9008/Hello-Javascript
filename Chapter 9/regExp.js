let reg = /^a....a$/;

let string = 'amitaa';

console.log(reg.test(string));

//[]Square brackets

reg = new RegExp(/[^a-d]/);

string = 'abc';

console.log(string.match(reg));

// . Period

reg = /../;
string = 'abcd'
console.log(string.match(reg));

// ^ Caret 

reg = new RegExp(/^x/);
string = 'xerox';
console.log(string.match(reg));

// $ dollar 

reg = /a$/;

string = 'maxima';
console.log(reg.test(string));

// * Star 

reg = /ma*n/
string = 'mn';
console.log(string.match(reg));


// + Plus 

reg = /ma+n/;
string = 'maaaaaan';
console.log(string.match(reg));

// ? Question Mark

reg = /an?t/;
string = 'annntman';
console.log(string.match(reg));

// {} Braces

reg = /a{2,3}/;

string = 'aaaantman';
console.log(string.match(reg));

reg = /[0-9]{10}/;

string = '9761342524';
console.log(string.match(reg));

// |  Alternation

reg = /a|b/;

string = 'bossa';

console.log(string.match(reg));

// () Group

reg = /[a-z](man)/;
string= 'zzman';
console.log(string.match(reg));

// / Backslash 

reg = /\?$/;

string = 'Chutiya?';

console.log(string.match(reg));