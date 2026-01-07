/**
 * We will learn how to create classes but under the hood everything is an object and it works on the principle of prototype
 */

/**
 * Inheritence
 */

class Vechile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  // This is method (function inside the class is called)
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
// If we are not declaring the constructor then it will borrow from the Parent super() it will be hidden
class Car extends Vechile {
  drive() {
    return `I am driving ${this.model}`;
  }
}
let myCar = new Car("Toyota", "corola");
console.log(myCar.start());
console.log(myCar.drive());

class Car1 extends Vechile {
  constructor(make, model, weather) {
    super(make, model);
    this.weather = weather;
  }
  drive() {
    return `I am driving ${this.model} in a ${this.weather} weather ${this.make}`;
  }
}

let myCar1 = new Car1("Toyota", "corola", "Sunny");
console.log(myCar1.drive());

/**
 *
 * Encapsulation  -- Restric the direct access to the object Data
 */

class BankAccount {
  #balance = 0; //Encapsulating it

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

/**
 * Abstraction -- It hides the complex implementation Details
 */
class CoffeMachine {
  start() {
    // call Database -- any complex operations
    return `Starting the machine`;
  }

  breCoffeeee() {
    return `Brewing coffee`;
  }
}

let CCD = new CoffeMachine();
console.log(CCD.start()); // No need to think about the implementation details

/**
 * Polymorphism  --- > The ability of something to have or displayed in more than one form (fly method)
 */

class Bird {
  fly() {
    return `I am Flying`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins cannot Fly`;
  }
}
let penguin = new Penguin();
console.log(penguin.fly());

/**
 * Static method --- they are special things which can be access or called by the class
 */

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCal = new Calculator();
// console.log(miniCal.add(10,20)); this is not aceesible as the method is static
console.log(Calculator.add(10, 11));

/**
 *
 * Getters and Setters
 */

class Employee {
  #_salary;
  constructor(name, salary) {
    this.name = name;
    this.#_salary = salary;
  }

  //This is a property
  get Getsalary() {
    return `You are not allowed to see Salary`;
  }

  set Setsalary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#_salary = value;
    }
  }
}

let x = new Employee("arpit", "100");
console.log(x.Getsalary);
console.log(x._salary); // This should not be allowed so we will use encapsulation (using #)

//use Setter
x.Setsalary = -7000; // but the problem is if we do let y=new Employee("yash",'-7000') it does not perform any check and set this up because it is setting up in the constructor

// Modification for the above problem

class Employee1 {
  #_salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }

    this.name = name;
    this.#_salary = salary;
  }

  //This is a property
  get Getsalary() {
    return `You are not allowed to see Salary`;
  }

  set Setsalary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#_salary = value;
    }
  }
}
let y = new Employee1("yash", "-7000");
