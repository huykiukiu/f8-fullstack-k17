const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];

// Tính số trận thắng, hòa, thua của mỗi đội.
function analysis(matches) {
  matches.forEach((match) => {});
}

// const watchHistory = [
//   { userId: 1, videoId: 'A1', duration: 10 },
//   { userId: 2, videoId: 'B1', duration: 15 },
//   { userId: 1, videoId: 'A1', duration: 20 },
//   { userId: 3, videoId: 'C1', duration: 30 },
//   { userId: 2, videoId: 'B1', duration: 5 },
//   { userId: 1, videoId: 'A2', duration: 25 },
//   { userId: 3, videoId: 'C1', duration: 15 },
// ];

// const listWatchHistoryByUser = [];
// watchHistory.forEach(wh => {
//   if (!listWatchHistoryByUser.find(user => user.userId === wh.userId)) {
//     const listVideo = watchHistory.filter(item => item.userId === wh.userId).map((item) => item.videoId);
//     const listVideoNotDup = listVideo.filter((item, index) => listVideo.indexOf(item) === index).map((item) => ({
//       videoId: item,
//       duration: watchHistory.filter(z => z.userId === wh.userId && z.videoId === item).reduce((total, o) => {return total + o.duration}, 0)
//     }));

//     listWatchHistoryByUser.push({
//       userId: wh.userId,
//       videos: listVideoNotDup
//     });
//   }
// });

// console.log(listWatchHistoryByUser);
