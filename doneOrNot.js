doneOrNot = board => {
  const check = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tran = board[0].map((col, i) => board.map(row => row[i]));
  let arrThree = [];
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j++) {
      arrThree.push(board[j].slice(i, i + 3));
    }
  }
  let arrFin = [];
  for (let i = 0; i < arrThree.length; i += 3) {
    arrFin.push(arrThree.slice(i, i + 3));
  }
  let arr = [];
  let arrNeed = [];
  for (let i = 0; i < arrFin.length; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        arr.push(arrFin[i][j][k]);
      }
    }
    arrNeed.push(arr);
    arr = [];
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (
        !(
          board[i].includes(check[j]) &&
          tran[i].includes(check[j]) &&
          arrNeed[i].includes(check[j])
        )
      )
        return "Try again!";
    }
  }
  return "Finished!";
};

console.log(
  doneOrNot([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8]
  ])
);
