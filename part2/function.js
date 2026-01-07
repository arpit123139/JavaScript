/*Arrow function */

function greet() {}
const greet1 = (price, quantity) => {
  return price * quantity;
};

/* Anonymous function */
const g1 = function () {};

console.log(greet1(499, 100));

/* First class / Higher order function  --- that takes function as a parameter */

function sayHello(name) {
  return `Hello, ${name}`;
}
function greeting(helloMessage, name) {
  return helloMessage(name);
}
// Pass `sayHello` as an argument to `greeting` function
console.log(greeting(sayHello, "JavaScript!"));

/*Closures ---> All the inner function has the access to the parameters of outer fxn */

function orderTea(name) {
  return function confirm(teaType) {
    return `Order confirmed ${teaType} by ${name}`;
  };
}

let x1 = orderTea("Arpit"); // this will return a function `confirm`
console.log(x1("Cardamon Tea"));

/**Exceptional case for closure with with var keyword inside the loop */

let res = [];
function y(number) {
  return `Hello my value is ${number}`;
}
function x() {
  var array = [10, 20, 30, 40];

  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    var x1 = function () {
      return y(item);
    };
    res.push(x1);
  }
}

x();
console.log(res[0]()); //Hello my value is 40
