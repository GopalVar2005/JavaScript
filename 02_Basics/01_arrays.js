// here arrays are resizable and mix of data types is allowed
// here shallow copies(same reference points) are made during copy operations
//Deep Copies(different reference points) are not supported natively
// const arr= [1, 2, 3, 'four', true, null];
// const arr2=new Array(1, 2, 3, 'four', true, null);
// console.log(arr); // Output: [ 1, 2, 3, 'four', true, null ]
// console.log(arr.length); // Output: 6
// console.log(arr[3]); // Output: 'four'

// // Array methods
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.unshift(0);// time consuming operation
// console.log(arr);
// arr.shift();
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));

// // const newArr=arr.join();
// const newArr=arr.join('-');
// console.log(newArr); // Output: '1,2,3,four,true,null'
// console.log(typeof newArr); // Output: 'string'

//IMP
//Splice changes the original array and returns the removed elements
//Slice does not change the original array and returns a new array
const arr=[0,1,2,3,4,5,6];
console.log("A ",arr);
console.log(arr.slice(1,3));
console.log("B ",arr);
console.log(arr.splice(1,3));
console.log("C ",arr); 
