// Problem with var

let d=40;
var c=300;
if(true)
{
    console.log(d);
    d=4;
    let a=10;
    const b=20;
    //var c=30;
    c=30;
}
//console.log(a);
//console.log(b);
console.log(c);
console.log(d);


// IMP
// browser ma code ma scope alg ha aur terminal ma global scope alg ha 

function one()
{
    const username="hitesh";
    function two()
    {
        const website="youtube.com";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();

// 2 ways to declare a function
console.log(addOne(3));
function addOne(num)
{
    return num+1;
}

console.log(addTwo(3)); // Error, called before variable declared   
const addTwo = function(num){ // expression
    return num+2;
}
