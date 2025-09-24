let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];

let alphabet = [];

// Добавить в конец массива
alphabet.push('Г');
alphabet.push('Д');
alphabet.push('Е', 'Ж', 'З');

// Добавить в начало массива

alphabet.unshift('В');
alphabet.unshift('А', 'Б');

console.log(alphabet);

alphabet.length; // fruits[fruits.length - 1] (Последний элемент массива)

let greetings = ['Hello', 'Good morning', 'Good evning', 'Good Afternoon'];

console.log(greetings[2]) // Опечатка

greetings[2] = 'Good evening';

console.log(greetings[2]);