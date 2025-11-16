const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];

// Tính tổng lương của từng phòng ban.
const sumSalaryOfDepartment = (employees) => {
  const data = {};
  employees.forEach((employee) => {
    let totalAmount = 0;
    if (data[employee.department]) {
      data[employee.department].salary += employee.salary;
    } else {
      data[employee.department] = {
        department: employee.department,
        salary: employee.salary,
      };
    }
  });
  return Object.values(data);
};

console.log(
  "Tổng lương của từng phòng ban: ",
  sumSalaryOfDepartment(employees)
);

// Tìm nhân viên có mức lương cao nhất trong mỗi phòng ban.
const findEmpHighestSalary = (employees) => {
  const highest = employees.reduce(
    (acc, cur) => (acc < cur.salary ? (acc = cur.salary) : acc),
    0
  );
  const data = employees.filter((employee) => employee.salary === highest);
  return data;
};
console.log(findEmpHighestSalary(employees));

// Chuyển đổi dữ liệu về dạng object, trong đó key là tên phòng ban, value là mảng nhân viên trong phòng ban đó.
const convertToObject = (employees) => {
  const data = {};
  employees.forEach((employee) => {
    if (!data[employee.department]) {
      data[employee.department] = [];
    }
    data[employee.department].push(employee);
  });
  return data;
};
console.log(convertToObject(employees));
