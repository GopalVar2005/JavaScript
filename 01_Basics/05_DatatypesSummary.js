// Data ko kis trh se store krte h aaur kis trh se access kr skte ha(call by value & call by reference) ke base pr 2 types ma differentiate kiya gya ha 
// 1. Primitive
// 2. Non-Primitive

//  Primitive(call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol(kisi value ko unique bnane ke liye), BigInt

const score = 100
const scoreValue = 100.3
console.log(typeof score);// number

const isLoggedIn = false
console.log(typeof isLoggedIn);// boolean

const outsideTemp = null
console.log(typeof outsideTemp);// object, this is a known bug in JavaScript

let userEmail;
console.log(typeof userEmail);// undefined, variable declared but not assigned a value

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);// symbol is a unique and immutable value

console.log(id === anotherId);// false, because symbols are unique


// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions(saare objects ha but function-object function ha)

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); // object, arrays are a type of object in JavaScript

let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj); // object, objects are a collection of key-value pairs

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction); // function, functions are a type of object in JavaScript







// https://262.ecma-international.org/5.1/#sec-11.4.3

