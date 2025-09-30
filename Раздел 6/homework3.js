function createSelect(items, defaultValue) {

  const select = document.createElement("select");

  items.forEach((item) => {

    const option = document.createElement("option");
    option.value = item.value;
    option.innerHTML = item.label;

    select.append(option);
  });

  const values = items.map(i => i.value);
  if (values.includes(defaultValue)) {
    select.value = defaultValue;
  } else {
    select.value = items[0].value;
  }

  return select;
}