let me = {
  name: 'Тимофей',
};

// Функция вернет получившийся объект, но это будет тот же объект,
// который мы передали в первый аргумент, то есть она изменит объект me и вернет его
let newMe = Object.assign(me, { name: 'Не Тимофей' }, { surname: 'Не Тиунов' });

// me и newMe - один и тот же объект, и мы его изменили
console.log(newMe);
console.log(me);

console.log(me === newMe); // true