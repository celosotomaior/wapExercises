const numbers = [1,2,3,4,5];
const sumOfSquares = (arr => arr.filter(n=> n%2===0).map(e => e*e).reduce((acc,sq) => acc+sq));
console.log(sumOfSquares(numbers));

