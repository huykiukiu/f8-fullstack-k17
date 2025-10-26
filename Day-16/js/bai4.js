function isPrime(n) {
  if (n <= 1 || n % 1 !== 0) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let total = 0;
function getTotalPrime(n) {
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }
  console.log(`Tổng các số nguyên tố: ${total}`);
}

getTotalPrime(17);
