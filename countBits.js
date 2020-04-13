var countBits = function(n) {
  return n
    .toString(2)
    .split("")
    .filter(elem => elem === "1").length;
};

countBits(16);
