function introduction() {

    let string = "chetan is \"the boy\". ";
    console.log(string);

    for (let i = 0; i < string.length; i++) {
        // console.log(string[i]);
        console.log(string.charAt(i));
    }

    //immutable 

    string[0] = 'C';

    console.log(string[0]);

    string = 'Chetan is \"the boy\". '

    console.log(string);

    let a = 'a';
    let A = 'A';
    if (a === A)
        console.log('true');
    else
        console.log('false');


    let str = 'You are very big \
and i am very rich\
so can we marry';

    console.log(str);

    let first = 'first';
    let second = new String('second');

    console.log();
    console.log();
    console.log(first);
    console.log(typeof first);
    console.log(second);
    console.log(typeof second);
}

function String_()
{
    let a = 98;
    console.log(a);
    // let string = String(a);
    let string = a.toString();
    console.log(string);

    string = 'chetan isfront end developer';
    console.log(string);

    string = 'chetan\fgaurav';
    console.log(string);
}
// String_();

function StringMethods()
{
    let string = 'chetAn';
    //charAt
    console.log(string.charAt(4));

    let surname = 'kumar';
    //concat
    let fullName = string.concat(" ",surname);

    console.log(fullName);
    //replace

    // let replacedString = fullName.replace('a','chut');

    let reg = /a/gi;

    let replacedString = fullName.replace(reg,'chut');

    console.log(replacedString);

    string = 'Number is : 4';

    reg = /\d/;
    function randomNumber()
    {
        return Math.floor(Math.random() * 100);
    }
    replacedString = string.replace(reg,randomNumber);
    console.log(replacedString);

    let array = string.split(' ',2);
    console.log(array);
}
StringMethods();

function StringMethods2()
{
    let string = 'javascript is love of my life';

    let language = string.substring(10,0);
    console.log(language);
    let language2 = string.substr(0,10);
    console.log(language2);
} 
StringMethods2();
