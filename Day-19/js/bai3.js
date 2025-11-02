const myArr = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
];

/* 
// main: myarr[0][0] = 2   myarr[1][1] = 10    myarr[2][2] = 18
// sub : myarr[0][2] = 6   myarr[1][1] = 10    myarr[2][0] = 14   
*/

// Lấy ra các phần tử trên đường chéo chính => [2, 10, 18].
const mainDiagonal = [];
for (let index in myArr) {
  for (let i = 0; i < myArr[index].length; i++) {
    if (+index === i) {
      mainDiagonal.push(myArr[index][i]);
    }
  }
}
console.log("Đường chéo chính: " + mainDiagonal);

//Lấy ra các phần tử trên đường chéo phụ => [6, 10, 14].
const secondaryDiagonal = [];
for (let i = 0; i < myArr.length; i++) {
  secondaryDiagonal.push(myArr[i][myArr.length - 1 - i]);
}
console.log("Đường chéo phụ: " + secondaryDiagonal);

//Tính tổng của đường chéo chính và phụ.
let sumMainDiaginal = 0;
let sumSecondaryDiagonal = 0;

for (let i = 0; i < myArr.length; i++) {
  sumMainDiaginal += myArr[i][i];
  sumSecondaryDiagonal += myArr[i][myArr.length - 1 - i];
}
console.log(
  "Tổng đường chéo chính và phụ: " + (sumSecondaryDiagonal + sumMainDiaginal)
);
