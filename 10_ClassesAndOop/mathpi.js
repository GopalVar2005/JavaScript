// CAN WE CHANGE VALUE OF PI?->NO
//                                          Module, Propertykey 
console.log(Object.getOwnPropertyDescriptor(Math, "PI"))
// writable=false -> so it can not be changed
console.log(Math.PI)
Math.PI=3
console.log(Math.PI) // no change

// const myNewObject = Object.create(null);

const chai = {
    name: 'chai',
    price: 20,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
// Changing Property
Object.defineProperty(chai, "name", {
    //writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for(let [key, value] of Object.entries(chai)) // bcs functions are not iterable in js
{
    console.log(`${key}:${value}`)
}
// name pr iterate nhi hua
// price:20

// isAvailable:true
