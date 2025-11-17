// for-each(callback-> no function name)
const arr=[1,2,3,4,5]; 

// arr.forEach( function (item){
//     console.log(item);
// })

// arr.forEach((item)=>{
//     console.log(item);
// })

// const print=function(item)
// {
//     console.log(item);
// }
// arr.forEach(print); // bas reference dena ha    

arr.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

// Database values
const values=[
    {
        name:"JavaScript",
        fileName:"js"
    },
    {
        name:"java",
        fileName:"java"
    },
    {
        name:"python",
        fileName:"py"
    }
]
values.forEach((item)=>{
    console.log(item.name);

})
