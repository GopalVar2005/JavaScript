// this-> current context ko refer krta ha 

// Problem without this
// let username="sam";
// const user={
//     //username:"gopal",
//     id:1234,
//     welcomeMessage:function(){
//         // console.log(`${username}, welcome to the page`); // Error, username is not defined
//         console.log(`${username}, welcome to the page`);
//     }
// }

let username="sam";
const user={
    username:"gopal",
    id:1234,
    welcomeMessage:function(){
        // console.log(`${username}, welcome to the page`); // Error, username is not defined
        console.log(`${this.username}, welcome to the page`);
        console.log(this);  
    }
}
// console.log(user.welcomeMessage());
// user.username="ram";
// console.log(user.welcomeMessage());

// console.log(this);
// In Terminal, {}
// In Browser, Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// function chai(){
//     let username="gopal";
//     console.log(this.username);
//     // console.log(this);
// }
// chai();

// const chai=function(){
//     let username="gopal";
//     console.log(this.username);
//     // console.log(this);
// }
// chai();

// Arrow function
const chai= () => {
    // let username="gopal";
    // console.log(this.username);
    console.log(this);
}
chai();

// Normal fucntions ma this ma bhot kuch hota ha aur arrow function ma empty
// Not the difference interviewer wants to know

// const addTwo=(num1, num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(3,4));

// Implicit return->arrow functions can return a value without writing the return keyword, if the body is written in a single expression without curly braces {}
// const addTwo=(num1, num2)=> num1+num2;
// OR
// const addTwo=(num1, num2)=> (num1+num2);
// {ma return needed}, ( ma return needed)

//Need of Parantheses
// const addTwo=(num1, num2)=> {username:"gopal"};
// console.log(addTwo(2,3)); // undefined

const addTwo=(num1, num2)=> ({username:"gopal"});
console.log(addTwo(2,3)); // { username: 'gopal' }