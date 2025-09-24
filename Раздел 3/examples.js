let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

// Старое решение
// let dRoot = Math.sqrt(d);
// console.log('x1 = ', (-b + dRoot) / (2 * a));
// console.log('x2 = ', (-b - dRoot) / (2 * a));

if (d < 0) {
  console.log('Квадратное уравнение не имеет решений');
} else if (d === 0) {
  let x = -b / (2 * a);
  console.log('Квадратное уравнение имеет одно решение, x = ' + x);
} else {
  let dRoot = Math.sqrt(d);
  (-b + dRoot) / (2 * a);
  (-b - dRoot) / (2 * a);
  console.log(`Квадратное уравнение имеет 2 решения\n:x1 = ${x1}\nx2 = ${x2}`);
}

let num = 2;

if (num % 2 === 0) {
  console.log(`Число ${num} четное`);
} else {
  console.log(`Число ${num} нечетное`);
}


let day = 'Вторник';

switch (day) {
  case 'Понедельник':
  case 'Вторник':
  case 'Среда':
  case 'Четверг':
  case 'Пятница':
    console.log(day + ' - это будний день');
    break;
  case 'Суббота':
  case 'Воскресенье':
    console.log(day + ' - это выходной день');
    break;
  default:
    console.log('Введите действительный день недели' + day);
}