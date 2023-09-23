// global variable 

function unused() {
    let a = 3;
    c = 10;
    function scope() {
        var b = 4;
        let a = 3;
    }
    function xyz() {
        b = "second";
    }
    scope();
    xyz();
    console.log(a);
    console.log(b);
    console.log(c);
}
// unused();
function blockScope() {
    let a = 10;
    {
        let b = 20;
    }
    if (b == 20) {
        let c = 30;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
// blockScope();

function redeclare() {
    a = 3;
    let a = 10;
    console.log(a);
}

function example() {
    {
        a = 3;
    }
    console.log(a);
}
// example();

function globalBlock() {
    {
        let a = 3;
    }
    console.log(a);
}

function loop() {
    let a = 0;

    for (let a = 1; a <= 3; a++) {
        console.log(a);
    }
    console.log(a);
}

let a = 'string';
function inside() {
    var a = 10;
}
inside();
console.log(a);


