const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter a : "));
let b = parseInt(prompt("Enter b : "));
let c = parseInt(prompt("Enter c : "));

let posRoot, negRoot;

const discriminant = (b * b) - (4 * a * c);

if (discriminant == 0) {
    posRoot = negRoot = ((-b) / (2 * a));
    console.log(`Root of equation is ${posRoot} and ${negRoot}`);
}
else {
    if (discriminant > 0) {
        posRoot = (-b) + Math.sqrt(discriminant);
        posRoot /= (2 * a);

        negRoot = (-b) - Math.sqrt(discriminant);
        negRoot /= (2 * a);

        console.log(`Root of equation is ${posRoot} and ${negRoot}`);
    }
    else
    {
        posRoot = ((-b)/(2*a)).toFixed(2);
        negRoot = (Math.sqrt(-discriminant)/(2*a)).toFixed(2);

        console.log(`Root of equation is ${posRoot} + ${negRoot}i and ${posRoot} - ${negRoot}i `);

    }
}


