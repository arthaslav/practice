let day = 'Воскресенье';

if (day === 'Суббота' || day === 'Воскресенье') {
  console.log(day + ' - это выходной');
} else {
  console.log(day + '- это не выходной');
}


let password = '******';

if (password.length > 3 && password.length < 26) {
  console.log('Допустимый пароль');
} else {
  console.log('Такой пароль не подходит');
}


let x = 20;

if (x === 13 || x > 0 && x < 11) {
  console.log('x - число 13 или число  от 1 до 10');
}


let f = 102; // 123

if ((f % 3 === 0 || f % 2 === 0) && f > 100) {
  console.log('f делится на 3 или на 2 и f больше 100');
}


let f2 = 101; // Не делится на 2 и 3

if (!(f2 % 3 === 0 || f2 % 2 === 0) && f2 > 100) {
  console.log('f не делится на 3 или на 2 и f больше 100');
}