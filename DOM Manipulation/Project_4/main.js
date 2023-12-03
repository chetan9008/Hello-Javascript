let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let tempMiliseconds,tempSeconds,tempMinutes,tempHours;

let Timestatus = false;
let timeId;

let startStop = document.querySelector('.start-stop-button');
let reset = document.querySelector('.reset-button');
let timer = document.querySelector('.timer');


function stopWatch() {
    miliseconds++;
    if (miliseconds / 100 === 1) {
        miliseconds = 0;
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;

            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }
    }
    if (miliseconds < 10) {
        tempMiliseconds = '0' + miliseconds.toString();
    }
    else {
        tempMiliseconds = miliseconds;
    }
    if (seconds < 10) {
        tempSeconds = '0' + seconds.toString();
    }
    else {
        tempSeconds = seconds;
    }
    if (minutes < 10) {
        tempMinutes = '0' + minutes.toString();
    }
    else {
        tempMinutes = minutes;
    }
    if (hours < 10) {
        tempHours = '0' + hours.toString();
    }
    else
    {
        tempHours = hours;
    }
    timer.innerHTML = `${tempHours}:${tempMinutes}:${tempSeconds}:${tempMiliseconds}`;
}


startStop.addEventListener('click', () => {
    if (Timestatus === false) {
        timeId = setInterval(stopWatch, 1);
        Timestatus = true;
        startStop.innerHTML = '<i class="fa-solid fa-pause" id="play"></i>'
    }
    else {
        clearInterval(timeId);
        startStop.innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
        Timestatus = false;
    }
});

reset.addEventListener('click',()=>{
    clearInterval(timeId);

    seconds=0;
    minutes=0;
    miliseconds=0;
    hours=0;

    timer.innerHTML = '00:00:00:00';
})