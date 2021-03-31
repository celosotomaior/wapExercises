function findLongestWord(arr) {

    var longest =0;
    var biggest;
    for (word in arr) {
        if(word.length > longest) {
            biggest = arr[word];
        }
    }
    return biggest;
}

console.log(findLongestWord(["amor","paz","uniao"]));