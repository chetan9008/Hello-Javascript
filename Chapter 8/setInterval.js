function example1() {
    let i = 1;
    let interval = setInterval(() => {
        console.log(`2 * ${i} = ${2 * i}`);
        i++;
    }, 1000);
}
// example1();

let example2 = ()=>
{
    setInterval(()=>
    {
        let time = new Date();
        time = time.toLocaleTimeString();
        console.log(time);
    },1000);
}
// example2();

let example3 = ()=>
{
    let i= 1;
    let interval = setInterval(()=>
    {
        console.log(`14 * ${i} = ${14*i}`);
        i++;
        if(i=== 11)
        {
            clearInterval(interval);
        }
    },1000)
}
// example3();

let example4 = ()=>
{
    function greet(name,lang)
    {
        console.log(`${name} ${lang}`);
    }

    let id = setInterval(greet,1000,'gaurav','gandu')
}

example4();