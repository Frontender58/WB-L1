const functionArray = [
  function () {
    // Функция 1
    console.log("Утро " + currentIndex);
    setTimeout(invokeNextFunction, 1000); // Вызов следующей функции через 1 секунду (для большей видимости)
  },
  function () {
    // Функция 2
    console.log("Кофе " + currentIndex);
    setTimeout(invokeNextFunction, 1000); // Вызов следующей функции через 1 секунду (для большей видимости)
  },
  function () {
    // Функция 3
    console.log("Сигарета " + currentIndex);
    setTimeout(invokeNextFunction, 1000); // Вызов следующей функции через 1 секунду (для большей видимости)
  },
  // Добавьте другие функции по аналогии
];

let currentIndex = 0;

function invokeNextFunction() {
  // Функция вызова следующей функции
  if (currentIndex < functionArray.length) {
    // Проверка, если текущий индекс меньше длины массива функций
    const currentFunction = functionArray[currentIndex]; // Получение текущей функции из массива
    currentIndex++; // Увеличение текущего индекса
    setTimeout(currentFunction, 1000); // Вызов текущей функции через 1 секунду
  } else {
    console.log("Все функции выполнены"); // Вывод сообщения о выполнении всех функций
  }
}
