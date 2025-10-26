function isSquareNumber(number) {
  if (number < 0) return false;
  for (let i = 1; i * i <= number; i++) {
    if (i * i === number) return true;
  }
  return false;
}

function printSquareNumber(number) {
  if (number <= 0) {
    console.log("Hãy nhập số lớn hơn 0");
  }
  console.log(`Các số chính phương trong khoảng từ 1 đến ${number} là:`);

  for (let i = 1; i <= number; i++) {
    if (isSquareNumber(i)) {
      console.log(i);
    }
  }
}

printSquareNumber(20);
