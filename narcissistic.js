function narcissistic(value) {
  return value === Array.from(String(value), Number).reduce(
    (acc, val) => acc + (val ** String(value).length),
    0
  );
}

console.log(narcissistic(1634));
