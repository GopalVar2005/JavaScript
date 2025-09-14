// call hora ha but kuch fayda nhi ha (current context ud jata h global context ma kuch jata nhi)

// function SetUsername(username){
//     //complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername(username)
   
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);


// call is a way to run a function immediately and set what this points to.
// Think of it like:
// "Run this function right now, and use this object for this."

// current context global context ke this ma chla ha jata h 

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);