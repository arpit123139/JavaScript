/* Arrays Method */

//Push Method

const arr = [10, 20, 30];
arr.push(40);
console.log(arr); // [ 10, 20, 30, 40 ]

//Length

console.log(arr.length);

//Pop Methood   --- Removes the last element

console.log(arr.pop());
console.log(arr); // [ 10, 20, 30 ]

//Soft Copy  -- They will point to the same address

const arr1 = arr;
arr[0] = 100;

console.log(arr1);

// Hard Copy  -- The address will be changed

const arr2 = [...arr]; // Spread operators
// const arr3=arr.slice()
arr2.pop();
console.log(arr);
console.log(arr2);

// Merge the two arrays  --- concat method

const ec = ["paris", "rome"];
const ac = ["tokyo", "bakgok"];

const merge = ec.concat(ac);
console.log(merge);

//includes  -- return either true or false

const x = ec.includes("paris");
