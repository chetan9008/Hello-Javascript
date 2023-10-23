
let variable = 2;
let string = 'value of variable is ' + variable ; //aap tarika
let string1 = `value of variable is ${variable}`;//mentos tarika
console.log(string);
console.log(string1);
string = '\'single quote\' \"double quote\" '; //aap tarika 
string1 = `'single quote' "double quote"`;//mentos tarika
console.log(string);
console.log(string1);

console.log(`${variable < 10 ? 'small':'big'}`);

//tagged template

let tagged = (string)=>{
    return string;
}

let result = tagged `hello`;

console.log(result);

let name = 'chetan';

let functions = (array,...variables)=>
{
    console.log(array);
    console.log(variables);
    return `${array[0]}${variables[0]}${array[1]}`;
}

result = functions `My name is ${name}`;

console.log(result);