
// let name="Gopal is ";
// //console.log(name.length); // Gopal is
// let age=20;
// console.log(name+age+" years old"); // Gopal is 20 years old

// // String Interpolation
// name="Gopal";
// age=20;
// console.log(`My name is ${name} and my age is ${age}`);

// let name="Gopal"
// undefined
// console.log(name)
// VM145:1 Gopal
// undefined
// let id=new String("Gopal")
// undefined
// console.log(id)
// VM274:1 String {'Gopal'}0: "G"1: "o"2: "p"3: "a"4: "l"length: 5[[Prototype]]: String[[PrimitiveValue]]: "Gopal"
// undefined
// console.log(name.length)
// VM365:1 5
// undefined
// console.log(id.length)
// VM448:1 5
// undefined


// String Declaration
let str=new String("Hello World");
console.log(str); // [String: 'Hello World']
console.log(str.length); // 11
console.log(str[0]); // H
console.log(str.__proto__); // String {}
console.log(str.__proto__.constructor); // [Function: String]
console.log(str.toUpperCase()); // HELLO WORLD, does not change the original string
console.log(str.charAt(0)); // H, returns the character at the specified index
console.log(str.indexOf('o')); // 4, returns the index of the first occurrence of 'o'
console.log(str.substring(0, 5)); // Hello, returns the substring from index 0 to 5
console.log(str.substring(5)); // World, returns the substring from index 5 to the end
console.log(str.slice(-5,-2)) // include negative index, returns the substring from index -5 to -2 (not inclusive of -2)
console.log(str.split(' ')); // [ 'Hello', 'World' ], splits the string into an array of substrings
console.log(str.trim()); // Hello World, removes whitespace from both ends of the string
console.log(str.replace("World", "Duniya")); // Hello Duniya, replaces 'World' with 'Duniya'
console.log(str.includes("Hello")); // true, checks if the string contains 'Hello'
console.log(str.includes("Hell")); 
console.log(str.includes("Heol")); 
