// Создаем массив объектов "people" с информацией о людях
const people = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Eve", age: 20 },
  { name: "Roman", age: 23 },
];

// Функция сравнения для сортировки
function comparePeople(a, b) {
  // Сначала сравниваем возраст
  if (a.age < b.age) {
    return -1; // Если возраст "a" меньше возраста "b", возвращаем -1
  } else if (a.age > b.age) {
    return 1; // Если возраст "a" больше возраста "b", возвращаем 1
  } else {
    // Если возрасты равны, сравниваем имена
    return a.name.localeCompare(b.name);
    // Используем метод localeCompare() для сравнения имен по алфавиту
  }
}

// Сортируем массив "people" с использованием функции сравнения "comparePeople"
people.sort(comparePeople);

// Выводим отсортированный массив в консоль
console.log(people);
