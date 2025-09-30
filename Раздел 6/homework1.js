let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' },
];

function filterByProp(objects, propName, propValue) {
  let result = [];
  for (let object of objects) {
    if (object[propName] === propValue) {
      result.push(object)
    }
  }
  return result;
};

console.log(filterByProp(objects, "name", "Пётр"));
console.log(filterByProp(objects, "surname", "Иванов"));
console.log(filterByProp(objects, "name", "Фирамир"));