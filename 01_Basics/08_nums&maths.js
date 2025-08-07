// const score=100;
// console.log(score);

// const score2=new Number(100);
// console.log(score2);

// console.log(score2.toString().length);
// console.log(score2.toFixed(2)); // 100.00, formats the number to 2 decimal places

// // Returns String 
// // 1. Basic usage
// const num1 = 123.456;
// console.log(num1.toPrecision(4)); // "123.5"

// // 2. With rounding
// const num2 = 9.876;
// console.log(num2.toPrecision(2)); // "9.9"

// // 3. Small number
// const num3 = 0.004567;
// console.log(num3.toPrecision(2)); // "0.0046"

// // 4. Large number with scientific notation
// const num4 = 123456789;
// console.log(num4.toPrecision(3)); // "1.23e+8"

// // 5. Integer shown in scientific notation
// const num5 = 42;
// console.log(num5.toPrecision(1)); // "4e+1"


// const num=1000000;
// console.log(num.toLocaleString('en-US')); // "1,000,000", formats the number with commas
// console.log(num.toLocaleString('en-IN')); // "10,00,000", formats the number according to Indian numbering system

// // For DSA
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308, maximum value for a number in JavaScript
// console.log(Number.MIN_VALUE); // 5e-324, minimum value for a number in JavaScript

// ++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++
console.log(Math);
console.log(Math.PI); // 3.141592653589793, value of Pi
console.log(Math.abs(-4)); // 4, absolute value
console.log(Math.round(4.5)); // 5, rounds to the nearest integer
console.log(Math.ceil(4.1)); // 5, rounds up to the nearest integer
console.log(Math.floor(4.9)); // 4, rounds down to the nearest integer
console.log(Math.sqrt(16)); // 4, square root
console.log(Math.pow(2, 3)); // 8, 2 raised to the power of 3
console.log(Math.max(1, 2, 3, 4, 5)); // 5, maximum value from the list
console.log(Math.min(1, 2, 3, 4, 5)); // 1, minimum value from the list
console.log(Math.random()); // Random number between 0 ≤ value < 1
console.log((Math.random() * 10)+1); // to avoid 0
console.log(Math.floor(Math.random() * 10) + 1); // to get smaller value

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);