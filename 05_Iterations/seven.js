const nums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=nums.map((num)=>num+10);
// console.log(newNums);
// [11, 12, 13, 14, 15,16, 17, 18, 19, 20]


// Chaining
const newNums=nums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40);
console.log(nums);
console.log(newNums)