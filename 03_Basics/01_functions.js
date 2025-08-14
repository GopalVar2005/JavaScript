function sayMyName(){
    console.log('G');
    console.log('O');
    console.log('P');
    console.log('A');
    console.log('L');
}
sayMyName; // reference
sayMyName(); //call

function add(num1, num2) // parameters
{
    return num1+num2;
}
let res=add(2,3); // arguments
console.log(res);

function loginUserMessage(username="sam") // default value
{
    // if(username === undefined)
    // if(!username)
    // {
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} just logged in`;
}
console.log(loginUserMessage("gopal")); // gopal just logged in
console.log(loginUserMessage()); // undefined just logged in

function calculateCartPrice(val1,val2,...num1) // rest
{
    return num1;
}
console.log(calculateCartPrice(200,300,100,500,400));

const user={
    username:"gopal",
    price:199
}
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username:"gopal",
    price:199
})

const myArr=[1,2,3,4];
function returnValue(arr)
{       
    return arr[0];
}
// console.log(returnValue(myArr));
console.log(returnValue([1,2,3,4]));
