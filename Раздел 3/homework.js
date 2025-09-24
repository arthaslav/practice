let password = '123456789'

if (password.length >= 4 && password.includes('-') || password.includes('_')) {
  console.log('Пароль надёжный');
} else {
  console.log('Пароль недостаточно надёжный');
}

// 1234-
// 4321_
// qaz-xsw
// _zxd

// _-a
// qaz
// _-3
// 123456789


let name = 'Иван';
let surname = 'иВаНов';

let n = name.substr(0, 1);
let ame = name.substr(1);
let s = surname.substr(0, 1);
let urname = surname.substr(1);

let nUpper = n.toUpperCase();
let ameLower = ame.toLowerCase();
let sUpper = s.toUpperCase();
let urnameLower = urname.toLowerCase();

let newName = nUpper + ameLower;
let newSurname = sUpper + urnameLower;

console.log(newName === name ? 'Имя осталось без изменений' : 'Имя было преобразовано');
console.log(newSurname === surname ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована');

