// JSON, который вы хотите сконвертировать в строку
const jsonToConvert = '{"name": "Roamn", "age": 23, "city": "Penza"}';

// Функция для конвертации JSON в строку
function convertToJsonString() {
  try {
    //Парсим JSON
    const jsonObject = JSON.parse(jsonToConvert);

    // Конвертируем объект JSON обратно в строку
    const jsonString = JSON.stringify(jsonObject);

    // Выводим результат в консоль
    console.log(jsonString);
  } catch (error) {
    // В случае ошибки выводим сообщение об ошибке в консоль
    console.error("Ошибка при конвертации JSON: " + error.message);
  }
}

// Вызываем функцию для конвертации JSON в строку
convertToJsonString(jsonToConvert);
