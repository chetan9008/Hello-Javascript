function myMethod() {
    let string = 'Sagar is gandg';

    let length = string.length;

    if (string[0] === 'S' && string[length - 1] === 'u') {
        console.log('String is start with S and ended with u');
    }
    else if (string[0] === 'S') {
        console.log('String is start with S and not ended with u');
    }
    else if (string[length - 1] === 'u') {
        console.log('String is not start with S and ended with u');
    }
    else {
        console.log('String is not start with S neither ended with u');
    }
}
function programizMethod(string) {
    if (string.startsWith('S') && string.endsWith('u')) {
        console.log('String is start with S and ended with u');
    }
    else if (string.startsWith('S')) {
        console.log('String is start with S and not ended with u');
    }
    else if (string.endsWith('u')) {
        console.log('String is not start with S and ended with u');
    }
    else {
        console.log('String is not start with S neither ended with u');
    }
}

function regexFunction(string)
{
    if ( /^s/i.test(string) && /u$/i.test(string)){
        console.log('String is start with S and ended with u');
    }
    else if (/^s/i.test(string)) {
        console.log('String is start with S and not ended with u');
    }
    else if (/u$/i.test(string)) {
        console.log('String is not start with S and ended with u');
    }
    else {
        console.log('String is not start with S neither ended with u');
    }
}

let string = 'Sagar is gandu';
// programizMethod(string);
regexFunction(string)
