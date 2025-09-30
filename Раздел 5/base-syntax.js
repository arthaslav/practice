function printWeekday() {
  let dayIndex = new Date().getDay();
  let days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  console.log(`Сегодня ${days[dayIndex]}`);
}

printWeekday();


// Объявление функции с названием functionName
function functionName() {
  // Тело функции
  console.log('Вызвана функция');
}

// Вызов функции
functionName();

// Присваиваем функцию переменной, название после function можно опустить
let functionAsVariable = function () {
  // Тело функции
  console.log('Вызвана функция из переменной');
}

// Используем название переменной
functionAsVariable();