const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
  { userId: 1, videoId: "B1", duration: 10 },
];

// Tính tổng thời gian xem của từng video.
const calcdurationVideo = (arr) => {
  const data = {};
  arr.forEach((item) => {
    if (data[item.videoId]) {
      data[item.videoId].duration += item.duration;
    } else {
      data[item.videoId] = { ...item };
    }
  });
  return Object.values(data);
};
console.log(
  "Tổng thời gian xem của từng video: ",
  calcdurationVideo(watchHistory)
);

// Tìm video được xem nhiều nhất (dựa trên tổng thời gian)
const findMostDurationVideo = (arr) => {
  const newArr = calcdurationVideo(arr);
  const highest = newArr.reduce(
    (acc, cur) => (acc < cur.duration ? (acc = cur.duration) : acc),
    0
  );
  const data = newArr.filter((value) => value.duration === highest);
  return data;
};
console.log("video được xem nhiều nhất: ", findMostDurationVideo(watchHistory));

// Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.
// const watchHistoryByUserId = (arr) => {
//   const data = {};
//   arr.forEach((item) => {
//    if (da)
// });
// console.log(watchHistoryByUserId(watchHistory));
