let fruit = 'Яблоко';

switch (fruit) {
  case 'Яблоко':
    console.log('Яблоко');
    break;
  case 'Банан':
    console.log('Банан');
    break;
  case 'Арбуз':
  case 'Вишня':
  case 'Клубника':
    console.log('Ягода');
    break;
  default:
    console.log('крабочел');
    break;
}