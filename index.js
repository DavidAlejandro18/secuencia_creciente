const { resolve } = require('./helpers/functions');

let arrayFalse = [1,2,3,5,4,6];
let arrayTrue = [1,2,3,4,5,6];
let arrayTest = [1,2,3,7,10,5];

console.log(resolve(arrayFalse));
console.log(resolve(arrayTrue));
console.log(resolve(arrayTest));