/** Protype Based Programming Language
 *  Prototype-based programming is a style of programming where objects inherit directly from other objects, instead of from     classes
 *
 *
 *__proto__ is a reference inside an object that points to its prototype, while Array.prototype is the actual prototype object that contains all array methods.
* __proto__ is the property for the object Instance

prototype is an object that is used to share properties and methods among all instances created by a constructor function.
 */

let computer = { cpu: 12 };
let lenovo = { screen: "HD", __proto__: computer };
let tomHardware = {};

console.log(computer.__proto__); // Accessing the prototype
console.log(lenovo.__proto__);

let genericCar = { tyre: 4 };
let tesla = {
  driver: "AI",
};
Object.setPrototypeOf(tesla, genericCar);
console.log(tesla.tyre); // It will first search for its own property and then will go to its prototype (thhe parent) and so on till it reaches the Object prototype this is called prototype chaining

console.log(`Tesla`, Object.getPrototypeOf(tesla)); // this is simmmilar to lenovo.__proto__

/**
 * CONSTRUCTOR FUNCTION
 *  new keyword creates a new object instance
 * this gives the context of the newly created object instance
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let myself = new Person("Arpit", "22");

/**
 *
 * Person.protoype -- > this is a object which contains some shared methods and inherit Function.prototype which will further inherit Object.prototype
 *   Person.__proto__===Function.prototype   // true (Person is a function so it is pointing to Function.prototype)
 *
 *    myself.__proto__===Person.prototype  // true
 *
 *    myself.__proto__.__proto__===Object.prototype   (myself is an object so finallly poinying to Object.prototype)
 */

/**
 *
 * Person.prototype (In word docs)
 *
 */
/*Prototype  -- Here we cannot use setPrototype method becase it works only on Object not function*/
Person.prototype.gender = function () {
  return `${this.name} is a Male/Female`;
};

let myself1 = new Person("Yash", "45");

console.log(myself1.gender());
/**
 * Dynamic change of prototype because myself.__proto__ is holding a reference of Person.prototype (so the changes reflect Dynamically)
 */
console.log(myself.gender());

/**
 *    Person.prototype has a another method
 */
