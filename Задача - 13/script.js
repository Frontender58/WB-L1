// Создаем базовый класс Shape (фигура)
class Shape {
  constructor() {
    this.type = "Shape";
  }

  // Метод для расчета площади (по умолчанию 0)
  calculateArea() {
    return 0;
  }

  // Метод для расчета периметра (по умолчанию 0)
  calculatePerimeter() {
    return 0;
  }
}

// Создаем подкласс Rectangle (прямоугольник)
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.type = "Rectangle";
    this.width = width;
    this.height = height;
  }

  // Метод для расчета площади прямоугольника
  calculateArea() {
    return this.width * this.height;
  }

  // Метод для расчета периметра прямоугольника
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Создаем подкласс Circle (круг)
class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "Circle";
    this.radius = radius;
  }

  // Метод для расчета площади круга
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Метод для расчета периметра круга (длина окружности)
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Создаем подкласс Triangle (треугольник)
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.type = "Triangle";
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  // Метод для расчета площади треугольника по формуле Герона
  calculateArea() {
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3)
    );
  }

  // Метод для расчета периметра треугольника
  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Создаем экземпляры фигур
const rectangle = new Rectangle(4, 5);
const circle = new Circle(3);
const triangle = new Triangle(3, 4, 5);

// Выводим результаты расчетов в консоль
console.log(
  `${
    rectangle.type
  } - Площадь: ${rectangle.calculateArea()}, Периметр: ${rectangle.calculatePerimeter()}`
);
console.log(
  `${
    circle.type
  } - Площадь: ${circle.calculateArea()}, Периметр: ${circle.calculatePerimeter()}`
);
console.log(
  `${
    triangle.type
  } - Площадь: ${triangle.calculateArea()}, Периметр: ${triangle.calculatePerimeter()}`
);
