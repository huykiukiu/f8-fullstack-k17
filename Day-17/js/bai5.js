let str1 = "HUY IZ DA BEST";
let str2 = "just Huy Cute";

function isToUpperCase(str) {
  if (!str || typeof str !== "string") {
    return "Chỉ chấp nhận chuỗi, hãy nhập lại";
  }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i).toUpperCase()) return false;
    count++;
  }
  if (count !== str.length) return false;
  return true;
}

console.log(isToUpperCase("IM JUST HUY CUTE"));
