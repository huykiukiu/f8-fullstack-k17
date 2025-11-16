const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

// Lọc ra các sản phẩm thuộc danh mục "Electronics".
const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Lọc ra các sản phẩm thuộc danh mục Electronic: ", electronics);

// Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics"
const sumPrice = products
  .filter((product) => product.category === "Electronics")
  .reduce((acc, cur) => acc + cur.price, 0);
console.log(
  "Tổng giá của tất cả sản phẩm trong danh mục Electronic: ",
  sumPrice
);

// Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.
const newObj = {};
products.forEach((product) => {
  if (!newObj[product.category]) {
    newObj[product.category] = [];
  }
  if (newObj[product.category]) {
    newObj[product.category].push(product);
  }
});

console.log(newObj);
