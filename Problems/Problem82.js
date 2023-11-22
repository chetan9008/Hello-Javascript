function firstMethod() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function smallChunks(arr, chun) {
        let start = 0;
        let end = chun;
        for (let i = 0; i < arr.length; i = i + chun) {
            let tempArray = arr.slice(start, end);
            console.log(tempArray);
            start += 3;
            end += 3;
        }
    }
    smallChunks(array, 3);
}
// firstMethod();

function secondMethod() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function smallChunks(arr, chun) {
        while(arr.length > 0)
        {
            let tempArray = arr.splice(0,chun);
            console.log(tempArray);
        }
    }
    smallChunks(array, 3);
}
secondMethod();