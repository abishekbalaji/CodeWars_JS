const prime = num => {
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function gap(g, m, n) {
  let count = 0;
  let arr = [];

  for (i = m; i <= n; i++) {
    if (prime(i)) {
      arr.push(i);
      count++;
      if (count >= 1) {
        if (arr[count] - arr[count - 1] === g)
          return [arr[count - 1], arr[count]];
      }
    }
  }
  return null;
}

console.log(gap(2, 3, 50));
// console.log(Math.sqrt(3));

// for (let i = 2; i < Math.sqrt(3) + 1; i++) {
//     console.log(i);
// }
