// for-of
// ["","",""]
// [{}.{},{}]

// arr=[1,2,3,4,5];
// for(const num of arr) // kis object pr lgana ha 
// {
//     console.log(num);
// } 

// const str="Gopal"
// for(const char of str)
// {
//     console.log(char);   
// }

// Map->Key-value pairs, remembers the original insertion order of the keys, contain only unique values
const map=new Map();
map.set("IN","INDIA")
map.set("UN","United States of America")
map.set("Fr","France")
map.set("IN","INDIA")
// console.log(map);

// for(const key of map)
// {
//     console.log(key);
// }
// [ 'IN', 'INDIA' ]
// [ 'UN', 'United States of America' ]
// [ 'Fr', 'France' ]

// Destructuring
for(const [key, value] of map)
{
    console.log(key,",",value);
}

// Not iterable for objects
const myObj={
    game1:"GTA",
    game2:"Tekken3"
}
for(const [key, value] of myObj)
{
     console.log(key,",",value);
}