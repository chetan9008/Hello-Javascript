let formatter = new Intl.NumberFormat('en-US',
{
    style:'currency',
    currency:'USD'
})

let string = formatter.format(1200);

console.log(string);

let currency = '$' + 1200;

console.log(currency);


let currency1 = (1200).toLocaleString('en-US',
{
    style:'currency',
    currency:'USD'
})

console.log(currency1);