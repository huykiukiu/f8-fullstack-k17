const arr = [
  [1, 2, 3],
  [4, 5, 6],
];

let sumEven = 0;
const newArr = arr.flat(Infinity).forEach((value) => {
  if (value % 2 === 0) sumEven++;
});
console.log("số phần tử chẵn trong mảng là: " + sumEven);
