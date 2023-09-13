// Функция, которая принимает массив функций и возвращает новую функцию для вызова каждой функции и возврата массива результатов.
function executeFunctionsAndReturnResults(functionsArray) {
  const results = []; // Создаем пустой массив results для хранения результатов.

  // Итерируемся по массиву функций и вызываем каждую функцию, добавляя результат в массив results.
  for (const func of functionsArray) {
    results.push(func()); // Вызываем функцию и добавляем результат в массив results.
  }

  return results; // Возвращаем массив results после вызова всех функций.
}

// Объявление трех функций func1, func2 и func3, которые возвращают разные значения.
const func1 = () => "Утро";
const func2 = () => "Кофе";
const func3 = () => "Сигарета";

// Создаем массив arrayOfFunctions, содержащий эти три функции.
const arrayOfFunctions = [func1, func2, func3];

// Вызываем функцию executeFunctionsAndReturnResults, передавая ей массив arrayOfFunctions и сохраняем возвращаемый результат (массив результатов) в combinedFunction.
const combinedFunction = executeFunctionsAndReturnResults(arrayOfFunctions);

// Вызываем combinedFunction, чтобы получить результат и сохраняем его в resultsArray.
const resultsArray = combinedFunction;

// Выводим результат (массив результатов) в консоль.
console.log(resultsArray); // Выведет [1, 2, 3] в консоль.
