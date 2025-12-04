// Hàm render các post
const render = (data) => {
  data.posts.map((item) => {
    const postList = document.querySelector(".post-list");
    const post = document.createElement("div");
    post.className = "border border-gray-300 p-2 mb-3";

    const title = document.createElement("h1");
    title.innerText = `${item.title}`;
    title.className = "font-bold mb-1";

    const p = document.createElement("p");
    p.innerText = `${item.body}`;
    p.className = "text-sm mb-3";

    const buttonBox = document.createElement("div");
    buttonBox.className = "flex justify-between";

    const detailBtn = document.createElement("button");
    detailBtn.innerText = "Xem chi tiết";
    detailBtn.dataset.id = `${item.id}`;
    detailBtn.className =
      "detail-btn block border border-gray-300 rounded-full px-3 cursor-pointer hover:bg-green-500 hover:text-white";

    const div = document.createElement("div");
    div.className = "flex gap-2";

    const editBtn = document.createElement("button");
    editBtn.className = "text-red-500 cursor-pointer";
    editBtn.innerText = "Sửa";
    editBtn.dataset.id = `${item.id}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "cursor-pointer";
    deleteBtn.innerText = "Xóa";
    deleteBtn.dataset.id = `${item.id}`;

    postList.append(post);
    post.append(title, p, buttonBox);
    buttonBox.append(detailBtn, div);
    div.append(editBtn, deleteBtn);
  });
};

// Xử lý lấy tất cả bài đăng
const getAllPosts = async () => {
  try {
    const loading = document.querySelector("#loading");
    loading.classList.remove("hidden");
    const res = await fetch(`https://dummyjson.com/posts`);
    if (!res.ok) {
      throw new Error("Failed to fetch data !!!!");
    }
    const data = await res.json();
    render(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.classList.add("hidden");
  }
};
getAllPosts();

// Xử lý tìm kiếm bài đăng
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("change", (e) => {
  searchByKeyword(searchInput.value);
});

const searchByKeyword = async (keyword) => {
  try {
    if (!keyword || keyword.trim() === "") {
      const loading = document.querySelector("#loading");
      loading.classList.remove("hidden");
      getAllPosts();
      return;
    }
    const postList = document.querySelector(".post-list");
    postList.innerHTML = "";
    const loading = document.querySelector("#loading");
    loading.classList.remove("hidden");
    const res = await fetch(`https://dummyjson.com/posts/search?q=${keyword}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data !!!!");
    }
    const data = await res.json();
    render(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.classList.add("hidden");
  }
};

// Xử lý sắp xếp
// sắp xếp theo post mới nhất
const sortByLatest = async () => {
  try {
    const loading = document.querySelector("#loading");
    loading.classList.remove("hidden");
    const res = await fetch("https://dummyjson.com/posts?sortBy=id&order=desc");
    if (!res.ok) {
      throw new Error("Failed to fetch data !!!!");
    }
    const data = await res.json();
    console.log(data);
    render(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.classList.add("hidden");
  }
};

const latestSortBtn = document.querySelector("#latest-post");
latestSortBtn.addEventListener("click", () => {
  const activeSortBtn = document.querySelector(".active");
  if (activeSortBtn) {
    activeSortBtn.classList.remove("bg-yellow-200");
    activeSortBtn.classList.remove("active");
  }
  const oldestSortBtn = document.querySelector("#oldest-post");
  latestSortBtn.classList.add("bg-yellow-200");
  latestSortBtn.classList.add("active");
  const postList = document.querySelector(".post-list");
  postList.innerHTML = "";
  sortByLatest();
});

// Sắp xếp theo post cũ nhất
const sortByOldest = async () => {
  try {
    const loading = document.querySelector("#loading");
    loading.classList.remove("hidden");
    const res = await fetch("https://dummyjson.com/posts?sortBy=id&order=asc");
    if (!res.ok) {
      throw new Error("Failed to fetch data !!!!");
    }
    const data = await res.json();
    console.log(data);
    render(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.classList.add("hidden");
  }
};

const oldestSortBtn = document.querySelector("#oldest-post");
oldestSortBtn.addEventListener("click", () => {
  const activeSortBtn = document.querySelector(".active");
  if (activeSortBtn) {
    activeSortBtn.classList.remove("bg-yellow-200");
    activeSortBtn.classList.remove("active");
  }
  oldestSortBtn.classList.add("bg-yellow-200");
  oldestSortBtn.classList.add("active");
  const postList = document.querySelector(".post-list");
  postList.innerHTML = "";
  sortByOldest();
});

// Xử lý xem chi tiết post
const renderPostDetai = (data) => {
  const postDetail = document.querySelector(".post-detail");
  postDetail.innerHTML = "";
  const post = document.createElement("div");
  post.className = "border border-gray-300 bg-white p-2 mx-auto w-[80%] mt-35";

  const title = document.createElement("h1");
  title.innerText = `${data.title}`;
  title.className = "font-bold mb-3";

  const hr = document.createElement("hr");
  hr.classList.add("mb-3");

  const p = document.createElement("p");
  p.innerText = `${data.body}`;
  p.className = "text-sm mb-3";
  postDetail.append(post);
  post.append(title, hr, p);
};

const getPostDetail = async (id) => {
  try {
    const loading = document.querySelector("#loading");
    loading.classList.remove("hidden");
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data !!!!");
    }
    const data = await res.json();
    console.log(data);
    renderPostDetai(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.classList.add("hidden");
  }
};

const detailBtn = document.querySelector("#detail-btn");
const postList = document.querySelector(".post-list");
postList.addEventListener("click", (e) => {
  if (e.target.classList.contains("detail-btn")) {
    const overlay = document.querySelector("#overlay");
    // overlay.addEventListener("click", () => {
    //   overlay.classList.remove("hidden");
    // });
    overlay.classList.remove("hidden");
    const closeModalBtn = overlay.querySelector("#close-modal");
    closeModalBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    });
    document.body.classList.add("overflow-hidden");
    getPostDetail(e.target.dataset.id);
  }
});

// xử lấy overlay click:
const overlay = document.querySelector("#overlay");
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});
