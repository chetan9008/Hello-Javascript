//after object and array

const suit = ["Spades", "Diamonds", "Club", "Heart"];
const value =
    [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King"
    ];
let deak = [];

for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < value.length; j++) {
        let card = { Suit: suit[i], Value: value[i] }
        deak.push(card);
    }
}

for(let i=deak.length -1 ;i > 0;i--)
{
    let random = Math.floor(Math.random() * i);

    temp = deak[i];
    deak[i] = deak[random];
    deak[random] = temp;
}

for(let i=0;i<5;i++)
{
    console.log(`${deak[i].Value} of ${deak[i].Suit}`);
}