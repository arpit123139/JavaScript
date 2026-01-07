const person = {
  name: "Arpit",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

person.greet(); // this=person ----------- > output =Hello Arpit
const x = person.greet;
x(); // undefined this==undefined (It will give error in strict mode as this is undefined)

const obj = {
  name: "JS",
  inner: {
    name: "Inner",
    show() {
      console.log(this.name);
    },
  },
};

obj.inner.show(); // "Inner"
obj.show1 = obj.inner.show;

obj.show1(); // JS as this=obj so obj.name=JS

/**
 * CALL
 */
function greet(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const user = { name: "Arpit" };

greet.call(user, "Pune", "India"); // (this==user NOTE:: this!=greet)

/**
 * bind
 */

function greet(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const user2 = { name: "Arpit" };

const boundGreet = greet.bind(user2, "Pune", "India");
boundGreet(); // this=user2 this!=undefined

/**
 * APPLY
 */
function greet(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const user1 = { name: "Arpit" };

greet.apply(user1, ["Pune", "India"]); // (this==user1 NOTE:: this!=greet)
