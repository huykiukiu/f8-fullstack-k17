function fetchUser() {
  return new Promise((resolve) => setTimeout(() => resolve("User Data"), 2000));
}
function fetchPosts() {
  return new Promise((resolve) => setTimeout(() => resolve("Post Data"), 3000));
}
function fetchComments() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Comment Data"), 1000)
  );
}
const startTime = Date.now();
const promiseArr = [fetchUser(), fetchPosts(), fetchComments()];
Promise.all(promiseArr).then((data) => {
  const endTime = Date.now();
  console.log(data);
  console.log(
    "Tổng thời gian chạy của ba Promise: ",
    (endTime - startTime) / 1000 + "s"
  );
});
