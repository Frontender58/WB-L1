/*В Firefox для доступа к свойству maxStackSize объекта PerformanceMemory необходимо установить параметры конфигурации в about:config. В адресной строке браузера необходимо ввести "about:config", а затем найти опцию "javascript.options.mem.gc_debt_throttle_ratio". Необходимо установить ее значение в 1, чтобы включить вывод информации о размере стека.

После этого вы можете использовать следующий код для вывода размера стека в консоль Firefox: */
// Функция для получения размера стека
function getStackSize() {
  // Проверяем, поддерживает ли браузер объект PerformanceMemory
  if (
    performance.memory !== undefined &&
    performance.memory.jsHeapSizeLimit !== undefined
  ) {
    // Получаем размер стека с помощью свойства maxStackSize
    let stackSize = performance.memory.maxStackSize;
    console.log("Размер стека: " + stackSize + " байт");
  } else {
    console.log("Браузер не поддерживает измерение размера стека");
  }
}

// Получаем кнопку по ее ID
let stackSizeButton = document.getElementById("stackSizeButton");
// Добавляем обработчик события для клика на кнопку
stackSizeButton.addEventListener("click", getStackSize);

/* Получение точного числового значения call stack из кода JavaScript в браузерах: "Google Chrome", "Opera", "Safari" не предоставляется, поскольку оно является внутренней информацией для браузера и языка выполнения JavaScript. */