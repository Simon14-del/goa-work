let fruits = ["apple", "banana", "orange"];

console.log(fruits);

fruits.push("grape");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.indexOf("banana"));

console.log(fruits.includes("orange"));

fruits.splice(1, 1, "mango");

console.log(fruits);

let part = fruits.slice(0, 2);

console.log(part);

console.log(fruits.join(", "));

console.log(fruits.length);