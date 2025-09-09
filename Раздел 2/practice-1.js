// Кол-во подъездов
let entrances = 4;
// Кол-во этажей 
let floors = 9;
// Кол-во квартир на этаже
let flatsPerFloor = 4;  

let flatsPerEntrances = floors * flatsPerFloor
console.log('Квартир в подъезде:', flatsPerEntrances);

let flats = flatsPerEntrances * entrances;
console.log('Квартир в доме:', flats);

// Ингредиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

// Желаемый объем напитка
let volume = 500;

let total = (vodka + tomatoJuice + lemonJuice + tabasco + worcester);
let k = volume / total;

console.log(vodka * k);
console.log(tomatoJuice * k);
console.log(lemonJuice * k);
console.log(tabasco * k);
console.log(worcester * k);



let a = 3;
let b = 5;
let c = 10;
let d = b * b - 4 * a * c;

// Корень дискриминанта

let dRoot = Math.sqrt(d);
if (d > 0) {
  console.log('x1 = ', (-b + dRoot) / (2 * a));
  console.log('x2 = ', (-b - dRoot) / (2 * a));
} else if (d === 0) {
  console.log('x = ', -b / (2 * a));
} else {
  console.log('Корней нет.');
}
console.log('Дискриминант:', d);


// Число Фибоначчи

let n = 10;

let current = 1;
let prev = 0;

while (n-- > 0) {
  console.log(prev);

  let next = prev + current;
  prev = current;
  current = next;
}