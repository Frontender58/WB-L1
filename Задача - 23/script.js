function analyzePassword() {
  // Получение введенного пароля
  const password = document.getElementById("password").value;

  // Проверка на отсутствие введенного пароля
  if (password === "") {
    document.getElementById("complexity").innerText = "Введите пароль";
    document.getElementById("suggestions").innerText = "";
    return;
  }

  // Проверка на длину пароля
  let lengthScore = password.length >= 8 ? 2 : 1;

  // Проверка на наличие уникальных символов
  let uniqueChars = Array.from(new Set(password.split(""))).length;
  let uniqueScore = uniqueChars >= 6 ? 2 : 1;

  // Проверка на наличие цифр
  let digitScore = /\d/.test(password) ? 2 : 1;

  // Проверка на наличие букв в разных регистрах
  let lowercaseScore = /[a-z]/.test(password) ? 1 : 0;
  let uppercaseScore = /[A-Z]/.test(password) ? 1 : 0;
  let caseScore = lowercaseScore + uppercaseScore;

  // Расчет итоговой оценки сложности пароля
  let totalScore = lengthScore + uniqueScore + digitScore + caseScore;

  let complexity; // Оценка сложности пароля
  let suggestions; // Рекомендации по улучшению пароля

  if (totalScore >= 8) {
    complexity = "Очень сложный";
    suggestions = "Ваш пароль очень сложный";
  } else if (totalScore >= 6) {
    complexity = "Сложный";
    suggestions = "Ваш пароль сложный, но может быть улучшен";
  } else if (totalScore >= 4) {
    complexity = "Средний";
    suggestions = "Ваш пароль средней сложности, рекомендуется улучшить";
  } else {
    complexity = "Слабый";
    suggestions = "Ваш пароль слабый, рекомендуется улучшить";
  }

  // Вывод результатов анализа на страницу
  document.getElementById("complexity").innerHTML =
    "Оценка сложности пароля: " + complexity;
  document.getElementById("suggestions").innerHTML =
    "Рекомендации: " + suggestions;
}
