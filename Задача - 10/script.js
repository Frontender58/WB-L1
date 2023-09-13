// Функция для конвертации строки в JSON с проверками
function convertToJsonString(jsonString) {
  try {
    // Проверяем, является ли переданная строка пустой или null
    if (!jsonString || jsonString.trim() === "") {
      throw new Error("Пустая строка. Пожалуйста, введите JSON.");
    }

    // Парсим строку в JSON
    const jsonObject = JSON.parse(jsonString);

    // Проверяем, является ли результат объектом JSON
    if (typeof jsonObject !== "object" || jsonObject === null) {
      throw new Error("Введенная строка не является корректным JSON.");
    }

    // Конвертируем объект JSON в строку
    const resultJsonString = JSON.stringify(jsonObject);

    // Возвращаем полученную строку
    return resultJsonString;
  } catch (error) {
    // В случае ошибки возвращаем сообщение об ошибке
    return "Ошибка при конвертации строки в JSON: " + error.message;
  }
}

// Пример использования функции
const inputString = '{"name": "Roman", "age": 23, "city": "Penza"}';
const result = convertToJsonString(inputString);
console.log(result);
