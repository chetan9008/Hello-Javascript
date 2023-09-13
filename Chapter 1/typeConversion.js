// Implicit Conversion 

console.log('2' + 1);
console.log('2' - 1);
console.log('2' - 1);
console.log('2' - 1);
console.log('2' * 2);
console.log(2 - true);
console.log(2 + undefined);
console.log('2' - undefined);
console.log('hello' - 'hello');
console.log('2' - NaN);//NaN meaning Not a number
console.log('2' + true);
console.log('2' + 'hello');
console.log('2' + NaN);
console.log('2' + undefined);

//Explicit Conversion 

console.log(Number('2'));
console.log(Number(''));
console.log(Number(null));
console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number('one'));
console.log(Number('22e-1'));
console.log('');
console.log(parseInt('2.222'));
console.log(parseFloat('2.21'));
console.log(-'2.2');
console.log(Math.floor(2.9));
console.log(Math.ceil('2.1'));

console.log('');

console.log(String(2222));
console.log(String('zero'));
console.log(String(undefined));
console.log(String(null));
console.log(String(NaN));
console.log((22).toString());
console.log((NaN).toString());
// console.log((undefined).toString());
// console.log((null).toString());

console.log('');

console.log(Boolean(2));
console.log(Boolean(0));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Examples 

let data = new Date();
console.log(data);

console.log(data.getTime());

console.log(data.toDateString());
console.log(data.toLocaleDateString());