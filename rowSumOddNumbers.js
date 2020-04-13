function rowSumOddNumbers(n) {
    var sum = 0;
    var temp = n - 1;
    while (temp > 0) {
        for (var x = 0; x < temp; x++) {
            sum += 1;
        }
        temp--;
    }
    
    var count = 2 * sum + 1;
    var total = count;
    for (var i = 0; i < n - 1; i++) {
        count += 2;
        total += count;
    }
    return total;
}

console.log(rowSumOddNumbers(42));