const userEmail=[];
if(userEmail)
{
    console.log("Got the email");
}
else
{
    console.log("Not received");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined Nan, 

// truthy values
// "0", "false", " ", [], {}, function(){}

if(userEmail.length === 0)
{
    console.log("Array is Empty");
}

const emptyObj={};
if(Object.keys(emptyObj).length===0)
{
    console.log("Object is Empty");
}

console.log(false==0);
console.log(false=='');
console.log(''==0);

// Nullish Coalescing Operator(??): null undefined
// Database se values arhi to fucntion ma null ya undefined na jay  
    // jo phli miljay bas null ya undefined  na ho
    // let val1=5 ?? 10; // 5
    // let val1=null ?? 10; // 10
    // let val1=undefined ?? 15; // 15
    // let val1=null ?? 10 ?? 15; // 10
    // let val1=undefined ?? null; // null
    let val1=null ?? undefined; // undefined
    console.log(val1);

// Ternary Operator
// condition ? true : false;

const val=1;
val>=10 ? console.log("Greater than or equal to 10") : console.log("Smaller than 10");