//Number
// let score = "33";

// console.log(typeof(score));
// console.log(typeof score);

// let scoreNumber = Number(score); // Convert string to number
// console.log(typeof(scoreNumber));


// let score2 = "33abc"; // Invalid number string

// console.log(typeof(score2));
// console.log(typeof score2);

// let scoreNumber2 = Number(score); // Convert string to number
// console.log(typeof(scoreNumber2));
// console.log(scoreNumber2); // NaN (Not a Number) because "33abc" is not a valid number

// let score = null;

// console.log(typeof(score));
// console.log(typeof score);

// let scoreNumber = Number(score); // Convert string to number
// console.log(typeof(scoreNumber));
// console.log(scoreNumber); // 0, because null is converted to 0 in numeric context


// let score = undefined;

// console.log(typeof(score));
// console.log(typeof score);

// let scoreNumber = Number(score); // Convert string to number
// console.log(typeof(scoreNumber));
// console.log(scoreNumber); // NaN (Not a Number) because undefined cannot be converted to a number


// let score = true;

// console.log(typeof(score));
// console.log(typeof score);

// let scoreNumber = Number(score); // Convert string to number
// console.log(typeof(scoreNumber));
// console.log(scoreNumber); // 1, because true is converted to 1 in numeric context 0 for false, 1 for true


// let score = "Gopal";

// console.log(typeof(score));
// console.log(typeof score);

// let scoreNumber = Number(score); // Convert string to number
// console.log(typeof(scoreNumber));
// console.log(scoreNumber); // NaN (Not a Number) because "Gopal" cannot be converted to a number


//Booolean
// let isLoggedIn = 1;
// console.log(Boolean(isLoggedIn)); // true, because 1 is truthy
// isLoggedIn = 0; 
// console.log(Boolean(isLoggedIn)); // false, because 0 is falsy
// isLoggedIn = "gopal"; 
// console.log(Boolean(isLoggedIn)); 
// isLoggedIn = ""; 
// console.log(Boolean(isLoggedIn)); 


//String
// let score = 33;
// console.log(String(score)); // Convert number to string
// console.log(typeof String(score)); // "33" as a string


// let val=3;
// let negativeVal=-val;
// console.log(negativeVal); // -3, negative of 3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);
// console.log(2+2);


// String Concatenation
// let str1 = "Hello";
// let str2 = " World";
// let str3= str1 + str2; // Concatenation using +
// console.log(str3); // "Hello World"

// Problem with + operator
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");


// console.log(+true); // 1, true is converted to 1
// console.log(+false); // 0, false is converted to 0
// console.log(+null); // 0, null is converted to 0
// console.log(+undefined); // NaN, undefined cannot be converted to a number
// console.log(+""); // 0, empty string is converted to 0

// console.lof(true+);// error

// Bad Way of writing code
// let num1, num2, num3;
// num1=num2=num3=2+2;

// // Increment Operators
// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

