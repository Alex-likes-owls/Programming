/* Number 1 */
/* let arr = [1, 2, 11, 34, 0, 100];
const findMaxNumber = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input[0] < input[i]) {
      input[0] = input[i]
    }
  }
  console.log(input[0]);
}
findMaxNumber(arr); */

/* Number 5 */
/* let arr = [1, 2, 11, 34, 0, 100];
const Sort = (input) => {
  input.sort((a, b) => b - a);
  console.log(input);
}
Sort(arr); */

let arr = [1, 2, 11, 34, 0, 100];
const bblsort = (array) => {
  isSwapped = false;
  let s;
  for (let j = 0; j < array.length; j++) {
    isSwapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < arr[i + 1]) {
        s = array[i];
        array[i] = array[i + 1];
        array[i + 1] = s;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  console.log(array);
};
bblsort(arr);
/* Number 6 */
/* let arr = [1, 2, 11, 34, 0, 100];
const reverse = (input) => {
  for (let i = input.length; i >= 0; i--) {
    console.log(input[i]);
  }
}
reverse(arr); */

/* let arr = [1, 2, 11, 34, 0, 100];
const reverse = (input) => {
  input.reverse();
  console.log(input);
}
reverse(arr); */
