const names = [" hoang ", "AN", " f8 ", "Education"];
const trimLower = [];
const upperArr = [];

//mảng mới chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ.
for (let name of names) {
  trimLower[trimLower.length] = name.trim().toLowerCase();
}
console.log(trimLower);

//Tạo mảng mới viết chữ cái đầu hoa (Hoang, An, F8, Education)
for (let name of names) {
  upperArr[upperArr.length] =
    name.trim().toLowerCase().charAt(0).toUpperCase() +
    name.trim().toLowerCase().slice(1);
}
console.log(upperArr);
