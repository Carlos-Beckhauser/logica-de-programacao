import compare from "./calculator.js";

const numberList = [
  [5, 4],
  [3, 4],
  [0, 0],
  [25, 30],
  [157, 157.1],
];

/* for (let i = 0; i < numberList.length; i++) {
  compare(numberList[i][0], numberList[i][1]);
} */

/* let i = 0;
while (i < numberList.length) {
  compare(numberList[i][0], numberList[i][1]);
  i++;
} */

/* const result = compare(5, 4);
console.log(result);
 */

numberList.map(([x, y]) => {
  return compare(x, y);
});
