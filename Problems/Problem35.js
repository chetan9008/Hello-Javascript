let sentence = 'Mr Red has a red house and a red car';
console.log(sentence);
let regex = /red/gi;
let newSentence = sentence.replace('red','green');
let newRegexSentence = sentence.replace(regex,'green');
console.log(newSentence);
console.log(newRegexSentence);