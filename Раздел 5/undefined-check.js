let array = [1, 2, 3, false, null, undefined];

// Проверяем, есть ли элемент с индексом 5
if (array[5] !== undefined) console.log('Элемент есть'); // Не сработает
if (array.length > 5) console.log('Элемент есть');

// Явно задаем пустое значение
let emptyVar = null;