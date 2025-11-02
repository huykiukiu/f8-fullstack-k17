const myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sumRowArr = [];

// Tạo mảng chứa tổng từng hàng => [6, 15, 24].
for (let index in myArr) {
  let sum = 0;
  for (let i = 0; i < myArr[index].length; i++) {
    sum += myArr[index][i];
  }
  sumRowArr.push(sum);
}
console.log(sumRowArr);

//Tạo mảng chứa tổng từng cột => [12, 15, 18].
const sumColArr = [];
for (let col = 0; col < myArr.length; col++) {
  let sumCol = 0;
  for (row = 0; row < myArr.length; row++) {
    sumCol += myArr[row][col];
  }
  sumColArr.push(sumCol);
}
console.log(sumColArr);

//Lọc ra các hàng có tổng > 10.
const sumRowGtTen = [];
for (let index in myArr) {
  let sum = 0;
  for (let i = 0; i < myArr[index].length; i++) {
    sum += myArr[index][i];
  }
  if (sum > 10) {
    sumRowGtTen.push(myArr[index]);
  }
}
console.log(sumRowGtTen);
