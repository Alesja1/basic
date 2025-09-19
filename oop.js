// ООП - парадигма программирования,
//которая использует "объекты" для представления
//данных и методов для работы с этими данными.

//1. Класс и Объект (Class & Object
//класс - "чертеж" для создания объектов
//объект - экземпляр класса с собственными данными 
//object - instance of class

class Animal {
//конструктор - специальный метод
//для создания и инциализации объекта
//spesial method for creating and
//initializing an object created with a class

constructor(name, age) {
//this - ссылка на текущий объект
//reference to the current object
this.name = name;
this.age = age;
}
//метод - это функция внутри объекта
//method - a function inside an object
speak() {
    console.log(`${this.name} издает какой-то звук.`);
  }
  displayInfo() {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
  }
}

//создание объектов (экземпляров класса)
//creating objects (instances of a class)
const genericAnimal = new Animal(`Some animal`, 5);
const myDog = new Animal ("Шарик", 8);

genericAnimal.displayInfo();
myDog.displayInfo();
myDog.speak();

//2. Инкапсуляция (Encapsulation)
 //инкапсуляция - скрытие внутренней реализации от внешнего мира 
 //encapsulation - hiding internal implementation
 //или же - объединение данных и методов 
 //и работы с этими данными в одном классе

 console.log(`---Инкапсуляция---`);

 class BankAccount {
    //# - означает, что свойство приватное
    //private property

    #balance =0; //приватное свойство 
    //private property
    constructor(initialBalance) {
        if(initialBalance > 0) {
            this.#balance = initialBalance;
    }
}
//публичный метод для снятия денег
//public method for depositing money
deposit(amount) {
    if(amount > 0) {
        this.#balance += amount;
        console.log(`Внесено: ${amount}.Новый баланс: ${this.#balance}`);
     }
}
//публичный метод для снятия денег
//public method for withdrawing money
withdraw(amount) {
    if(amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(` Снято: ${amount}. Новый баланс: ${this.#balance}`);
     }else {
        console.log(` Недостаточно средств или неверная сумма.`);
     }
    }
//приватный метод для получения баланса
//private method for getting balance
#getBalance() {
  return this.#balance;
}

 }

 const myAcount = new BankAccount(100);
 myAcount.deposit(50);
 myAcount.withdraw(30);
 //console.log(myAccount.#balance); //Ошибка: приватное свойство
 //myAccount.#getbalance; // Ошибка: приватный метод

 //3. Наследование (Inheritance)
 //наследование - создание нового класса на основе существующего
 //inheritance - creating a new class based on an existing one
 console.log(`---Наследование---`);

 class Dog extends Animal {
  constructor(name,age,breed) {
    //super - вызов конструктора родительского класса
    //call the parent class constructor
    super(name,age);
    this.breed = breed; //добавляем свое, новое свойство
  }
//переопределение метода speak
//overriding the speak method
speak() {
  console.log(`${this.name} лает: гав-гав.`);
}

//Можно вызывать и родительский метод внутри дочернего
displayInfo() {
  super.displayInfo(); //родительский //parent
  console.log(`Порода: ${this.breed}`);
  }
}

const newDog = new Dog ("Бобик", 5, "Овчарка");
newDog.displayInfo(); //вызовет оба метода: родительский и дочерний.Parent and child method
newDog.speak(); //Вызовет переопределенный метод. Call the overridden method

//4. Полиморфизм (Polymorphism)
console.log("Полиморфизм");

class Cat extends Animal {
  //переопределим метод speak. Overraide method speak()
  speak() {
    console.log(`${this.name} мяукает: Мяуу!`);
     }
     }
     
     const myCat = new Cat("Васька", 2);

     //создадим массив из разных объектов и вызовем один и тот же метод
     //create an array of different objects and call the same method

     const animals = [myCat,newDog, new Animal("Нечто", 1)];

     //проходим по массиву и вызываем один и тот же метод speak()
     //в зависимости от класса объекта будет вызвана своя реализация этого метода
     //iterate through the array and call the same method speak()
     //depending on the class of the object, its specific
     //implementation of this method will be called

     animals.forEach(animal => {
      animal.speak();
     });