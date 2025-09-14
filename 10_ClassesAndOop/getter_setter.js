// getter_setter usecase-> password ko change krne ke liye
class User{
    constructor(email, password)
    {
        this.email=email,
        // ab iska kaam nhi hora
        this.password=password
    }
    // jitne bhi properties bnate h unke getter-setter already ban jate ha
    // IMP->getter define krdia to setter bhyi define krna pdega
    // _password to avoid race condition
    get password()
    {
        // return this._password.toUpperCase(); 
        return `${this._password}gopal`
    }
    // Max call stack-> jab same password ma value dale-> set krne ma error
    //               -> jab nya password property bnalo-> get krne ma error
    set password(value)
    {
        this._password=value
    }
}
const myself=new User("gopal@gmail.com", "abc");
console.log(myself.password)