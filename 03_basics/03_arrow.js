// "this" refers to current context of the object
const user={
  name: "Om Patel",
  price: 100,
   welcomeMsg: function() {
    console.log(this);
    return `Welcome ${this.name}, your price is ${this.price}`; 
   }
}

// console.log(user.welcomeMsg());
// user.name="Jay"
// console.log(user.welcomeMsg());  

// console.log(this); // while in browser the globle context is window object

// function sayHello() {
//   let a = 10;
//   console.log(this.a); // In a function, "this" refers to the global object (window in browsers)
//   return "Hello";
// }

// sayHello(); // Call the function to see the context of "this"


// const chai = function(){
//     let a = 10;
//     console.log(this.a); // In a function, "this" refers to the global object
// }

// chai(); // Call the function to see the context of "this"


// const chai = () =>{
//   let a = 10;
//   console.log(this); // In an arrow function, "this" refers to the lexical scope, which is the global object in this case
//   // return "Hello";
// }

// chai();


// const addtwo = (a,b) =>{
//   return a + b; // Arrow function to add two numbers
// }

// const addtwo = (a,b) => (a + b); // Arrow function to add two numbers

const addtwo = (a,b) => ({username:"om"}); // Arrow function to add two numbers


console.log(addtwo(5, 10)); // Call the function with arguments 5 and 10 to output 15


const myArray = [1, 2, 3, 4, 5];

myArray.forEach((element, index) => { 
  console.log(`Element at index ${index} is ${element}`); // Output each element of the array with its index
});
