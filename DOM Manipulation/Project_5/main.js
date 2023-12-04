let addButton = document.getElementById('addButton');
let addTaskContainer = document.querySelector('.addTaskContainer');
let taskContainer = document.querySelector('.taskContainer');
let input = document.querySelector('#input');

addButton.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('task');

    let taskPara = document.createElement('p');
    taskPara.innerText = input.value;
    task.appendChild(taskPara);
    taskPara.classList.add('task-para')

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('checkBtn');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('deleteBtn');
    task.appendChild(deleteBtn);

    if (input.value !== '') {
        taskContainer.append(task);
        input.value = '';
        document.querySelector('.alertBox').innerText = '';

    }
    else {
        document.querySelector('.alertBox').innerText = 'Please Enter the Some text!';

    }


    checkBtn.addEventListener('click', () => {
        taskPara.classList.toggle('underline');
    })

    deleteBtn.addEventListener('click',(e)=>{
        // let target = e.target.parentElement;
        // target.remove();
        task.remove();
    })
})



