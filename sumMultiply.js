function sum (arr){

    var sum = 0;
    for(e in arr) {
        sum = sum + arr[e];
    }
    return sum;
}
function multiply (arr){

    var multi = 1;
    for(e in arr) {
        multi = multi * arr[e];
    }
    return multi;
}

console.log(sum([1,2,3,99]));
console.log(multiply([1,3,3,3]));