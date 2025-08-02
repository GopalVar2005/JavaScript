const accountID=1234
let accountEmail="gopal.varshney@gmail.com"
var accountPassword="gopal123"
accountCity="Delhi"
let accountState; //values->undefined

//accountID=5678 // This will throw an error because accountID is a constant
console.log(accountID);

accountEmail="gopal.varshney123@gla.ac.in"
acccountPassword="gopal1234"
accountCity="Noida"
console.table([accountEmail, accountPassword, accountCity, accountState]);
