function calcBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    return "Dữ liệu không hợp lệ";
  }
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    return "Thiếu cân";
  } else if (BMI < 23) {
    return "Bình thường";
  } else if (BMI < 25) {
    return "Thừa cân";
  } else {
    return "Béo phì";
  }
}

console.log(calcBMI(60, 1.76));
