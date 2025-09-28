// const hero=['hulk', 'iroanman']
// undefined
// hero
// (2) ['hulk', 'iroanman']
// andar pura brahman hai

function multiplyBy5(num)
{
    return num*5;
}
multiplyBy5.power=2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // {} tume khudse methods/properties add krni hogi, by default context->us function ka this

function createUser(username, score)
{
    this.username=username;
    this.score=score;
}

// khudka method bnana 
createUser.prototype.increment=function()
{
    this.score++; // jiska mtlb this
}

const chai=new createUser("chai", 10);
const coffee=new createUser("coffee", 40);
chai.increment(); // IMP bina new ke pta nhi chlega ki new properties ayi h
console.log(chai);
console.log(coffee);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/