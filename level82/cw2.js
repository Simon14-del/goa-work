function myLength(arr) {
    let count = 0;

    for (let item of arr) {
        count++;
    }

    return count;
}

let test = [10, 20, 30, 40];

console.log(myLength(test)); 