class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Inheritance
class Teacher extends User{
    constructor(username, email, password){
        // In Class, without using call-this we can simply use super(behind the scene vhi hota h)
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()

const masalaChai = new User("masalaChai")``
masalaChai.logMe()

console.log(chai instanceof User); // true