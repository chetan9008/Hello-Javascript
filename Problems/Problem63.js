let date = new Date();

let year = date.getFullYear();

let month = date.getMonth() + 1;

let seconds = date.getDate();

if(month < 10)
{
    month  = '0' + month;
}

if(seconds < 10)
{
    seconds = '0' + seconds;
}


console.log(`${seconds}:${month}:${year}`);
console.log(`${seconds}/${month}/${year}`);
console.log(`${seconds}-${month}-${year}`);