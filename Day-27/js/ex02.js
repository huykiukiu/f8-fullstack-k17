function fetchFromServer1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Server 1 Response"), 3000)
  );
}
function fetchFromServer2() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Server 2 Response"), 2000)
  );
}
function fetchFromServer3() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Server 3 Response"), 1000)
  );
}

const promiseArr = [fetchFromServer1(), fetchFromServer2(), fetchFromServer3()];
Promise.race(promiseArr).then((data) => {
  console.log(data);
});
