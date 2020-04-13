function duplicateEncode(word){
    var result = '';
    for (var x = 0; x < word.length; x++) {
        var a = word[x];
        if ((word.toLowerCase().split(word[x].toLowerCase()).length - 1) > 1) {
            result += ')';
        }else {
            result += '(';
        }
    }
    return result;
}

console.log(duplicateEncode("Helloh"));