count = 0;

var moveZeros = function(arr) {
  let newArr = arr.filter(elem => elem !== 0);
  let count = noOfZeroes(arr);
  for (let i = 0; i < count; i++) {
      newArr.push(0);
  }
  return newArr;
};

const noOfZeroes = (arr) => {
    count = 0;
    arr.forEach(element => {
        if (element === 0) count++;
    });
    return count;
}

console.log(moveZeros([1, 2, 3, 0, 4, 3, 0]));
