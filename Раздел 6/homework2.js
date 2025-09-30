// Функция создаёт select из массива объектов
function createSelect(items, defaultValue) {
  // создаём сам select
  let select = document.createElement("select");

  // пробегаем по массиву объектов
  for (let item of items) {
    let option = document.createElement("option");
    option.value = item.value;       // значение атрибута value
    option.innerHTML = item.label;   // текст внутри option

    // если совпадает с выбранным значением — делаем выбранным
    if (item.value === defaultValue) {
      option.selected = true;
    }

    // добавляем option внутрь select
    select.append(option);
  }

  // если defaultValue не найден — выберем первый элемент
  if (!select.value && select.options.length > 0) {
    select.options[0].selected = true;
  }

  return select;
}

// Пример данных
let items = [
  { value: "a", label: "Альфа" },
  { value: "b", label: "Бета" },
  { value: "g", label: "Гамма" }
  
];

// создаём select с выбранным "b"
let mySelect = createSelect(items, "b");

// вставляем в body
document.body.append(mySelect);
