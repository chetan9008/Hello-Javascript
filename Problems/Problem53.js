let string = 'hello';
let anotherString = 'he';

if (string.startsWith(anotherString)) {
    console.warn('he is in string');
}
else {
    console.warn('he is not in string');
}


if (string.lastIndexOf(anotherString, 0) !== -1) {
    console.log('he is present');
}
else {
    console.log('he is not present');
}


if (string.indexOf(anotherString) === 0) {
    console.log('he is present');
}
else {
    console.log('he is not present');
}

let regEx = /^he/;

if (regEx.test(string)) {
    console.log('he is present');
}
else {
    console.log('he is not present');
}