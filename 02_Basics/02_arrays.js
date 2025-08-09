const marvel=["Spiderman","Ironman","Loki"];
const dc=["Batman","Superman","Flash"];

// change the original array
// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]); // Output: Superman

//concat does not change the original array
console.log(marvel.concat(dc)); // Output: [ 'Spiderman', 'Ironman', 'Loki', 'Batman', 'Superman', 'Flash' ]
console.log(marvel); // Output: [ 'Spiderman', 'Ironman', 'Loki' ]

// Spread->ak kach ka glass tod dijiye
// better kyuki multiple arrays can be combined
console.log([...marvel, ...dc]); // Output: [ 'Spiderman', 'Ironman', 'Loki', 'Batman', 'Superman

const arr=[0,1,[2,3,4],5,[6,[7,8]]];
const flatArr=arr.flat(2); // 2 levels deep
// const flatArr=arr.flat(Infinity); // Hack

console.log(flatArr); // Output: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

console.log(Array.isArray("gopal")); // Output: false
console.log(Array.from("gopal")); // Output: [ 'g', 'o', 'p', 'a', 'l' ]
console.log(Array.from({name:"gopal"})); // Output: [ <1 empty item> ], interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1, score2, score3)); // Output: [ 100, 200, 300 ]