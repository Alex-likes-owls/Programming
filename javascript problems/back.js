/* Number 0 */
/* const showStars = (input) => {
  let stars = "";
  for (let i = 0; i < input; i++) {
    stars += "*";
    console.log(stars);
  }
};
showStars(5); */

/* Number 1 */
/* let arr = [1, 3, undefined, 5, null, ""];
let count = 0;
const countTruthy = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (arr[i]) {
      count += 1;
    }
  }
  return count;
};
countTruthy(arr);
console.log(count); */

/* Number 2 */
/* let car = {
  brand: "Toyota",
  name: "Prius",
  price: 20000000,
};
const obj_car = () => {
  for (const key in car) {
    console.log(key + "=", car[key]);
  }
}
obj_car(car); */

/* Number 3 */
/* let number = prompt("Add the value for the number");
number = parseFloat(number);
let count = 0;
const countNumbers = (input) => {
  for (let i = 1; i <= input; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      count = count + i;
    }
  }
  return count;
};
countNumbers(number);
console.log("The sum of numbers divisible by 3 or 5 is ", count);
alert("The sum of numbers divisible by 3 or 5 is " + count); */

/* Number 4 */
/* let arr = [90, 84, 100, 69, 63, 76, 100, 100, 91, 86, 100, 100, 100, 85];
let grade;
const average = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum = sum + input[i];
  }
  grade = Math.round(sum / input.length);
  return grade;
}
average(arr);
const GPA = () => {
  if (grade >= 95) {
    console.log("A, 4.0");
    alert("A, 4.0");
  } else if (grade >= 90 && grade <= 94) {
    console.log("A-, 3.6");
    alert("A-, 3.6");
  } else if (grade >= 85 && grade <= 89) {
    console.log("B, 3.1");
    alert("B, 3.1");
  } else if (grade >= 80 && grade <= 84) {
    console.log("B-, 2.7");
    alert("B-, 2.7");
  } else if (grade >= 75 && grade <= 79) {
    console.log("C, 2.3");
    alert("C, 2.3");
  } else if (grade >= 70 && grade <= 74) {
    console.log("C-, 1.9");
    alert("C-, 1.9");
  } else if (grade >= 65 && grade <= 69) {
    console.log("D, 1.4");
    alert("D, 1.4");
  } else if (grade >= 60 && grade <= 84) {
    console.log("D-, 1.0");
    alert("D-, 1.0");
  } else {
    console.log("F, 0");
    alert("F, 0");
  }
}
GPA(grade); */
/* Number 5 */
let number = prompt("Add value of number");
const isPrime = (input) => {
  if (input < 2) {
    return false;
  }
  for (let i = 2; i < input; i++) {
    if (input % i == 0) {
      return false;
    }
  }
  return true;
};
for (let i = 0; i < number; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
