function tickets(peopleInLine) {
    var counter = {
        25: 0,
        50: 0,
        100: 0
    };
    for (var i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] === 25) {
            counter[25] += 1;
        } else if (peopleInLine[i] == 50) {
            if (counter[25] > 0) {
                counter[50] += 1;
                counter[25] -= 1;
            } else {
                return "NO";
            }
        } else {
            if (counter[50] >= 1 && counter[25] >= 1) {
                counter[100] += 1;
                counter[50] -= 1;
                counter[25] -= 1;
            } else if (counter[25] >= 3) {
                counter[100] += 1;
                counter[25] -= 3;
            } else {
                return "NO";
            }
        }

    }
    return "YES";
}

// return obj;


console.log(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100]));