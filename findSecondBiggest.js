

function findSecondBiggest(nums) {

var maxElement = (nums.reduce((x,y) => Math.max(x,y)));

nums.splice(nums.indexOf(maxElement),1);

var secondMaxElement = (nums.reduce((x,y) => Math.max(x,y)));

return secondMaxElement;
}
console.log(findSecondBiggest([1,2,3,5,8,10]));



