// Здесь может быть любой JSON
const jsonData = [
  { value: "HelloWorld 1" },
  { value: "HelloWorld 2" },
  { value: "HelloWorld 3" },
  { value: "HelloWorld 4" },
];

// Определение структуры узла списка
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Функция для создания полноценного односвязного списка из JSON данных
function createLinkedList(data) {
  let head = null;
  let tail = null;

  data.forEach((item) => {
    const newNode = new Node(item.value);

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  });

  return head;
}

// Создание полноценного односвязного списка из JSON данных
const linkedListHead = createLinkedList(jsonData);

// Вывод элементов односвязного списка в консоль (для демонстрации)
let currentNode = linkedListHead;
while (currentNode) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}

// Дополнительные операции с односвязным списком могут быть выполнены здесь
