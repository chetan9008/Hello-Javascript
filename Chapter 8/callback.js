function example1() {
    function callme(name, function1) {
        console.log(`Name is ${name}`);
        call();
    }

    function call() {
        console.log('hi i am call back');
    }
    callme('chetan', call);
}

// example1();


function example2() {
    function greet(name,function1)
    {
        console.log('hello world');
        function1(name);
    }

    function name(name)
    {
        console.log(`Hello ${name}`);
    }

    let id = setTimeout(greet,2000,
        'chetan',name);

    // name('chetan');
}

// example2();


function example3()
{
    function html()
    {
        console.log('This is html loading');
    }
    function javascript(function1)
    {
        console.log('This is javascript loading');
        setTimeout(function1,1000);
        
    }

    let id = setTimeout(javascript,2000,html)
}

example3();

