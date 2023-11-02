let pastTime = new Date().getTime() + 1000 * 60*60*24;

let timer = setInterval(
    () => {
        let nowTime = new Date().getTime();

        let time = pastTime - nowTime;
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor(time / (1000 * 60 * 60) % 24);
        let minutes = Math.floor((time / 1000 / 60) % 60);
        let seconds = Math.floor((time / 1000) % 60);

        if (time <= 0) {
            clearInterval(timer);
            console.log('Time finished');
            return;
        }
        console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
    }
    , 1000);