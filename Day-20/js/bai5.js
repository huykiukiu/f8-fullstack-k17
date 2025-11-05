const arr = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5],
];

const flatArr = arr.flat(Infinity);
const newArr = flatArr.filter((value, index) => {
  return flatArr.indexOf(value) === index;
});
console.log("Mảng mới : ", newArr);
