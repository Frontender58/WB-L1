// Функция для проверки, является ли строка палиндромом
function isPalindrome(str) {
  // Удаляем все пробелы из строки и приводим её к нижнему регистру
  str = str.replace(/\s/g, "").toLowerCase();

  // Проверяем, является ли строка палиндромом
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // Если символы на противоположных концах не совпадают, это не палиндром
    }
  }
  return true; // Если все символы совпали, это палиндром
}

// Функция, вызываемая при нажатии на кнопку "Проверить"
function checkPalindrome() {
  const inputElement = document.getElementById("inputString"); // Получаем элемент ввода
  const resultElement = document.getElementById("result"); // Получаем элемент для вывода результата

  const inputString = inputElement.value; // Получаем введенную строку из элемента ввода

  if (isPalindrome(inputString)) {
    resultElement.textContent = "Это палиндром!"; // Если строка палиндром, выводим сообщение
    resultElement.classList.remove("red-text"); // Удаляем класс с красным цветом (если есть)
    resultElement.classList.add("green-text"); // Добавляем класс с зеленым цветом
  } else {
    resultElement.textContent = "Это не палиндром!"; // Если строка не палиндром, выводим сообщение
    resultElement.classList.remove("green-text"); // Удаляем класс с зеленым цветом (если есть)
    resultElement.classList.add("red-text"); // Добавляем класс с красным цветом
  }
}
