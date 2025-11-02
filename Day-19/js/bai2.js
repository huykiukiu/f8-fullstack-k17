const myArr = [
  ["hello", "world"],
  ["javascript", "php"],
  ["css", "html"],
];

// Tạo mảng mới viết hoa tất cả từ
const upperLetter = [];

for (let index in myArr) {
  const temp = [];
  for (let i = 0; i < myArr[index].length; i++) {
    temp.push(myArr[index][i].toUpperCase());
  }
  upperLetter.push(temp);
}
console.log(upperLetter);

//Lọc ra các từ có độ dài > 4.
const lengthGtFour = [];
for (let index in myArr) {
  for (let i = 0; i < myArr[index].length; i++) {
    if (myArr[index][i].length > 4) {
      lengthGtFour.push(myArr[index][i]);
    }
  }
}
console.log(lengthGtFour);

//Ghép tất cả thành 1 mảng 1 chiều.
const newArr = [];
for (let index in myArr) {
  for (let i = 0; i < myArr[index].length; i++) {
    newArr.push(myArr[index][i]);
  }
}
console.log(newArr);
