    class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // kisi method ko same class ya uske child se call hone se rokta ha
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());
// error aayega kyuki static method ko instance se call nahi kar sakte
const android = new User("android")
// console.log(android.createId());

// kar sakte sirf class se kar sakte hain
 console.log(Teacher.createId());