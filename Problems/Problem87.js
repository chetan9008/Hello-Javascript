function union(a, b) {
    let newSet = new Set();

    for (let value of a) {
        newSet.add(value);
    }
    for (let value of b) {
        newSet.add(value);
    }
    console.log(newSet);
}

function insertion(a, b) {
    let newSet = new Set();
    for (let value of b) {
        if (a.has(value)) {
            newSet.add(value);
        }
    }
    console.log(newSet);
}

function difference(a, b) {
    let newSet = new Set(a);
    for (let value of b) {
        if (newSet.has(value)) {
            newSet.delete(value);
        }
    }
    console.log(newSet);
}
function subSet(a, b) {
    let newSet = new Set(a);
    for (let value of b) {
        if (!newSet.has(value)) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}

let a = new Set([1, 2, 3, 4, 5]);
let b = new Set([2, 3, 5]);
union(a, b);
insertion(a, b);
difference(a, b);
subSet(a,b);