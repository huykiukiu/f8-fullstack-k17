const students = [
  { name: "Lan", scores: [8, 9, 7] },
  { name: "Huy", scores: [6, 5, 7] },
  { name: "Minh", scores: [9, 8, 10] },
];

// Tính điểm trung bình của từng học sinh.
const data = [];
students.map((student) => {
  const temp = {};
  const name = student.name;
  const averageScore =
    student.scores.reduce((acc, cur) => acc + cur) / student.scores.length;
  temp.name = name;
  temp.averageScore = averageScore;
  data.push(temp);
});
console.log("Điểm trung bình của từng học sinh là: ", data);

// Trả về danh sách học sinh đạt loại giỏi (điểm TB >= 8).
const studentList = [];
students.map((student) => {
  const averageScore =
    student.scores.reduce((acc, cur) => acc + cur) / student.scores.length;
  if (averageScore >= 8) studentList.push(student);
});
console.log("Danh sách học sinh đoạt loại giỏi là: ", studentList);

// Sắp xếp học sinh theo điểm trung bình giảm dần.
const calAverageScore = (arr) => {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  sum / arr.length;
  return sum;
};

const sortList = students.sort(
  (a, b) => calAverageScore(b.scores) - calAverageScore(a.scores)
);
console.log("Sắp xếp học sinh theo điểm trung bình giảm dần", sortList);
