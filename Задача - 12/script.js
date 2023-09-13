// Создаем объект, представляющий книгу
const book = {
  title: "",
  author: "",
  year: 0,

  // Метод для получения информации о книге
  getInfo: function () {
    return `Название книги: ${this.title}, Автор: ${this.author}, Год издания: ${this.year}`;
  },

  // Метод для установки названия книги
  setTitle: function (newTitle) {
    this.title = newTitle;
  },

  // Метод для установки автора книги
  setAuthor: function (newAuthor) {
    this.author = newAuthor;
  },

  // Метод для установки года издания книги
  setYear: function (newYear) {
    this.year = newYear;
  },
};

// Функция для получения информации о книге и вывода ее на страницу
function getBookInfo() {
  const output = document.getElementById("output");
  const title = document.getElementById("titleInput").value;
  const author = document.getElementById("authorInput").value;
  const year = parseInt(document.getElementById("yearInput").value);

  book.setTitle(title);
  book.setAuthor(author);
  book.setYear(year);

  output.textContent = book.getInfo();
}

// Функция для обновления информации о книге на основе введенных данных
function updateBookInfo() {
  getBookInfo();
}

// Добавление обработчика события на кнопку "Получить информацию"
document.getElementById("getInfoButton").addEventListener("click", getBookInfo);

// Добавление обработчика события на кнопку "Обновить информацию"
document
  .getElementById("updateInfoButton")
  .addEventListener("click", updateBookInfo);
