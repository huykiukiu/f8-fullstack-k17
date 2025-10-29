const arr = [1, 2, 3, 4, 5, 6];
const squareNumbersArr = [];
const evenNumbersArr = [];
const squareNumbersButOddArr = [];

//Tạo mảng mới chứa bình phương của từng phần tử.
for (let squareNumber of arr) {
  squareNumbersArr[squareNumbersArr.length] = squareNumber * squareNumber;
}
console.log(squareNumbersArr);

//Tạo mảng mới chứa các số chẵn trong mảng.
for (let evenNumber of arr) {
  if (evenNumber % 2 === 0) {
    evenNumbersArr[evenNumbersArr.length] = evenNumber;
  }
}
console.log(evenNumbersArr);

//Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ.
for (let oddNumber of squareNumbersArr) {
  if (oddNumber % 2 !== 0) {
    squareNumbersButOddArr[squareNumbersButOddArr.length] = oddNumber;
  }
}
console.log(squareNumbersButOddArr);
