const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Mouse", price: 250000 },
  { name: "Keyboard", price: 800000 },
];

// Tạo mảng mới chỉ chứa tên sản phẩm.
const productName = [];
for (let index in products) {
  productName.push(products[index].name);
}
console.log(productName);

// Tính tổng giá trị tất cả sản phẩm.
let sumPrice = products.reduce((acc, cur) => acc + cur.price, 0);
console.log(sumPrice);

// Lọc ra sản phẩm có giá lớn hơn 1 triệu.
let product = products.filter((product) => product.price > 1000000);
console.log(product);
