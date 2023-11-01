let prompt = require('prompt-sync')();
let year = new Date();

year = year.getFullYear();

year = Math.floor(Math.random() * (2023 - 1900) + 1900) 
if((year %4 === 0 )&& (year % 100 !== 0 || year % 400 === 0))
{
    console.log(`${year} is leap year`);
}
else
{
    console.log(`${year} is not leap year`);
}

function dateFunction()
{
    let year = prompt('Enter the year : ');
    let date = new Date(year,1,29).getDate() === 29
    if(date)
    {
        console.log(`${year} is leap year`);
    }
    else
    {
        console.log(`${year} is not leap year`);
    }
}
dateFunction();