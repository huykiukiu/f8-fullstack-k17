const listLi = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");
listLi.forEach((li) => {
  const up = li.querySelector(".up");
  const down = li.querySelector(".down");
  up.addEventListener("click", (e) => {
    e.stopPropagation();
    const preEl = li.previousElementSibling;
    if (!preEl) return;
    ul.insertBefore(li, preEl);
  });

  down.addEventListener("click", (e) => {
    e.stopPropagation();
    const nextEl = li.nextElementSibling;
    if (!nextEl) return;
    ul.insertBefore(nextEl, li);
  });

  li.addEventListener("click", (e) => {
    e.stopPropagation();
    console.dir(li);

    const selectedEl = ul.querySelector(".selected");
    li.classList.add("selected");
    if (selectedEl) {
      selectedEl.classList.remove("selected");
    }
  });

  //   xử lý nổi bọt của li
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // xử lý chuột phải:
  li.addEventListener("mousedown", (e) => {
    e.stopPropagation();

    if (e.button === 2) {
      //   tạo css và lấy vị trí chuột
      const css = {
        top: e.clientY + "px",
        left: e.clientX + "px",
      };
      // kiểm tra nếu có menu tồn tại thì xóa
      const menuExist = document.querySelectorAll(".menu");
      menuExist.forEach((menu) => menu.remove());

      // tạo menu mới khi click phải chuột
      const menu = document.createElement("div");
      menu.classList.add("menu");
      // xử lý nổi bọt của div menu:
      menu.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      const rename = document.createElement("p");
      rename.classList.add("rename");
      rename.innerText = "Đổi tên";
      //  xử lý sự kiện click đổi tên
      rename.addEventListener("click", () => {
        const menuExist = document.querySelectorAll(".menu");
        menuExist.forEach((menu) => menu.remove());
        // tạo lớp phủ
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.append(overlay);
        // SỰ KIỆN CLICK OVERLAY
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) {
            form.remove();
            overlay.remove();
          }
        });
        // tạo form input
        const form = document.createElement("form");
        // xử lý submit
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          overlay.remove();
        });
        const input = document.createElement("input");
        input.value = li.childNodes[0].textContent.trim();

        // xử lý đổi tên
        input.addEventListener("change", () => {
          li.childNodes[0].textContent = `${input.value} `;
        });

        const button = document.createElement("button");
        button.type = "submit";
        button.innerText = "Lưu";
        form.append(input, button);
        overlay.append(form);
        input.focus();
      });

      const remove = document.createElement("p");
      remove.classList.add("remove");
      remove.innerText = "Xóa";
      //xử lý sự kiện xóa
      remove.addEventListener("click", () => {
        li.remove();
      });
      li.append(menu);
      menu.append(rename, remove);
      Object.assign(menu.style, css);
    }
  });
});

// xử lý nhấn ra ngoài:
document.addEventListener("click", () => {
  const selectedEl = ul.querySelector(".selected");
  if (selectedEl) {
    selectedEl.classList.remove("selected");
  }

  // xử lý khi nhấn ra ngoài của menu
  const menuExist = document.querySelector(".menu");
  if (menuExist) {
    menuExist.remove();
  }
});

// xử lý sự kiện nhấn ESC để đóng menu:
document.addEventListener("keydown", (e) => {
  const menuExist = document.querySelector(".menu");
  if (e.key === "Escape") {
    menuExist.remove();
  }
});

// xử lý nhân bản bằng tổ hợp phím:
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.altKey) {
    if (e.key === "ArrowDown") {
      const selected = ul.querySelector(".selected");
      if (!selected) return;
      const cloneEl = selected.cloneNode(true);
      cloneEl.classList.remove("selected");
      const nextEl = selected.nextElementSibling;
      ul.insertBefore(cloneEl, nextEl);
    }
    if (e.key === "ArrowUp") {
      const selected = ul.querySelector(".selected");
      if (!selected) return;
      const cloneEl = selected.cloneNode(true);
      cloneEl.classList.remove("selected");
      ul.insertBefore(cloneEl, selected);
    }
  }
});
