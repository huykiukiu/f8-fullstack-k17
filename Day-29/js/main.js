const BASE_URL = "https://dummyjson.com";
const app = {
  _query: {
    order: "desc",
    limit: 10,
    page: 1,
  },
  _timeoutId: null,
  init() {
    this.getUsers();
    this.search();
    this.sort();
    this.paginate();
    this.getPostDetail();
    this.deletePost();
    this.editPost();
  },
  async getUsers() {
    try {
      //Add loading
      this.renderLoading();
      const skip = (this._query.page - 1) * this._query.limit;
      let url = `${BASE_URL}/posts?sortBy=id&order=${this._query.order}&limit=${this._query.limit}&skip=${skip}`;
      if (this._query.q) {
        url = `${BASE_URL}/posts/search?q=${this._query.q}&sortBy=id&order=${this._query.order}&limit=${this._query.limit}&skip=${skip}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch /posts");
      }
      const data = await response.json();
      const pageNumber = Math.ceil(data.total / this._query.limit);
      this.renderPosts(data.posts);
      this.renderPaginate(pageNumber);
    } catch (error) {
      //Add error
      this.renderError(error.message);
    } finally {
      //Remove loading
      this.renderLoading(false);
    }
  },

  renderPaginate(pageNumber) {
    const paginateEl = document.querySelector(".js-paginate");
    paginateEl.innerHTML = "";
    for (let page = 1; page <= pageNumber; page++) {
      const active = this._query.page === page ? "bg-green-600" : "";
      paginateEl.innerHTML += `<button class="border border-gray-300 px-4 py-2 ${active}">${page}</button>`;
    }
  },
  renderLoading(status = true) {
    const loadingEl = document.querySelector(".js-loading");
    loadingEl.innerHTML = status
      ? `<span class="block text-3xl text-center">Loading...</span>`
      : "";
  },
  renderError(message) {
    const postListEl = document.querySelector(".js-post-list");
    postListEl.innerHTML = `<span class="block text-3xl text-center">${message}</span>`;
  },
  renderPosts(posts) {
    const postListEl = document.querySelector(".js-post-list");
    postListEl.innerHTML = posts
      .map(
        (post) => `<div class="my-3 border border-gray-300 p-5" data-id="${
          post.id
        }">
          <h2 class="text-2xl font-medium mb-3">
            ${this.sanitizeText(post.title)}
          </h2>
          <p>
            ${this.sanitizeText(post.body)}
          </p>
          <div class="flex justify-between mt-3">
            <button
              class="js-detail-btn cursor-pointer border border-gray-300 py-2 px-5 hover:bg-green-600 rounded-full" 
              data-id="${post.id}"
            >
              Xem chi tiết
            </button>
            <div class="flex gap-2">
              <span class="js-edit-btn cursor-pointer" data-id="${
                post.id
              }">Sửa</span>
              <span class="js-delete-btn text-red-600 cursor-pointer" data-id="${
                post.id
              }">Xóa</span>
            </div>
          </div>
        </div>`
      )
      .join("");
  },
  sanitizeText(text) {
    return text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  },
  search() {
    const inputEl = document.querySelector(".js-search");
    inputEl.addEventListener("input", (e) => {
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
      }
      this._timeoutId = setTimeout(() => {
        const keyword = e.target.value;
        this._query.q = keyword;
        this._query.page = 1;
        this.getUsers();
      }, 500);
    });
  },
  debounce(callback, timeout = 500) {
    let id;
    return (...args) => {
      //args --> mảng
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => {
        callback.apply(null, args);
      }, timeout);
    };
  },
  sort() {
    const btnList = document.querySelectorAll(".js-sort button");
    btnList.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sortValue = btn.dataset.sort;
        const btnActive = document.querySelector(".js-sort .btn-active");
        if (btnActive) {
          btnActive.classList.remove("btn-active");
        }
        btn.classList.add("btn-active");
        this._query.order = sortValue;
        this.getUsers();
      });
    });
  },
  paginate() {
    const paginateEl = document.querySelector(".js-paginate");
    paginateEl.addEventListener("click", (e) => {
      const page = +e.target.innerText;
      this._query.page = page;
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      this.getUsers();
    });
  },
  getPostDetail() {
    const postListEl = document.querySelector(".js-post-list");
    postListEl.addEventListener("click", async (e) => {
      if (e.target.classList.contains("js-detail-btn")) {
        try {
          const response = await fetch(
            `${BASE_URL}/posts/${e.target.dataset.id}`
          );
          if (!response.ok) throw new Error("Failed to fetch");
          const data = await response.json();
          this.renderPostDetail(data);
        } catch (error) {
          console.log(error.message);
          alert(error.message);
        } finally {
        }
      }
    });
  },
  renderPostDetail(post) {
    const overlayEl = document.querySelector(".js-overlay");
    overlayEl.classList.remove("hidden");
    const postEditEl = document.querySelector(".js-post-edit");
    postEditEl.innerHTML = "";
    document.body.classList.add("overflow-hidden");
    const closeModalBtn = document.querySelector(".js-close-modal");
    closeModalBtn.addEventListener("click", () => {
      const overlayEl = document.querySelector(".js-overlay");
      overlayEl.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    });
    overlayEl.addEventListener("click", () => {
      overlayEl.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    });
    const postDetailEl = document.querySelector(".js-post-detail");
    postDetailEl.innerHTML = `<div class="border border-gray-300 max-w-[80%] bg-white p-2 mx-auto mt-60">
            <h1 class="font-bold mb-3">${this.sanitizeText(post.title)}</h1>
            <hr class="mb-3 border-gray-300"/>
            <p class="mb-3">${this.sanitizeText(post.body)}</p>
      </div>`;
  },
  deletePost() {
    const postListEl = document.querySelector(".js-post-list");
    postListEl.addEventListener("click", async (e) => {
      if (e.target.classList.contains("js-delete-btn")) {
        const result = confirm("Bạn có chắc chắn muốn xóa post này ?");
        if (!result) {
          return;
        }
        try {
          const response = await fetch(
            `${BASE_URL}/posts/${e.target.dataset.id}`,
            {
              method: "DELETE",
            }
          );
          if (!response.ok) throw new Error("Xóa thất bại");
          const data = await response.json();
          const deletePostEl = document.querySelector(`[data-id="${data.id}"]`);
          if (deletePostEl) deletePostEl.remove();
        } catch (error) {
          console.log(error.message);
          alert(error.message);
        }
      }
    });
  },

  editPost() {
    // Ngăn nổi bọt
    const postEditEl = document.querySelector(".js-post-edit");
    postEditEl.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    const postListEl = document.querySelector(".js-post-list");
    postListEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("js-edit-btn")) {
        const postId = e.target.dataset.id;
        const postDetailEl = document.querySelector(".js-post-detail");
        postDetailEl.innerHTML = "";
        const overlayEl = document.querySelector(".js-overlay");
        overlayEl.classList.remove("hidden");

        // tìm dữ liệu hiện tại của phần tử trong DOM
        const postWannaEdit = postListEl.querySelector(`[data-id="${postId}"]`);
        const title = postWannaEdit.querySelector("h2").innerText;
        const body = postWannaEdit.querySelector("p").innerText;

        const postEditEl = document.querySelector(".js-post-edit");
        postEditEl.innerHTML = `
        <form class="border border-gray-300 max-w-[80%] bg-white p-2 mx-auto mt-60">
            <h1 class="font-bold mb-3">Cập nhật bài viết</h1>
            <hr class="mb-3 border-gray-300"/>
            <input class="border block mb-2 w-full p-3" type="text" value="${title}" />
            <textarea class="border block w-full p-3 mb-2">${body}</textarea>
            <button class="hover:bg-blue-500 cursor-pointer border bg-green-700 text-white px-3" type="submit">Lưu</button>
        </form>`;

        const formEl = postEditEl.querySelector("form");
        formEl.addEventListener("submit", async (e) => {
          e.preventDefault();
          try {
            const inputEl = formEl.querySelector("input");
            const textAreaEl = formEl.querySelector("textarea");
            const dataJson = JSON.stringify({
              title: inputEl.value,
              body: textAreaEl.value,
            });
            const res = await fetch(`${BASE_URL}/posts/${postId}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: dataJson,
            });
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();

            // tìm phần tử cần edit trong Dom
            const postWannaEdit = document.querySelector(
              `[data-id="${data.id}"]`
            );
            if (!postWannaEdit) return;

            // cập nhật giá trị trong DOM
            postWannaEdit.querySelector("h2").innerText = `${data.title}`;
            postWannaEdit.querySelector("p").innerText = `${data.body}`;

            //   Xử lý nút Lưu
            const overlayEl = document.querySelector(".js-overlay");
            overlayEl.classList.add("hidden");
            document.body.classList.remove("overflow-hidden");
          } catch (error) {
            alert(error.message);
          }
        });

        // xử lý đóng modal:
        const closeModalBtn = document.querySelector(".js-close-modal");
        closeModalBtn.addEventListener("click", () => {
          const overlayEl = document.querySelector(".js-overlay");
          overlayEl.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        });

        overlayEl.addEventListener("click", () => {
          overlayEl.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        });
      }
    });
  },
};

app.init();
