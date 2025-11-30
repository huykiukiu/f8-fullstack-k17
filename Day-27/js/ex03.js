function retry(fn, times) {
  if (!times || times === 0) return;
  let result = fn();
  for (let i = 1; i < times; i++) {
    result = result.catch(fn());
  }
  return result;
}
let failingPromise = () => {
  return new Promise((resolve, reject) => {
    Math.random() > 0.7 ? resolve("Thành công") : reject("Thất bại");
  });
};
retry(failingPromise, 3).then(console.log).catch(console.error);
