let arr = [10, 'ლუკა', true, 20, 'ნიკა'];

let integers = [];

for (let item of arr) {
    if (typeof item === "number") {
        integers.push(item);
    }
}

console.log(integers); 