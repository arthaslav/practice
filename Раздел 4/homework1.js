// let n = 0;
// let m = 100;

// let min = Math.min(n, m);
// let max = Math.max(n, m);

// if (min % 2 === 0) min += 1;
// if (max % 2 === 0) max -= 1;

// let count = ((max - min) / 2) + 1;
// let randIndex = Math.floor(Math.random() * count);
// let randomOdd = min + randIndex * 2;

// console.log(randomOdd);

let n1 = 0;
let m1 = 100;
let count1 = 100;

let numbers1 = [];

let min1 = Math.min(n1, m1);
let max1 = Math.max(n1, m1);

let kokonutik1 = (max1 - min1) + 1;

for (let i = 0; i < count1; ++i) {
  numbers1.push(Math.floor(Math.random() * kokonutik1) + min1);
}
console.log(numbers1);

// ---------------------------------------------------------------

let n2 = 2;
let m2 = 5;
let count2 = 50;

let numbers2 = [];

let min2 = Math.min(n2, m2);
let max2 = Math.max(n2, m2);

let kokonutik2 = (max2 - min2) + 1;

for (let i = 0; i < count2; ++i) {
  numbers2.push(Math.floor(Math.random() * kokonutik2) + min2);
}
console.log(numbers2);

// ---------------------------------------------------------------

let n3 = 100;
let m3 = -5;
let count3 = 70;

let numbers3 = [];

let min3 = Math.min(n3, m3);
let max3 = Math.max(n3, m3);

let kokonutik3 = (max3 - min3) + 1;

for (let i = 0; i < count3; ++i) {
  numbers3.push(Math.floor(Math.random() * kokonutik3) + min3);
}
console.log(numbers3);

// ---------------------------------------------------------------

let n4 = -3;
let m4 = -10;
let count4 = 42;

let numbers4 = [];

let min4 = Math.min(n4, m4);
let max4 = Math.max(n4, m4);

let kokonutik4 = (max4 - min4) + 1;

for (let i = 0; i < count4; ++i) {
  numbers4.push(Math.floor(Math.random() * kokonutik4) + min4);
}
console.log(numbers4);