/* Number one */
/* let a = prompt("Add the value for a");
let b = prompt("Add the value for b");
a = parseFloat(a);
b = parseFloat(b);
console.log("The max number is", Math.max(a, b));
alert("The max number is " + Math.max(a, b)); */

let a = prompt("Add the value for a");
let b = prompt("Add the value for b");
a = parseFloat(a);
b = parseFloat(b);
const large = () => {
  return Math.max(a, b);
};
let result = large(a, b);
console.log("The max number is ", result);
alert("The max number is " + result);

/* let a = prompt("Add the value for a");
let b = prompt("Add the value for b");
a = parseFloat(a);
b = parseFloat(b);
const large = () => {
  if (a > b) return a;
  else return b;
}
let result = large(a, b)
console.log("The max number is ", result);
alert("The max number is " + result); */

/* Second */
/* let l = prompt("Add length");
let h = prompt("Add height");
l = parseFloat(l);
h = parseFloat(h);
if (h > l) {
  console.log("It isn't flat");
  alert("Not flat");
} else {
  console.log("Flat");
  alert("Flat");
} */

/* Third */
/* let num = prompt("Add the number");
num=parseFloat(num);
let e = 0;
let o = 0;
while (num != 0) {
    if (num % 2 === 0){
        e+=1;
    }
    else {
        o+=1;
    }
    num -= 1;
}
console.log("The number of even numbers are ",e);
console.log("The number of odd numbers are ",o);
alert("The number of even numbers are "+e);
alert("The number of odd numbers are "+o);
 */

/* Four */
let f = prompt("Add value of your number");
f = parseFloat(f);
if (f % 3 == 0 && f % 5 == 0) {
  console.log("FizzBuzz");
  alert("FizzBuzz");
} else if (f % 3 == 0 && f % 5 != 0) {
  console.log("Fizz");
  alert("Fizz");
} else if (f % 3 != 0 && f % 5 == 0) {
  console.log("FizzBuzz");
  alert("Buzz");
} else if (!Number.isInteger(f)) {
  console.log("Not a number");
  alert("Not a number");
} else if (f % 3 != 0 && f % 5 != 0) {
  console.log("Input");
  alert("Input");
}

/* Five */
/* let speed = prompt("What was the speed?");
speed = parseFloat(speed);
if (speed <= 80) {
  console.log("0 points lost, able to drive");
  alert("0 points lost, able to drive");
} else {
    m = Math.round((speed - 80) / 5);
  if (m < 5) {
    if (m == 1) {
      console.log(m, " point lost, able to drive");
      alert(m + " point lost, able to drive");
    } else {
      console.log(m, " points lost, able to drive");
      alert(m + " points lost, able to drive");
    }
  } else {
    console.log(m, " points lost, unable to drive");
    alert(m + " points lost, unable to drive");
  }
}
 */
