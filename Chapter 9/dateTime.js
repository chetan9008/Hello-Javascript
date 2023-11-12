function example() {
    let date = new Date();

    console.log(date);

    let dateMilliseconds = new Date(0);

    console.log(dateMilliseconds);

    dateMilliseconds = new Date(2000);
    console.log(dateMilliseconds);

    let dateDate = new Date("2023-11-12");

    console.log(dateDate);

    dateDate = new Date("2023-11-12T10:53:59Z");

    console.log(dateDate);

    dateDate = new Date("Jul 2 2023")
    console.log(dateDate);
    dateDate = new Date("11/12/2023")
    console.log(dateDate);

}

function example1()
{
    let date = new Date('1 Jul 2020');
    console.log(date);

    date = new Date(2023,11,12);

    console.log(date);

    let now =Date.now();
    console.log(now);

    date = new Date();
    let year = date.getFullYear();
    console.log(year);
    let month = date.getMonth();
    console.log(month+1);
    let tarik = date.getDate();
    console.log(tarik);
    let day = date.getDay();
    if(day == 0)
    day = 'sunday';
    console.log(day);
    let utcDate = date.getUTCDate();
    console.log(utcDate);

}
// example1();

function example2()
{
    let date = new Date();
    date.setFullYear(1900);
    console.log(date);
    let year = date.getFullYear();
    console.log(year);
}
// example2();

function example3()
{
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let d = date.getDate();

    console.log(`${d}:${month+1}:${year}`);
}
example3();


