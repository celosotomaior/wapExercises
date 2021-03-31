const numbers = [1,2,3,4,5];
const sumOfSquares = (arr => arr.map(e => e*e).reduce((acc,sq) => acc+sq));
console.log(sumOfSquares(numbers));