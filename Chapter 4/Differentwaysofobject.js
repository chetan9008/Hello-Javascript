// object literal 

function objectLiteral()
{
    let student = {
        name:'chetan',
        class:'bsc',
        rollNo:15,
        hobby:['coding','gaming','video editing'],
        marks: {
            computer:90,
            science:80
        }
    }

    console.log(typeof student);
    console.log(student.rollNo);
    console.log(student.hobby[0]);
    console.log(student.marks.science);
}
// objectLiteral();

function objectusinginstance()
{
    let student = new Object({
        name:'chetan',
        class:'bsc',
        hobby:['gaming','coding']
    })

    console.log(student.hobby[0]);
}
// objectusinginstance();

function constructor()
{
    function Item()
    {
        this.name = 'oreo';
        this.price= 20;
        this.info = function(){
            console.log(`Name is ${this.name}`);
            console.log(`Price is ${this.price}`);
        }
    }
    let item = new Item();
    // console.log(item.price);
    item.info();
}
constructor();