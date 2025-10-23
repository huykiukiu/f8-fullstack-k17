/*
 Cho các biến:
let name = "";
let defaultName = "Khách";
Hãy gán cho biến displayName giá trị name nếu name có nội dung, ngược lại là defaultName. 
*/

let name = "";
let defaultName = "Khách";
let displayName;

if (name) {
  displayName = name;
} else {
  displayName = defaultName;
}
console.log(displayName);
