function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let x = new Person("Arpit");
x.greet();

/**
 * Arrow-Function ---- > They lexically bind this from where they are defined, not where they are called
 */
