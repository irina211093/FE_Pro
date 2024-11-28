// 1. Домашнее задание: Работа с наследованием классов в JavaScript

// Создайте класс Employee с конструктором, принимающим параметры: имя (name), фамилия (surname) и название компании (company).
// Добавьте метод getFullName, который возвращает полное имя сотрудника в формате "Имя Фамилия".
// Создать производный класс.
// Создайте класс Developer, который наследует Employee.
// Используйте метод super для передачи параметров базовому классу.
// Добавить уникальный метод в производный класс.
// Добавьте в класс Developer метод getCompany, который возвращает название компании разработчика.
// Создать объект и протестировать методы.
// Создайте экземпляр класса Developer с данными (например, "Иван", "Иванов", "TechCorp").
// Вызовите методы getFullName и getCompany у объекта и убедитесь, что они возвращают ожидаемые значения.

class Employee {
    constructor(name, surname, company) {
      this.name = name;
      this.surname = surname;
      this.company = company;
    }
  
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
  }
  
  class Developer extends Employee {
    constructor(name, surname, company) {
      super(name, surname, company);
    }
  
    getCompany() {
      return this.company;
    }
  }
  
  const developer = new Developer("Иван", "Иванов", "TechCorp");
  
  console.log(developer.getFullName()); 
  console.log(developer.getCompany()); 

//   2. Домашнее задание: Продолжить то что делали на уроке
// Вызываете метод setStyle у объекта circle, чтобы задать ему стили. Вот что происходит:

// circle — это объект класса Circle, который является дочерним классом Shape.

// Метод setStyle: Принимает объект с CSS-стилями в формате ключ: значение, где ключ — это название CSS-свойства, а значение — его значение.
// В данном случае передан объект { background: "orange" }, который устанавливает стиль background (фон) элемента в значение "orange".

class Shape {
  constructor(className) {
    this.element = document.createElement("div");
    this.element.classList.add("shape", className);
  }

  render() {
    document.body.append(this.element);
  }

  setStyle(styles) {
    for (let [key, value] of Object.entries(styles)) {
      this.element.style[key] = value;
    }
  }
}

class Circle extends Shape {
  constructor() {
    super("circle"); 
  }
}

class Rectangle extends Shape {
  constructor() {
    super("rectangle"); 
  }
}

let circle = new Circle();
circle.setStyle({
  background: "orange",
  width: "100px",
  height: "100px",
  borderRadius: "50%", 
});
circle.render();

let rectangle = new Rectangle();
rectangle.setStyle({
  background: "blue",
  width: "150px",
  height: "80px",
});
rectangle.render();