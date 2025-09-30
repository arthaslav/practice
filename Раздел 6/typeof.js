// Простые
typeof 1; // number
typeof 'adc'; // string
typeof false; // boolean
typeof 123; // bigint
typeof Symbol(); // symbol

// Составные
typeof {}; // object
typeof []; // object
typeof function () { }; // function

// Нулевые
typeof undefined; // undefined
typeof null; // object


// Расхождение typeof и системы типов
typeof null; // object, хотя реальный тип значения - null
typeof function () { }; // function, хотя в системе типов функция не выделяется в отдельный тип

// Пример использования
function getStringValue(unknown) {
  if (typeof unknown === 'string') {
    return unknown;
  }
  if (typeof unknown === 'function') {
    return unknown();
  }
  if (typeof unknown === 'object') {
    return unknown.toString();
  }
  return '';
}

console.log(getStringValue('Просто строка'));
console.log(getStringValue(function () {
  return new Date().getFullYear();
}));
console.log(getStringValue([1, 2, 3]));
console.log(getStringValue({}));
console.log(getStringValue(true));