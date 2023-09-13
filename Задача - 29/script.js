// Получаем форму по ее id
const form = document.getElementById("myForm");

// Определяем функцию-обработчик для события submit формы
form.addEventListener("submit", function (event) {
  // Отменяем стандартное поведение браузера для submit
  event.preventDefault();

  // Получаем значения полей формы
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  // Отображаем всплывающее окно с результатами
  window.alert("Имя: " + name + "\nВозраст: " + age);
});
