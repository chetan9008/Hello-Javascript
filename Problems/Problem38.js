function findOccurence(string, charcter) {
    let count = 0;
    for (let value of string) {
        if (value == charcter) {
            count++;
        }
    }
    return count;
}


let string = 'chetan is fuck';
let letter = 'c';

console.log(findOccurence(string, letter));

function usingRegex(string, letter) {
    let regex = new RegExp(letter, 'g');

    let count = string.match(regex);

    count = count.length;

    return count;
}
console.log(
    usingRegex(string, letter)
);
