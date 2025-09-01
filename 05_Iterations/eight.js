// real use-case-> Total of shopping cart

const nums=[1,2,3];
// const newNums=nums.reduce(function (acc, curVal){
//     return acc+curVal;
// },0);

const newNums=nums.reduce((acc, curVal)=>acc+curVal+1,0);
console.log(newNums);

// Find total of Shopping Cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999 
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalPrice=shoppingCart.reduce((acc, curObj)=>acc+curObj.price,0);
console.log(totalPrice);