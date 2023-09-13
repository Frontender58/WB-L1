// Функция, которую мы будем ожидать выполнения
function performAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Выполнение завершено");
    }, 2000);
  });
}

// Асинхронная функция, которая будет ожидать выполнения другой асинхронной операции
async function main() {
  try {
    // Используем ключевое слово await для ожидания выполнения асинхронной операции
    const result = await performAsyncTask();
    // Выводим результат в консоль
    console.log(result);
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

// Вызываем функцию main() при загрузке скрипта
main();
