let arr = [100, 10, 20, 5]

let result = arr.slice(1).reduce((acc, num) => acc - num, arr[0] );

console.log(result)
//cw2