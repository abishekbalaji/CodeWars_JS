function highAndLow(numbers) {
    var sortedArray = numbers.split(" ").map(Number).sort((a,b) => a-b);
    var small = sortedArray[0];
    var big = sortedArray.reverse()[0];
    return big + " " + small; 
}

console.log(highAndLow("-100 2 100 3 1000 87"));