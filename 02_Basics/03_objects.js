// Objects ko declare krne ke 2 trike ha-> Literal(Singleton nhi bnega), Constructor(Singleton bnega)
// Singleton-> Apne trh ka 1 hi object

//Constructor
//Object.create

// Literal Declaration
// By-default:  key->String, value->kuch bhi

const mySym=Symbol("key1");

const JsUser={
    name:"Gopal",
    "full name":"Gopal Varshney",
    [mySym]:"myKey1", // to refer to String otherwise it refer to String
    age:21,
    location:"Mathura",
    email:"gopal@gmail.com",
    isLoggedIn: false,
    lastoginDays:["Monday","Wednesday","Thursday"]
}

// Normally
//console.log(JsUser.email);  
// Problem
//console.log(JsUser."full name"); // Error

// Solution
// console.log(JsUser[email]); // Error, because key is by-default String
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email="gopal@google.com";
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email="gopal@microsoft.com";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello");
}
JsUser.greeting2=function(){
    console.log(`Hello, ${this.name}`); // jab same object ko refer kro
}
console.log(JsUser["greeting"]); // function execute nhi hua bas reference aya
console.log(JsUser.greeting); // // function execute nhi hua bas reference aya
console.log(JsUser.greeting());


console.log(JsUser.greeting2());

