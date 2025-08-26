// if

if(2==="2")
{
    console.log("done");
}

if(2==="2") console.log("done");

// not recommended
if(2!=="2") console.log("done"),
console.log("done again");

// ==, !=, <, >, <=, >=, ,===, !==

const temp=41;
if(temp>40)
{
    console.log("Temperature is greater than 40");
}
else if(temp==40)
{
    console.log("Temperature is equal to 40");
}
else
{
    console.log("Temperature is less than 40")
}

// real world
const loggedFromGoogle=true;
const loggedFromEmail=false;
const debitCard=true;
if((loggedFromGoogle || loggedFromEmail) && debitCard)
{
    console.log("Allowed to buy");
}
