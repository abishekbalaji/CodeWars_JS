function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    else if (num == 2) {
        return true;
    }else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(isPrime(-5));