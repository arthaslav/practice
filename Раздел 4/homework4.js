let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 'Понедельник';
let offset;

// let offset = days.indexOf(day);

switch (day) {
  case 'Понедельник':
    offset = 0;
    break;
  case 'Вторник':
    offset = 1;
    break;
  case 'Среда':
    offset = 2;
    break;
  case 'Четверг':
    offset = 3;
    break;
  case 'Пятница':
    offset = 4;
    break;
  case 'Суббота':
    offset = 5;
    break;
  case 'Воскресенье':
    offset = 6;
    break;
}

for (let i = 1; i <= 31; i++) {
  let dayIndex = (i - 1 + offset) % 7;
  console.log(`${i} января, ${days[dayIndex]}`);
}