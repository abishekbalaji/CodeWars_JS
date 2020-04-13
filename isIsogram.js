function isIsogram(str){
    var arr = str.toLowerCase().split("").sort();
    var flag = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            flag = 1;
            break;
        }
    }
    return flag === 0;
  }

console.log(isIsogram("Helho"));