let me = {
  name: 'Тимофей',
};

// Подмешиваем свойства в свежесозданный пустой объект...
let newMe = Object.assign({}, me, { name: 'Не Тимофей' }, { surname: 'Не Тиунов' });
// ... или делаем то же самое с помощью spread
let newMeWithSpread = { ...me, name: 'Не Тимофей', surname: 'Не Тиунов' };

// Исходный объект остался нетронутым
console.log(me);