// Функция для изменения окончания слова в зависимости от числа
function enumerate(num, dec) {
  if (num > 100) num = num % 100;
  if (num <= 20 && num >= 10) return dec[2];
  if (num > 20) num = num % 10;
  return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
}

// Добавляем обработчик события на кнопку "Применить"
document.getElementById("applyButton").addEventListener("click", function () {
  // Получаем введенное число из текстового поля
  const count = parseFloat(document.getElementById("input").value);

  // Массивы окончаний для двух вариантов слов
  const usersDec = ["пользователь", "пользователя", "пользователей"];
  const messagesDec = ["сообщение", "сообщения", "сообщений"];

  // Изменяем окончания и выводим результат
  const wordArray =
    document.getElementById("wordSelector").value === "user"
      ? usersDec
      : messagesDec;
  document.getElementById("outputText").textContent =
    count + " " + enumerate(count, wordArray);
});
/* Проблема заключается в том, что определение правильного падежа для слова в русском языке зависит не только от числа, но и от контекста, грамматических правил и морфологических особенностей слова. Правильное склонение слова может изменяться в зависимости от падежа, рода, числа, и даже от согласования с другими словами в предложении.

Для того чтобы правильно склонять слова, необходимо учитывать множество факторов, и это делает задачу сложной и многогранной. Написание универсальной функции, которая бы правильно склоняла любые слова, вводимые пользователем, требовало бы более сложного и мощного лингвистического анализа, который выходит за рамки простой программы.

Таким образом, для более универсального и точного определения падежей слов в русском языке потребовалось бы более сложное решение, такое как использование естественного языкового обработчика (Natural Language Processing, NLP) и словарей с грамматической информацией. На практике это невозможно реализовать в простом JavaScript-коде без использования более мощных инструментов и библиотек, таких как Python и библиотеки для NLP, например, spaCy или NLTK.

Поэтому для создания более универсального инструмента для склонения слов на русском языке, потребуется использовать более сложные технологии и ресурсы. */
