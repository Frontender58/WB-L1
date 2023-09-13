function calculateLocalStorageSize() {
  let maxSize = 0; // Объявление переменной для хранения максимального объема
  try {
    let tempData = ""; // Объявление временной переменной для создания данных
    while (true) {
      // Бесконечный цикл для добавления данных в LocalStorage
      tempData += "0".repeat(1024 * 1024); // Добавление 1 МБ данных к временным данным
      localStorage.setItem("tempData", tempData); // Запись временных данных в LocalStorage
      maxSize += 1024 * 1024; // Увеличение объема данных
    }
  } catch (error) {
    // Обработка ошибки, если достигнут максимальный объем
    console.log(`Максимальный объем LocalStorage: ${maxSize} байт.`);
  }
  localStorage.removeItem("tempData"); // Удаление временных данных
}

calculateLocalStorageSize();
