// for-in loop

// for object
const myObj={
    game1:"GTA",
    game2:"Tekken3"
}
for(const key in myObj)
{
    console.log(`${key}->${myObj[key]}`);
}

// for array
const arr=[1,2,3,4,5];
for(const key in arr)
{
    //console.log(key); // indexes
    console.log(arr[key]);
}

// for map(not iteratable)
const map=new Map();
map.set("IN","INDIA")
map.set("UN","United States of America")
map.set("Fr","France")
map.set("IN","INDIA")

for(const key in map)
{
    console.log(key); // prints nothing
}