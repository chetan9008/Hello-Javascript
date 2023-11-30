let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let button = document.querySelector('.button');


let quotes_array = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        writer: 'Oscar Wilde'
    }
    ,
    {
        quote: `“I'm selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        writer: 'Marilyn Monroe'
    },
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        writer: ' Albert Einstein'
    }, {
        quote: `"The best way to find yourself is to lose yourself in the service of others."`,
        writer: ` Mahatma Gandhi`
    }, {
        quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
        writer: ` Albert Einstein`
    }, {
        quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
        writer: `Aristotle`
    }, {
        quote: `"Your time is limited, so dont waste it living someone else's life."`,
        writer: ` Steve Jobs`
    }, {
        quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
        writer: ` Benjamin Franklin`
    }, {
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        writer: `Oprah Winfrey`
    }, {
        quote: `"t does not matter how slowly you go as long as you do not stop."`,
        writer: `Confucius`
    }, {
        quote: `"Our lives begin to end the day we become silent about things that matter."`,
        writer: `Martin Luther King, Jr.`
    }, {
        quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
        writer: `Dalai Lama`
    }, {
        quote: `"The journey of a thousand miles begins with one step."`,
        writer: `Lao Tzu`
    }
]


button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes_array.length);

    quote.innerText = quotes_array[random].quote;
    person.innerText = quotes_array[random].writer;
})

let line = 0;


document.querySelector('.serial_button').addEventListener('click', (e) => {

    quote.innerText = quotes_array[line].quote;
    person.innerText = quotes_array[line].writer;
    line++;
    if (line == quotes_array.length) {
        line = 0;
    }
})

document.querySelector('.previous').addEventListener('click', () => {
    line--;
    if (line < 0) {
        line = quotes_array.length - 1
    }
    console.log(line);
    quote.innerText = quotes_array[line].quote;
    person.innerText = quotes_array[line].writer;

})



document.querySelector('.next').addEventListener('click', (e) => {
    line++;
    if (line == quotes_array.length) {
        line = 0;
    }
    console.log(line);
    quote.innerText = quotes_array[line].quote;
    person.innerText = quotes_array[line].writer;

})