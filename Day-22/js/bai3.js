const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

// Tính tổng tiền của từng đơn hàng.
const sumEachOrder = (orders) => {
  const newArr = orders.map((order) => {
    let sumPrice = 0;
    order.items.forEach((item) => {
      sumPrice += item.price * item.quantity;
    });
    return { ...order, sumPrice };
  });
  return newArr;
};
console.log("Data: ", sumEachOrder(orders));

// Tìm khách hàng có đơn hàng có tổng tiền cao nhất.
const highestTotalAmount = (orders) => {
  const newArr = sumEachOrder(orders);
  const highest = newArr.reduce((acc, cur) => {
    if (acc < cur.sumPrice) {
      acc = cur.sumPrice;
    }
    return acc;
  }, 0);
  let data;
  newArr.forEach((order) => {
    if (order.sumPrice === highest) {
      data = order;
    }
  });
  return data;
};
console.log(
  "Khách hàng có đơn hàng có tổng tiền cao nhất: ",
  highestTotalAmount(orders)
);

// Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.
const mergeProductList = (orders) => {
  const products = {};
  orders.forEach((order) => {
    order.items.forEach((item) => {
      if (products[item.name]) {
        products[item.name].quantity += item.quantity;
      } else {
        products[item.name] = { ...item };
      }
    });
  });
  return Object.values(products);
};
console.log("Danh sách: ", mergeProductList(orders));
