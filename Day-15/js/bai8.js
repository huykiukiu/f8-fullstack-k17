// Cho trước 2 biến a, b. Gán giá trị số cho 2 biến.
// Yêu cầu: Hoán vị giá trị biến nhưng không được dùng biến trung gian
let a = 6;
let b = 4;
a = a + b;
b = a - b;
a = a - b;
console.log(`Giá trị của a: ${a}, Giá trị của b: ${b}`);
