function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// n = 5
// 0 1 1 2 3
/* F(5) = F(4) - F(3)
   F(4) = F(3) - F(2)
   F(3) = F(2) - F(1)
   F(2) = F(1) - F(0)
   F(1) = 1
   F(0) = 0
--> F(2) = 1 + 0 = 1
    F(3) = 1 + 1 = 2
    F(4) = 1 + 2 = 3
    F(5) = 3 + 2 = 5
*/

function sumFibonaci(n) {
  if (n === 0) return 0;
  return fibonacci(n - 1) + sumFibonaci(n - 1);
}
console.log(sumFibonaci(3));

//sum(3)
/* 
--> f(2) + sum(2)
--> f(1)+ f(0) + f(1) + sum(1)
--> 2 + f(0) + sum(0)
2 + 0 + 0 = 2

*/
