const resolve = require('../helpers/functions');

let array1 = [1, 4, 10, 4, 2];
let array2 = [1, 3, 2, 1];
let array3 = [1, 2, 1, 2];
let array4 = [0, -2, 5, 6];
let array5 = [10, 1, 2, 3, 4];
let array6 = [1, 1, 1, 2, 3];
let array7 = [6, 2, 4, 6, 1, 7];
let array8 = [-2, 14, 124, 12, 200];

it("Test array 1", () => {
    expect(resolve(array1)).toBe(false);
});

it("Test array 2", () => {
    expect(resolve(array2)).toBe(false);
});

it("Test array 3", () => {
    expect(resolve(array3)).toBe(false);
});

it("Test array 4", () => {
    expect(resolve(array4)).toBe(true);
});

it("Test array 5", () => {
    expect(resolve(array5)).toBe(true);
});

it("Test array 6", () => {
    expect(resolve(array6)).toBe(false);
});

it("Test array 7", () => {
    expect(resolve(array7)).toBe(false);
});

it("Test array 8", () => {
    expect(resolve(array8)).toBe(true);
});