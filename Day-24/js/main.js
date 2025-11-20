const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const form = document.querySelector("form");
const taskContainer = document.querySelector("#container");
const LIST_TASK = [];
let id = 0;

//Xử lý add tasks
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //k add trường hợp chỉ có dấu cách
  if (!input.value.trim()) {
    alert("Không được để task là khoảng trắng!");
    return;
  }
  let isExist = false;
  //check add task mới bị trùng
  const arr = Array.from(taskContainer.children);
  arr.forEach((item) => {
    console.dir(item);
    const arr = Array.from(item.childNodes);
    arr.forEach((item) => {
      if (item.innerText === input.value) {
        isExist = true;
        return;
      }
    });
  });
  if (isExist) {
    alert(`Đã tồn tại task tên "${input.value}" rồi!!`);
    return;
  }
  //tạo khối div task cha
  const divTask = document.createElement("div");
  divTask.className =
    "task-box bg-[#8758FF] text-white rounded-md p-3 flex justify-between cursor-pointer mb-5 select-none";
  //Tạo key
  divTask.id = id;
  //tạo thẻ p bên trong khối div task
  const p = document.createElement("p");
  p.innerText = input.value;
  divTask.append(p);
  //tạo thẻ div bên trong khối div task bao bọc icon
  const div = document.createElement("div");
  div.className = "flex items-center gap-1";
  divTask.append(div);
  // tạo icon và thêm vào box-icon
  const iconEdit = document.createElement("i");
  const iconBin = document.createElement("i");
  iconEdit.className = "fa-solid fa-pen-to-square";
  iconEdit.dataset.id = id;
  iconEdit.id = "edit-btn";
  iconBin.id = "bin-btn";
  iconBin.className = "fa-solid fa-trash";
  iconBin.dataset.id = id;
  div.append(iconEdit);
  div.append(iconBin);
  taskContainer.append(divTask);
  LIST_TASK.push({
    id: id,
    value: input.value,
  });
  input.value = "";
  id++;
});

// Xử lý gạch tên task khi hoàn thành
taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.classList.toggle("line-through");
    e.target.classList.toggle("opacity-50");
  }
});

// Xử lý xóa task
taskContainer.addEventListener("click", (e) => {
  if (e.target.id === "bin-btn") {
    // console.dir(taskContainer);
    const arr = Array.from(taskContainer.children);
    arr.forEach((item) => {
      //   console.dir(item);
      //   console.log(item.id);
      //   console.log(e.target.dataset.id);
      if (item.id === e.target.dataset.id) {
        item.remove();
      }
    });
  }
  if (e.target.id === "edit-btn") {
    const taskItem = document.getElementById(e.target.dataset.id);
    taskItem.className = "";
    taskItem.innerHTML = `
    <form onsubmit="handleUpdateData(event, ${
      e.target.dataset.id
    })" class="mb-7">
        <div class="flex justify-center">
        <input
            class="flex-1 text-white outline-none border border-[#8758FF] bg-[#1A1A40] inline-block h-10 p-4 placeholder:text-sm placeholder:font-semibold placeholder:text-gray-500"
            type="text"
            placeholder="Update task"
            value=${
              LIST_TASK.find((item) => item.id == e.target.dataset.id).value
            }
            id="updateInput-${e.target.dataset.id}"
        />
        <button
            class="text-white text-sm font-semibold bg-[#8758FF] border-none inline-block p-2 select-none"
            type="submit"
        >
            Update Task
        </button>
        </div>
    </form>
    `;
  }
});

const handleUpdateData = (event, taskId) => {
  event.preventDefault();

  const taskItem = document.getElementById(taskId);

  const updateInput = document.querySelector(`#updateInput-${taskId}`);

  if (!updateInput.value.trim()) {
    alert("Không được để task là khoảng trắng!");
    return;
  }
  if (LIST_TASK.find((item) => item.value === updateInput.value.trim())) {
    alert(`Đã tồn tại task tên "${input.value}" rồi!!`);
    return;
  }

  const updatedItem = LIST_TASK.find((item) => item.id === taskId);
  updatedItem.value = updateInput.value;

  taskItem.className =
    "task-box bg-[#8758FF] text-white rounded-md p-3 flex justify-between cursor-pointer mb-5 select-none";
  taskItem.innerHTML = `
        <p>${updateInput.value}</p>
        <div class="flex items-center gap-1">
            <i class="fa-solid fa-pen-to-square" data-id=${taskId} id="edit-btn"></i>
            <i id="bin-btn" class="fa-solid fa-trash" data-id=${taskId}></i>
        </div>
        `;
};
