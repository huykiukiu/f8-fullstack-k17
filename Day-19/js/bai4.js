const scores = [
  [8, 9, 7], // học sinh 1
  [6, 5, 7], // học sinh 2
  [10, 9, 8], // học sinh 3
];
// Tính điểm trung bình của từng học sinh => [8, 6, 9].
const averageScore = [];
let n = scores.length;
for (let index in scores) {
  let average = 0;
  for (let i = 0; i < n; i++) {
    average += scores[index][i];
  }
  average = average / n;
  averageScore.push(average);
}
console.log(averageScore);

//Lọc ra những học sinh có điểm trung bình >= 8.
const studentGtEight = [];
for (let index in scores) {
  let average = 0;
  for (let i = 0; i < n; i++) {
    average += scores[index][i];
  }
  average = average / n;
  if (average >= 8) {
    studentGtEight.push(scores[index]);
  }
}
console.log(studentGtEight);

// Tạo mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10).
const newArr = [];
for (let index in scores) {
  let newScore = [];
  for (let i = 0; i < n; i++) {
    if (scores[index][i] < 10) {
      newScore.push(scores[index][i] + 1);
    } else {
      newScore.push(scores[index][i]);
    }
  }
  newArr.push(newScore);
}
console.log(newArr);
