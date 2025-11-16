const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];

// Tính điểm trung bình của từng học viên.
const calcAverageScores = (arr) => {
  const newArr = arr.map((student) => {
    const scoreArr = Object.values(student.scores);
    const average = scoreArr.reduce((acc, cur) => acc + cur) / scoreArr.length;
    return { ...student, average };
  });
  return newArr;
};
console.log("Điểm trung bình của từng học viên: ", calcAverageScores(students));

// Tìm học viên có điểm trung bình cao nhất.
const highestAverage = (arr) => {
  const newArr = calcAverageScores(arr);
  let highest = 0;
  newArr.forEach((student) => {
    if (highest < student.average) {
      highest = student.average;
    }
  });
  const studentHighestAverage = newArr.filter((student) => {
    return student.average === highest;
  });
  return studentHighestAverage;
};
console.log("Học viên có điểm trung bình cao nhất: ", highestAverage(students));

// Sắp xếp danh sách học viên theo điểm trung bình giảm dần.
const calcAverage = (obj) => {
  const scoreArr = Object.values(obj.scores);
  const average = scoreArr.reduce((acc, cur) => acc + cur) / scoreArr.length;
  return average;
};
const sortList = students.sort((a, b) => calcAverage(b) - calcAverage(a));
console.log("Danh sách học viên theo điểm trung bình giảm dần: ", sortList);
