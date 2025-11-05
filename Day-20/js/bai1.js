const arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
arr.flat(Infinity).forEach((value) => (sum += value));
console.log(`Tổng các phần tử trong mảng là : ${sum}`);
