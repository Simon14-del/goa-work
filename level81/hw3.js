let numbers = [5, 10, 15, 20];

let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log(sum);