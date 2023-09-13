// Использование глобального объекта Moment.js
function formatDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

console.log(formattedDate); // Вывод отформатированной даты
