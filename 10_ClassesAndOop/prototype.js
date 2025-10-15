// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
// har kisi ke sath ye method attach ho taaki bar bar .trim(),length na krna pde

const myHeroes=['thor', 'hulk']

const heroPower={
    thor:"hammer",
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

// Father ko diya baldness to sbko milgaya
// Object.prototype.bug=function(){
//     console.log('Bug is found');
// }
// heroPower.bug();
// myHeroes.bug();

// Son ko di to bas son ko hi milegi
Array.prototype.bug=function(){
    console.log('Bug is found');
}
myHeroes.bug();
// heroPower.bug(); 

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // old syntax
    __proto__: TeachingSupport // way 1
}

Teacher.__proto__ = User // way 2

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); // (kisko, kiski)
 
// 1st problem
let anotherUsername="Hello    "

String.prototype.truelength=function(){
    console.log(this); // current reference string ka ha 
    console.log(this.trim().length);
}
anotherUsername.truelength();

"hi  ".truelength();
