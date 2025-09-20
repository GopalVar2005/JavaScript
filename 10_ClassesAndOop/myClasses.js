// ES6

// class User{
//     // sbse phle call hota h
//     constructor(username, password, email){
//         this.username=username
//         this.password=password
//         this.email=email
//     }

//     // method (function ki tarah)
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Gopal", "gopal1234", "gopal.var@gmail.com")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// behind the scene
const User=function(username, password, email){
    this.username=username
    this.password=password
    this.email=email
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`    
}
const user2 = new User("Ram", "ram1234", "ram.var@gmail.com")
console.log(user2.encryptPassword());
console.log(user2.changeUsername());