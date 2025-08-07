// Stack(primitive), Heap(non-primitive)

let a=10;
let b=a;
a=20;
console.log(a);
console.log(b);

let user1={
    name: "John",
    age: 30
}
let user2=user1;
user2.age=31;
console.log(user1.age); // 31, because user2 is a reference to the same object in memory
console.log(user2.age); // 31