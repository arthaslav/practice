// Переменная без значения
let emptyVariable;

console.log(emptyVariable); // Undefined

let array = [1, 2, 3];

console.log(array[2]); // 3
console.log(array[3]); // Undefined
console.log(array[100500]); // Undefined
console.log(array[-1]); // Undefined

// Сравнение с Undefined
console.log(array[-1] === undefined); // True
console.log(array[0] === undefined); // False

function emptyFunction() {}

console.log(emptyFunction()); // Undefined