function evenAndOdd(a, b) {
  let odd = 0;
  let even = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      even += i;
    } else {
      odd += i;
    }
  }
  console.log(`Tổng số lẻ: ${odd}`);
  console.log(`Tổng số chẵn: ${even}`);
}

evenAndOdd(5, 9);
