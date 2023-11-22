function firstMethod() {
    let array1 = [1, 2, 4, 5];
    let array2 = [1, 3, 6, 7, 6, 5];

    let insertion = (a1, a2) => {
        let array = [];
        a1 = new Set(a1);
        a2 = new Set(a2);
        for (let value of a1) {
            if (a2.has(value)) {
                array.push(value);
            }
        }
        return array;
    }

    let result = insertion(array1, array2);
    console.log(result);
}
// firstMethod();

function secondMethod() {
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [1, 3, 6, 7, 6, 5];
    function insertion(a1, a2) {
        let array = [];
        array = a1.filter(x => a2.indexOf(x)!= -1);
        return array;
    }
    let result = insertion(array1, array2);
    console.log(result);

}
secondMethod();