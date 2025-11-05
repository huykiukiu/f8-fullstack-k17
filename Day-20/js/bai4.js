const arr = [[3, 9], [1, 5, 10], [8]];
const max = arr.flat(Infinity).reduce((acc, value) => {
  if (acc < value) return value;
  return acc;
});
console.log("số lớn nhất là: " + max);
