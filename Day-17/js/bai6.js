function swap(str) {
  str = str.trim();
  let flag1 = str.indexOf(" ");
  let flag2 = str.lastIndexOf(" ");
  let newStr =
    str.slice(flag2 + 1) + str.slice(flag1, flag2 + 1) + str.slice(0, flag1);
  return newStr;
}
console.log(swap("Im just Huycute"));
