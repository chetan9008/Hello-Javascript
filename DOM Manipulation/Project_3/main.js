
// let accordian = document.querySelectorAll('.accordian');


// for(let i=0;i<accordian.length;i++)
// {
//     accordian[i].addEventListener('click',function(){
//         this.classList.toggle('active');
//     })
// }


let variable = document.querySelector('.container');
variable.addEventListener('click',function(e){
    if(e.target.classList.contains('question'))
    {
        e.target.parentElement.classList.toggle('active');
    }
})