const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
  { name: "Chi", age: 22 },
];

// In ra tên của tất cả người dùng.
users.forEach((user) => {
  console.log(user.name);
});

// Tìm người có tuổi lớn nhất.
let userMaxAge = users.reduce((acc, cur) => (acc.age < cur.age ? cur : acc));
console.log(userMaxAge);

//Tính tuổi trung bình của tất cả người dùng.

let sumOldUser = users.reduce((acc, cur) => acc + cur.age, 0);
let averageAgeUsers = sumOldUser / users.length;
console.log(averageAgeUsers);
