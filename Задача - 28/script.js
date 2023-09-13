// Функция для добавления нового элемента
function addNewElement() {
  // Получаем элемент шаблона по его id
  const template = document.getElementById("myTemplate");

  // Клонируем содержимое шаблона
  const clone = template.content.cloneNode(true);

  // Получаем элемент-контейнер, в который будем добавлять клонированный элемент
  const container = document.getElementById("container");

  // Добавляем клонированный элемент в контейнер
  container.appendChild(clone);
}
