let x1 = 2;
let y1 = 3;

let z1 = 10;
let v1 = 5;

let width1 = Math.abs(x1 - z1);
let height1 = Math.abs(y1 - v1);

console.log('Задание 1. Площадь каждого прямоугольника:')
console.log('1. ', width1 * height1)

// --------------------------------------------------------------------------

let x2 = 10;
let y2 = 5;

let z2 = 2;
let v2 = 3;

let width2 = Math.abs(x2 - z2);
let height2 = Math.abs(y2 - v2);

console.log('2. ', width2 * height2)

// --------------------------------------------------------------------------

let x3 = -5;
let y3 = 8;

let z3 = 10;
let v3 = 5;

let width3 = Math.abs(x3 - z3);
let height3 = Math.abs(y3 - v3);

console.log('3. ', width3 * height3)

// --------------------------------------------------------------------------

let x4 = 5;
let y4 = 8;

let z4 = 5;
let v4 = 5;

let width4 = Math.abs(x4 - z4);
let height4 = Math.abs(y4 - v4);

console.log('4. ', width4 * height4)

// --------------------------------------------------------------------------

let x5 = 8;
let y5 = 1;

let z5 = 5;
let v5 = 1;

let width5 = Math.abs(x5 - z5);
let height5 = Math.abs(y5 - v5);

console.log('5. ', width5 * height5)

// --------------------------------------------------------------------------

let a1 = 13.123456789;
let b1 = 2.123;
let n1 = 5;

let fractional1a = a1 % 1
let fractional1b = b1 % 1

let rounded1 = Math.floor(fractional1a * Math.pow(10, n1)) / Math.pow(10, n1);
let rounded11 = Math.floor(fractional1b * Math.pow(10, n1)) / Math.pow(10, n1);

rounded1 = rounded1.toFixed(n1);
rounded11 = rounded11.toFixed(n1);

console.log('Задание 2. Сравнение дробных частей.');
console.log(rounded1, '>', rounded11, rounded1 > rounded11);
console.log(rounded1, '<', rounded11, rounded1 < rounded11);
console.log(rounded1, '>=', rounded11, rounded1 >= rounded11);
console.log(rounded1, '<=', rounded11, rounded1 <= rounded11);
console.log(rounded1, '===', rounded11, rounded1 === rounded11);
console.log(rounded1, '!=', rounded11, rounded1 != rounded11);

// ---------------------------------------------------------------------

let a2 = 13.890123
let b2 = 2.891564
let n2 = 2

let fractional2a = a2 % 1
let fractional2b = b2 % 1

let rounded2 = Math.floor(fractional2a * Math.pow(10, n2)) / Math.pow(10, n2);
let rounded22 = Math.floor(fractional2b * Math.pow(10, n2)) / Math.pow(10, n2);

rounded2 = rounded2.toFixed(n2);
rounded22 = rounded22.toFixed(n2);

console.log(rounded2, '>', rounded22, rounded2 > rounded22);
console.log(rounded2, '<', rounded22, rounded2 < rounded22);
console.log(rounded2, '>=', rounded22, rounded2 >= rounded22);
console.log(rounded2, '<=', rounded22, rounded2 <= rounded22);
console.log(rounded2, '===', rounded22, rounded2 === rounded22);
console.log(rounded2, '!=', rounded22, rounded2 != rounded22);

// -------------------------------------------------------------------------

let a3 = 13.890123
let b3 = 2.891564
let n3 = 3

let fractional3a = a3 % 1
let fractional3b = b3 % 1

let rounded3 = Math.floor(fractional3a * Math.pow(10, n3)) / Math.pow(10, n3);
let rounded33 = Math.floor(fractional3b * Math.pow(10, n3)) / Math.pow(10, n3);
rounded3 = rounded3.toFixed(n3);
rounded33 = rounded33.toFixed(n3);

console.log(rounded3, '>', rounded33, rounded3 > rounded33);
console.log(rounded3, '<', rounded33, rounded3 < rounded33);
console.log(rounded3, '>=', rounded33, rounded3 >= rounded33);
console.log(rounded3, '<=', rounded33, rounded3 <= rounded33);
console.log(rounded3, '===', rounded33, rounded3 === rounded33);
console.log(rounded3, '!=', rounded33, rounded3 != rounded33);

// -------------------------------------------------------------------------

let n = 0;
let m = 100;

let min = Math.min(n, m);
let max = Math.max(n, m);

if (min % 2 === 0) min += 1;
if (max % 2 === 0) max -= 1;

let count = ((max - min) / 2) + 1;
let randIndex = Math.floor(Math.random() * count);
let randomOdd = min + randIndex * 2;
console.log(randomOdd);

// -------------------------------------------------------------------------

let n22 = 2;
let m22 = 5;

let min22 = Math.min(n22, m22);
let max22 = Math.max(n22, m22);

if (min22 % 2 === 0) min22 += 1;
if (max22 % 2 === 0) max22 -= 1;

let count22 = ((max22 - min22) / 2) + 1;
let randIndex22 = Math.floor(Math.random() * count22);
let randomOdd22 = min22 + randIndex22 * 2;

console.log(randomOdd22);

// -------------------------------------------------------------------------

let n33 = 100;
let m33 = -5;

let min33 = Math.min(n33, m33);
let max33 = Math.max(n33, m33);

if (min33 % 2 === 0) min33 += 1;
if (max33 % 2 === 0) max33 -= 1;

let count33 = ((max33 - min33) / 2) + 1;
let randIndex33 = Math.floor(Math.random() * count33);
let randomOdd33 = min33 + randIndex33 * 2;

console.log(randomOdd33);

// -------------------------------------------------------------------------

let n44 = -3;
let m44 = -10;

let min44 = Math.min(n44, m44);
let max44 = Math.max(n44, m44);

if (min44 % 2 === 0) min44 += 1;
if (max44 % 2 === 0) max44 -= 1;

let count44 = ((max44 - min44) / 2) + 1;
let randIndex44 = Math.floor(Math.random() * count44);
let randomOdd44 = min44 + randIndex44 * 2;

console.log(randomOdd44);