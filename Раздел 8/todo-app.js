(function () {
  // Создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // Создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    // При загрузке кнопка неактивна
    button.disabled = true;

    // Проверка на изменение содержимого
    input.addEventListener('input', function () {
      button.disabled = input.value.trim() === '';
    });

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    // <form class='input-group mb-3'>
    //   <input class='form-control' placeholder="Введите название нового дела">
    //   <div class='input-group-append'>
    //     <button class='btn btn-primary'>Добавить дело</button>
    //   </div>
    // </form>

    return {
      form,
      input,
      button,
    };
  }

  // Создаем и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(name) {
    let item = document.createElement('li');
    // Кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // Устанавливаем стили для элемента списка, а также для размещения кнопок
    // В его правой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    // Вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // Приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  function saveTodoList(list, key) {
    const items = [];
    list.querySelectorAll('li').forEach(li => {
      items.push({
        name: li.firstChild.textContent.trim(),
        done: li.classList.contains('list-group-item-success'),
      });
    });
    localStorage.setItem(key, JSON.stringify(items));
  }

  function loadTodoList(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  function createTodoApp(container, title = 'Список дел', todoItems = []) {
    const localStorageKey = title; // уникальный ключ для localStorage
    const savedItems = loadTodoList(localStorageKey); // загрузка сохранённых дел
    todoItems = [...todoItems, ...savedItems]; // объединяем с переданными при запуске

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // Добавляем уже существующие дела из массива
    for (let item of todoItems) {
      let todoItem = createTodoItem(item.name);

      if (item.done) {
        todoItem.item.classList.add('list-group-item-success');
      }

      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
        saveTodoList(todoList, localStorageKey);
      });

      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
          saveTodoList(todoList, localStorageKey);
        }
      });

      todoList.append(todoItem.item);
    }

    // Обработка формы
    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!todoItemForm.input.value.trim()) return;

      let todoItem = createTodoItem(todoItemForm.input.value);

      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
      });

      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
          saveTodoList(todoList, localStorageKey);
        }
      });

      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
      saveTodoList(todoList, localStorageKey);
    });
  }

  window.createTodoApp = createTodoApp;
})();