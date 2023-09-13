// Объявление переменных для хранения данных и текущей страницы
let data = [];
let currentPage = 1;
const itemsPerPage = 50;

// Объект для хранения информации о текущей сортировке для каждой колонки
const sortInfo = {};

// Асинхронная функция для загрузки данных
async function loadData() {
  // Загрузка данных с удаленного источника
  const response = await fetch(
    "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
  );
  // Преобразование ответа в формат JSON
  data = await response.json();
  // Отображение данных на текущей странице
  renderTable(currentPage);
}

// Функция для отображения данных на странице
function renderTable(page) {
  // Получение элемента таблицы для добавления данных
  const tableBody = document.getElementById("table-body");
  // Очистка содержимого таблицы
  tableBody.innerHTML = "";

  // Вычисление индексов начала и конца данных на текущей странице
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Перебор данных для отображения на странице
  for (let i = startIndex; i < endIndex && i < data.length; i++) {
    const rowData = data[i];
    const row = document.createElement("tr");
    // Создание HTML-строки для каждой записи данных
    row.innerHTML = `
            <td>${rowData.fname}</td>
            <td>${rowData.lname}</td>
            <td>${rowData.tel}</td>
            <td>${rowData.address}</td>
            <td>${rowData.city}</td>
            <td>${rowData.state}</td>
            <td>${rowData.zip}</td>
        `;
    // Добавление строки в таблицу
    tableBody.appendChild(row);
  }

  // Обновление номера текущей страницы
  document.getElementById("page-number").textContent = page;
}

// Функция для изменения текущей страницы
function changePage(change) {
  // Вычисление общего числа страниц
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Изменение текущей страницы
  currentPage += change;
  // Проверка на выход за пределы допустимых страниц
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  // Отображение данных на текущей странице
  renderTable(currentPage);
}

// Функция для сортировки таблицы
function sortTable(column) {
  // Проверка текущей сортировки для колонки и установка новой
  if (!sortInfo[column]) {
    sortInfo[column] = "asc";
  } else if (sortInfo[column] === "asc") {
    sortInfo[column] = "desc";
  } else {
    sortInfo[column] = "asc";
  }

  // Сортировка данных на основе текущей сортировки
  data.sort((a, b) => {
    // Преобразование значений в строке "Почтового индекса" в числа для корректной сортировки
    const keyA =
      column === 6
        ? Number(a[Object.keys(a)[column]])
        : a[Object.keys(a)[column]].toLowerCase();
    const keyB =
      column === 6
        ? Number(b[Object.keys(b)[column]])
        : b[Object.keys(b)[column]].toLowerCase();

    // Сравнение значений с учетом текущей сортировки
    if (sortInfo[column] === "asc") {
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
    } else {
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
    }
    return 0;
  });

  // Отображение отсортированных данных на текущей странице
  renderTable(currentPage);
}

// Загрузка данных при загрузке страницы
loadData();
