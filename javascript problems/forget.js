/* Number 1 */
/* const numbers = [];
numbers.push(1, 2, 3);
console.log(numbers); */

/* Number 1.b */
/* const fruits = ["apple", "banana"];
const orange = ["orange"];
const allFruits = fruits.concat(orange);
console.log(allFruits); */

/* Number 2 */
/* const names = ["Bataa", "Boldoo", "Nomin"];
console.log(names.indexOf("Nomin")); */

/* Number 2.b */
/* const age = [20, 30, 40];
console.log(age.includes(40)); */

/* Number 3 */
/* let number = prompt("Add the value of the number");
const square = (input) => {
  input = input ** 2;
  console.log(input);
  alert("The square of the number is " + input);
};
square(number); */

/* Number 3.b*/
/* let name = prompt("Add your name");
const greet = (input) => {
  alert("Hello, " + input + "!");
  console.log("Hello,", input + "!");
};
greet(name); */

/* Number 4 */
/* let colors = ["red", "green", "blue"];
colors.pop()
console.log(colors); */

/* Number 4.b */
/* const animals = ["dog", "cat", "elephant"];
animals.splice(0, 2);
console.log(animals); */

/* Number 5 */
/* const numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers); */

/* Number 5.b */
/* const numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers); */

/* Number 6 */
/* const firstArray = ["Mom", "am", "I"];
const secondArray = ["still", "young?"];
const Mitski = firstArray.concat(secondArray);
console.log(Mitski); */

/* Number 6.b */
/* const fruits = ["Алим", "гадил", "жүрж", "усан үзэм", "киви"];
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); */

/* Number 7 */
/* const numbers1 = [1, 2, 3];
const numbers2 = [4];
const newNumbers = [...numbers1, ...numbers2];
console.log(newNumbers); */

/* Numbers 7.b */
const colors = ["Улаан", "ногоон", "цэнхэр"];
const color = ["шар"];
const newColors = [...colors,...color];
console.log(newColors);