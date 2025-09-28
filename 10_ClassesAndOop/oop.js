// Object Literal-> Literally an object
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); // bas username se current context nhi smjega
        console.log(this); // pura object
    }

}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); // {}; IN browser, Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// Constructor Function->new
//1. jese hi new keyword use krte ha, ak empty object(instance) create hota ha 
//2. constructpr function call hota h new ke karan
//3. sab arguments this ke andar a jate h
//4. return kro ya nhi mil jate ha 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // return object, this nhi kroge phirbhi return hoga
}

// yha bina new ke values overwrite ho jayengi
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); // khudike ke function ka reference
//console.log(userTwo);

// LEARN instance of 
