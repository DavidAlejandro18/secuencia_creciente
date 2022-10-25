const resolve = require('./helpers/functions');

let array1 = [1, 4, 10, 4, 2];
let array2 = [1, 3, 2, 1];
let array3 = [1, 2, 1, 2];
let array4 = [0, -2, 5, 6];
let array5 = [10,1,2,3,4];

console.log(resolve(array1)); // false
console.log(resolve(array2)); // false
console.log(resolve(array3)); // false
console.log(resolve(array4)); // true
console.log(resolve(array5)); // true