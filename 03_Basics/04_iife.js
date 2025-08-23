// Immediately Invoked Fucntion Expressions(IIFE)
//IMP
//Use-> global scopeke pollution se bachne ke liye
// phla ( fucntion ) dusra (execution), ; us functionko end krne ke liye taaki aage aur fucntions chl ske
(function chai(){
    // named IIFE
    console.log("garam");
})();

((name)=>{
    // normal IIFE
    console.log(`${name},chai lelo`);
})("gopal");
