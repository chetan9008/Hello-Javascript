let greet = () => {
    console.log('hello javascript');
}
function example1() {
    console.log('Message show after 2 seconds');
    setTimeout(greet, 2000);
}

function example2()
{
    let id = setTimeout(greet, 1000);
    let id2 = setTimeout(greet, 1000);
    console.log(`Id is ${id}`);
    console.log(`Id is ${id2}`);
}

function example3()
{
    count = 0;
    function dateFunction()
    {
        let date = new Date();
        date = date.toLocaleTimeString();

        console.log(date);

        let id = setTimeout(dateFunction,1000);
        count++;
        if(count === 10)
        {
            clearTimeout(id);
        }
    }
    dateFunction();
}
// example3();

function example4()
{
    function greet(first,second)
    {
        console.log(`Hello ${first} ${second}`);
    }
    setTimeout(greet,1000,'chetan','katik');
}
// example4();
