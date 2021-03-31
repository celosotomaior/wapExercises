
var numbers = [2,3,5,8,9];

//Sum
const sumOfNumbers = (arr => arr.reduce((acc,sq) => acc+sq));

console.log(sumOfNumbers(numbers));

//Multiplication
const multiOfNumbers = (arr => arr.reduce((acc,sq) => acc*sq));

console.log(multiOfNumbers(numbers));