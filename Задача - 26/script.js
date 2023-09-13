function recursiveTraversal(node) {
  console.log(node.tagName); // Выводим имя тега текущего узла в консоль

  // Рекурсивно обходим всех детей текущего узла
  node.childNodes.forEach(function (childNode) {
    if (childNode.nodeType === Node.ELEMENT_NODE) {
      // Проверяем, что дочерний узел является элементом
      recursiveTraversal(childNode); // Вызываем функцию рекурсивно для дочернего узла
    }
  });
}

const container = document.getElementById("container"); // Получаем элемент с id "container" и сохраняем его в константу
recursiveTraversal(container); // Вызываем функцию для начала обхода дерева DOM
