function destructingAsssignment1() {
    let object = {
        name: 'chetan',
        standard: 'bsc',
        section: 'D'
    }

    let { standard, section, name } = object;

    console.log(name);
    console.log(standard);
    console.log(section);

    let object2 = {
        company: 'oreo',
        price: 10,
        print: () => {
            console.log('this is printing');
        }
    }

    let { company: nam, price: dam, print = () => { console.log('hi'); } } = object2;

    console.log(nam);
    console.log(dam);
    print();
    let array = ['first', 'second', 'third', 'four'];

    let [f, s, t, x = 2] = array;

    console.log(f);
    console.log(s);
    console.log(t);
    console.log(x);

    let y = 2;
    let z = 3;

    [y, z] = [z, y];

    console.log(y);
    console.log(z);
}

function destructingAsssignment2()
{   
    let array = [1,2,3,4];

    let [x,,y] = array;
    console.log(x);
    console.log(y);

    let [a,b,...rest] = array;

    console.log(a);
    console.log(b);
    console.log(rest);

    let object = {
        name:'chetan',
        class:'bsc',
        section:'D'
    }

    let {name,...properties} = object
    console.log(name);
    console.log(properties.class);
}
// destructingAsssignment2();

function destructingAsssignment3()
{
    let array = [1];
    array.push([2,3,4,5]);
    // console.log(array);

    let [x,[y,...z]] = array;
    console.log(x);
    console.log(y);
    console.log(z);

    let object = {
        name:'chetan',
        class:'bsc',
        hobby:{
            first:'cricket',
            second:'gaming',
            third:'coding'
        }
    }

    let {hobby:{first:skill1,second}} = object;

    console.log(skill1);
    console.log(second);
}
destructingAsssignment3();