function gett() {
    function Oobject() {
        this.name = 'chetan';
        this.getter = function () {
            return this.name;
        }
    }

    let item = {
        company: 'oreo',
        price: 20,
        // getter:function()
        // {
        //     return this.company;
        // }
        get getter() {
            return this.company;
        },
        get getPrice() {
            return this.price;
        }
    }

    let object = new Oobject();
    console.log(item.company);
    console.log(item.getter);

    console.log(object.name);
    console.log(object.getter());
    console.log(item.getPrice);
}

function practiseSet()
{
    let object = {
        name:'chetan',
        set setName(n)
        {
            this.name = n;
        }
    }
    console.log(object.name);
    object.setName = NaN;
    console.log(object.name);
}
// practiseSet();


function ObjectProperty()
{
    // let object = {
    //     name:'chetan'
    // }
    function OObject()
    {
        this.name = 'chetan';
    }
    let object = new OObject();

    Object.defineProperty(object,'getter',
    {
        get:function()
        {
            return this.name;
        }
    }
    )

    Object.defineProperty(object,'changeName',
    {
        set:function(name)
        {
            this.name = name;
        }
    })

    console.log(object.name);
    console.log(object.getter);
    object.changeName = 'gaurav'
    console.log(object.name);
}

// ObjectProperty();

function miscevious()
{
    let Item = function()
    {
        this.company = 'oreo';
        this.price = 20;
    }
    let item = new Item();
    console.log(item.company);
    Object.defineProperty(item,'getName',
    {
        get:function()
        {
            return this.company;
        }
    })
    Object.defineProperty(item,'getPrice',{
        get:function()
        {
            return this.price;
        }
    })

    Object.defineProperty(item,'changePrice',
    {
        set:function(price)
        {
            this.price = price;
        }
    })
    Object.defineProperty(item,'setName',
    {
        set(name)
        {
            this.company = name;
        }
    })
    item.changePrice = 10;
    item.setName = 'parle g';
    console.log(item.getName);
    console.log(item.getPrice);

}

miscevious();