let fullname = "Im just Huy cute";

for (let i = 1; i < fullname.length; i++) {
  fullname = fullname.trim();
  fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
  if (fullname.charAt(i) === " ") {
    fullname =
      fullname.slice(0, i + 1) +
      fullname.charAt(i + 1).toUpperCase() +
      fullname.slice(i + 2);
  }
}
console.log(fullname);
