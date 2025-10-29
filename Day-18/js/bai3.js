const nums = [3, 7, 2, 9, 12, 15, 18];
const numsGreate10 = [];
const numsDiv3 = [];
const oddNums = [];

//Lấy ra mảng mới chỉ chứa số lớn hơn hoặc bằng 10.
for (let num of nums) {
  if (num >= 10) {
    numsGreate10[numsGreate10.length] = num;
  }
}
console.log(numsGreate10);

//Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3.
for (let num of numsGreate10) {
  if (num % 3 === 0) {
    numsDiv3[numsDiv3.length] = num;
  }
}
console.log(numsDiv3);

//Với mảng ban đầu, với số nào lẻ thì nhân thêm hai rồi cho vào mảng mới
for (let num of nums) {
  if (num % 2 !== 0) {
    oddNums[oddNums.length] = num * 2;
  }
}
console.log(oddNums);
