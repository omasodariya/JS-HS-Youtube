//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Premitive) vs Heap (Reference)/(Non primitive)

let myUrl = "https://google.com";
let anotherUrl = myUrl;

anotherUrl = "https://facebook.com";

console.log(myUrl);
console.log(anotherUrl);


let userOne = {
    email: "user@gmail.com",
    upi: "user@upi",    
}

let userTwo = userOne;

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "newuser@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
