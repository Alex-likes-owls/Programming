/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;
array.forEach((element) => {
  count += element;
});
console.log(count); */

/* Number 2 */
/* let array = ["apple", "banana", "peaches", "oranges"];
let first = [];
array.forEach((element) => {
  element = element.charAt(0).toUpperCase() + element.slice(1);
  first.push(element);
});
console.log(first); */

/* Number 3 */
/* let fruits = ["apple", "banana", "kiwi"];
let oranges = ["orange"];
console.log(fruits.concat(oranges)); */

/* Number 4 */
/* let number1 = [3, 2, 1];
let number2 = [5, 4, 10];
let numbers = number1.concat(number2);
const sorting = (input) => {
    input.sort((a, b) => a-b);
}
sorting(numbers);
console.log(numbers); */

/* Number 5 */
/* let names = ['Bataa','Amraa','Oyun'];
console.log(names.sort()); */

/* Number 6 */
/* let number = [1, 2, 3, 8, 7, 4, 5, 5, 0];
console.log(number.sort((a, b) => b - a));
 */

/* Number 7 */
/* let numbers = [2, 3, 105];
const lessThanHundred = (value) => value < 100;
if (numbers.every(lessThanHundred)) {
  console.log("array > 100");
} else {
  console.log("array < 100");
} */

/* Number 8 */
/* let names = ["amraa", "Ankhaa", "orgil"];
const containA = (value) => {
  return value.includes("A");
};
if (names.every(containA)) {
  console.log("YES");
} else {
  console.log("NO");
} */

/* Number 9 */
/* let numbers = [2, 3, 105, 5, -2, 10];
const even = numbers.filter((numbers) => numbers % 2 == 0);
console.log(even); */

/* Number 10 */
/* let fruits = ["banana", "apple", "kiwi", "strawberry"];
const overSix = fruits.filter((fruit) => fruit.length >= 6);
console.log(overSix);
*/
