// YHE HE AAP TARIKA 


// let listItem = document.querySelector('#football');
// let listItem2 = document.querySelector('#cricket');
// let listItem3 = document.querySelector('#basketball');
// let listItem4 = document.querySelector('#kabadi');

// listItem.addEventListener('click', (e) => {
//     console.log(e.target);
//     if (e.target.matches('li')) {
//         e.target.style.backgroundColor = 'lightgray';
//     }
// })

// listItem2.addEventListener('click', (e) => {
//     console.log(e.target);
//     if (e.target.matches('li')) {
//         e.target.style.backgroundColor = 'lightgray';
//     }
// })

// listItem3.addEventListener('click', (e) => {
//     console.log(e.target);
//     if (e.target.matches('li')) {
//         e.target.style.backgroundColor = 'lightgray';
//     }
// })

// listItem4.addEventListener('click', (e) => {
//     console.log(e.target);
//     if (e.target.matches('li')) {
//         e.target.style.backgroundColor = 'lightgray';
//     }
// })


//YE HAI MENTOS TARIKA 


let sports = document.querySelector('#sports');

sports.addEventListener('click',(e)=>{
    console.log(e.target);

    if(e.target.matches('li'))
    {
        if(!e.target.classList.contains('active'))
        {
            e.target.classList.add('active');
        }else
        {
            e.target.classList.remove('active');
        }
    }
})

let newSport = document.createElement('li');
newSport.setAttribute('id','golf');
newSport.innerText = 'golf';

sports.append(newSport);