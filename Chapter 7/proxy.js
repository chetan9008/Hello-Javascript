
let proxyFunction = () => {
    class OObject {

        constructor() {
            this.name = 'chetan';
            this.class = 'bsc';
            this.marks =
            {
                c: 90,
                cpp: 100
            }
        }
    }
    let object = new OObject();

    let handler = {
        get: function (obj, key) {
            return obj[key] ? obj[key] : `${key} is not exist`;
        }
    }

    let proxy = new Proxy(object, handler);


    console.log(proxy.name);
    console.log(proxy.occupation);


    let proxy1 = new Proxy(object, {});

    console.log(proxy1.name);
    console.log(proxy1.class);
    console.log(proxy1.marks);


    let handler1 = {
        get(object, key) {
            return object[key];
        }
    }

    let proxy2 = new Proxy(object, handler1);

    console.log(proxy2.name);
    console.log(proxy2.class);


    let setHandler =
    {
        set(object, key, value) {
            object[key] = value
        }
    }

    let proxy3 = new Proxy(object, setHandler);

    object.name = 'gaurav';

    console.log(object.name);


    let bank = {
        name: 'chetan',
        account: '1234',
        balance: 250
    }

    let bankHandler = {
        get(object, key) {
            if (key == 'name') {
                return object[key]
            }
            else {
                return 'Restricted Information';
            }
        }
    }

    let proxy4 = new Proxy(bank, bankHandler);

    console.log(proxy4.name);
    console.log(proxy4.balance);

    let constantHandler = {
        set(object, key, value) {
            console.log('ROM(read only memory)');
        }
    }

    let proxy5 = new Proxy(bank, constantHandler);

    proxy5.class = 'bsc';


    let handler2 = {
        get(object, key) {
            if (object === 'chetan' && key === 'name') {
                return object[key];
            }
            else {
                console.log('only access name');
            }
        }
    }

    let proxy6 = new Proxy(bank, handler2);

    console.log(proxy6.balance);
    console.log(proxy6.account);
}
// proxyFunction();

function experiment() {
    let object = {
        name: 'chetan',
        class: 'bsc',
        netWorth: 0
    }

    let handler = {
        get(object, key) {
            if (key === 'name') {
                return object[key]
            }
            else {
                console.log('key is restricted');
            }
        }
    }

    let proxy = new Proxy(object, handler);

    console.log(proxy.class);
}
// experiment();

let experiment1 = () => {
    let object = {
        name: 'chetan',
        class: 'bsc',
        balance: 10
    }



    let handler = {
        set: function (object, key, value) {
            if (key === 'name') {
                object[key] = value;
                reduceBalance(object,'balance');
            }
        }
    }
    let proxy = new Proxy(object, handler);

    let reduceBalance = (object,balance) => {
        object.balance--;
    }

    proxy.name = 'gaurav';
    console.log(proxy.name);
    console.log(proxy.balance);


}
experiment1();
