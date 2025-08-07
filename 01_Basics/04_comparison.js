// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// Always compare same Dataype(not always gives desired result)
// Avoid using these
console.log("2">1);
console.log("02">1);

console.log(null>0);// false
console.log(null==0);// false
console.log(null<=0);// true
console.log(undefined<0);// false
console.log(undefined==0);// false
console.log(undefined<0);// false
// == and comparison works differnetly comparion converts null to a number treating it as 0
// Solution-> TypeScript

// Strict Check(checks both value and type)
console.log(2==="2");// false
