// const tinderUser2={};
// console.log(tinderUser2);// {}

const tinderUser=new Object();
// console.log(tinderUser); //{}
//same result only difference is constructor is singleton literal is not
     
tinderUser.id="123";
tinderUser.name="Gopal";
tinderUser.isLoggedIn=false;

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Gopal",
            lastname:"Varshney"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

const obj3={obj1, obj2};
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//less used
//const obj4=Object.assign({},obj1, obj2); // optional
const obj4=Object.assign(obj1, obj2);
console.log(obj4);

// more used
const obj5={...obj1, ...obj2};
console.log(obj5);

// when values come from database
const user=[
    {
        id:"0",
        name:"gopal"
    },
    {
        id:"1",
        name:"gopal"
    },
    {
        id:"2",
        name:"gopal"
    }
]
console.log(user[1].id);

console.log(Object.keys(tinderUser)); // return an array of keys
console.log(Object.values(tinderUser)); // return an array of values
console.log(Object.entries(tinderUser)); // return an array of array of key-value pairs 

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructuring Objects
const course={
    courseName:"js in hindi",
    coursePrice:"999",
    courseInstructor:"hitesh"
}
console.log(course.coursename);// fine but repetetive work
 
// Solution
// const {courseInstructor}=course;
// console.log(courseInstructor);
// OR
const {courseInstructor:instructor}=course;
console.log(instructor);

// For React
// const navbar = ({company}) => {

// }
// navbar(company="google");

// JSON API
// {
//     "name":"hitesh",
//      "id":1234
//     "courseName":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]