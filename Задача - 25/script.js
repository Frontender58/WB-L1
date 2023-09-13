// Функция, которая будет вызвана при нажатии на кнопку
function createAndStyleElement() {
  // Создаем новый элемент (в данном случае, <div>)
  const newElement = document.createElement("div");

  // Устанавливаем стиль для элемента с помощью CSS
  newElement.style.width = "200px";
  newElement.style.height = "200px";
  newElement.style.backgroundColor = "blue";
  newElement.style.color = "white";
  newElement.style.textAlign = "center";
  newElement.style.lineHeight = "200px";
  newElement.textContent = "Стилизованный элемент";

  // Добавляем созданный элемент в DOM
  const container = document.getElementById("container");
  container.appendChild(newElement);
}

// Добавляем обработчик события на кнопку
document
  .getElementById("createButton")
  .addEventListener("click", createAndStyleElement);
