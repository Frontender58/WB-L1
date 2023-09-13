// Функция для проверки числа на странность
function checkStrangeNumber() {
  const inputNumber = parseInt(document.getElementById("number").value);
  if (isNaN(inputNumber)) {
    document.getElementById("result").textContent =
      "Пожалуйста, введите корректное число.";
    return;
  }

  // Вызываем функцию для вычисления суммы делителей числа
  const sumOfDivisors = getSumOfDivisors(inputNumber);

  // Сравниваем сумму делителей с введенным числом
  if (sumOfDivisors === inputNumber) {
    document.getElementById("result").textContent =
      "Число " + inputNumber + " является странным.";
  } else {
    document.getElementById("result").textContent =
      "Число " + inputNumber + " не является странным.";
  }
}

// Функция для вычисления суммы делителей числа (кроме самого числа)
function getSumOfDivisors(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}

// Привязываем функцию к кнопке
document
  .getElementById("checkButton")
  .addEventListener("click", checkStrangeNumber);
