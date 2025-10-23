// Cho 1 số nguyên bất kỳ, hiển thị danh sách các số chẵn và số lẻ
let num = 10;
let oddNumber = "";
let evenNumber = "";
for (let i = 0; i <= num; i++) {
  if (i % 2 === 0) {
    const flag = num % 2 === 0 ? num : num - 1;
    evenNumber += `${i}${i === flag ? "" : ", "}`;
  } else {
    const flag = num % 2 !== 0 ? num : num - 1;
    oddNumber += `${i}${i === flag ? "" : ", "}`;
  }
}
console.log(`Số chẵn: ${evenNumber}`);
console.log(`Số lẻ: ${oddNumber}`);
