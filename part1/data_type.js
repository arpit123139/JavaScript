/*
String
Number
Boolean
Bigint

Undefined
null [Empty]

Object

Symbol [Make something unique]

In JavaScript we are not forced to define the datatype which declaring the variable
*/

/* 
                    Difference bwt var and let
if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // ✅ 10
console.log(y); // ❌ Error (y is block-scoped)

*/

let score = 102;
let name = "chaicode";
let isloggedin = false;

//object
let teaypes = ["milktea", "lemontea", "orange tea"];
let user = { firstname: "arpit", lastname: "Gajya" };

// undefined

let firstname;
console.log(firstname); // undefined

//null
let secondname = null;

// String

let myString = "Hello";
let username = "hitesh";

let oldGreet = `Hello ${username} !`; // String interpolation Technique

// Symbol -- It guarantee a uniqueness

let sm1 = Symbol();
let sm2 = Symbol();

// sm1 and sm2 are not same
console.log(sm1); //Symbol()

/*
Primitive Datatype  []
    String
    Boolean
    Number
    null
    undefined
    Symbol

Non-Prmitive Datatype []
    Object
    array
    functions

Primitive can be converted into Object using new keyword

    const score1 = new Number(10);
    console.log(typeof score1);
    object


*/

//                                                            NON-PRIMITIVE DATA TYPES

//object

const user1 = {
  firstname: "arpit",
  lastname: "gajya",
};

console.log(user1.firstname);
console.log(user1["firstname"]);

//In the above object we can change the firstname and lastname because it is not changing the memory references . How the thing works is for the object large part of the memory is reserved and internally they point to primitive data tupes so you are not changing the memory reference of the object (It will remain the same even if you change the primitive datatypes)

user1.firstname = "yash";
console.log(user1);

//Array

let names = ["arpit", "yash", "hello", true]; // can have different types
console.log(names[0]);

//Conversion
//Wierd case NaN (Not a number)

let isValue = "2abc";
console.log(Number(isValue)); //NaN (Not a number)

console.log(typeof Number(isValue));
