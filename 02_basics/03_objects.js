
// Singleton
// const singleton = Object.create(null); // Create an empty object using Object.create
// singleton.property = 'I am a singleton'; // Add a property to the singleton object
// console.log(singleton); // Output the singleton object
// console.log(Array.isArray(singleton)); // Check if singleton is an array, should return false


// Literal / Constructor / Singletons

// Literal

const Symb = Symbol('unique'); // Create a unique symbol

const person = {  
  name: 'John',
  age: 30,
  [Symb]: 'This is a unique symbol property', // Use the symbol as a property key with square brackets
  hobbies: ['reading', 'gaming'],
  isEmployed: true,
};

console.log(person.name); // Output the name property of the person object
console.log(person['age']); // Output the age property of the person object

// console.log(person[Symb]); // Output the unique symbol property of the person object
// console.log(person);
// person.name = 'Doe'; // Change the name property of the person object
// console.log(person);
// Object.freeze(person); // Freeze the person object to prevent modifications
// person.name = 'Jane'; // Attempt to change the name property (will not work due to freeze)
// console.log(person); // Output the frozen person object

person.greeting = function() { // Add a method to the person object
  return `Hello, my name is ${this.name}`;  
}

console.log(person.greeting()); // Call the greeting method of the person object

// Constructor
const car = new Object({
  make: 'Toyota',
  model: 'Camry',
  year: 2020
});




// console.log(person); // Output the person object
// console.log(car); // Output the car object
// console.log(Object.keys(person)); // Output the keys of the person object
// // Output the values of the person object
// console.log(Object.values(person));
// console.log(Object.entries(person)); // Output the entries of the person object
// console.log(Object.getOwnPropertyNames(person)); // Output all property names of the person object
// console.log(Object.getOwnPropertyDescriptors(person)); // Output property descriptors of the person object
// // Output the type of the person object
// console.log(typeof person); // Output: object
// console.log(Array.isArray(person)); // Check if person is an array, should return false 
// console.log(Array.isArray(car)); // Check if car is an array, should return false
// // Output the array created from the scores
// console.log(Array.isArray(Array.from("hello"))); // Check if the string is converted to an array
// console.log(Array.isArray(Array.from({name: "om"}))); // Check if the object is converted to an array