/* While loop */
let x = 1;
let sum = 0;
while (x <= 5) {
  sum += x;
  x++;
}
console.log(sum);

/* for loop */

sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

/* do while loop --- the loop will execute once even if the condition is not true*/
let tea = [];
let prompt;

do {
  prompt = prompt("Enter your favourite tea type");
  if (prompt != "stop") tea.push(prompt);
} while (tea != "stop");

/* for of loop */

x = [1, 2, 3, 4, 5];
for (const element of x) {
  console.log(element);
}

/*  for in loop  (Learning about prototype pending) */

x = { fname: "arpit", mname: "kumar", lname: "gajya" };
for (const key in x) {
  if (!x.hasOwnProperty(x, key)) continue;

  const element = object[key];
}

/* for each loop */

x = [1, 2, 3, 4, 5];
x.forEach((element) => {
  console.log(element); /* write the function to be executed in each element*/
});
