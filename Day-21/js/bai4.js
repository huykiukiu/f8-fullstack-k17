const posts = [
  {
    id: 1,
    title: "JavaScript cơ bản",
    tags: ["js", "basic"],
    comments: [
      { user: "An", text: "Hay quá!" },
      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },
  {
    id: 2,
    title: "Học React không khó",
    tags: ["react", "js"],
    comments: [
      { user: "Chi", text: "Cảm ơn chia sẻ" },
      { user: "An", text: "huy mới thêm" },
    ],
  },
];

// In ra tất cả title kèm số lượng comments của từng bài viết.
posts.forEach((post) => {
  console.log(`${post.title}: có ${post.comments.length} comments`);
});

// Tạo mảng mới chứa tất cả tags (không trùng lặp).
const tagsList = [];
posts.forEach((post) => {
  for (let value of post.tags) {
    if (!tagsList.includes(value)) {
      tagsList.push(value);
    }
  }
});
console.log("mảng mới chứa tất cả tags (không trùng lặp): ", tagsList);

// Tìm tất cả các bình luận của user "An".
const findCommentsUser = [];
posts.forEach((post) => {
  for (let comment of post.comments) {
    if (comment.user === "An") {
      findCommentsUser.push(comment);
    }
  }
});
console.log('Tìm tất cả các bình luận của user "An": ', findCommentsUser);
