const tinderuser = new Object(); // Create a new object using the Object constructor  
// const tinderuser = {}; // Create an empty object using object literal notation

tinderuser.id = "12345"; // Add an id property to the tinderuser object
tinderuser.name = "John Doe"; // Add a name property to the tinderuser object
tinderuser.age = 28; // Add an age property to the tinderuser object
tinderuser.location = "New York"; // Add a location property to the tinderuser object
tinderuser.interests = ["hiking", "reading", "gaming"]; // Add an interests property to the tinderuser object
tinderuser.isActive = true; // Add an isActive property to the tinderuser object

// console.log(tinderuser); // Output the tinderuser object

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName:{
      firstName: "Om",
      lastName: "Asodariya",
    },
  },
}  

// console.log(regularUser.fullName.userFullName.firstName); // Output the first name of the user
// console.log(regularUser.fullName.userFullName.lastName); // Output the last name of

const obj1 = {1: "one", 2: "two", 3: "three"}; // Create an object with numeric keys
const obj2 = {4: "four", 5: "five"}; // Create  another object with numeric keys

// const obj3= {obj1, obj2}; // Combine obj1 and obj2 into a new object
// const obj3= Object.assign({}, obj1, obj2); // Merge obj1 and obj2 into a new object using Object.assign

const obj3= {...obj1, ...obj2}; // Merge obj1 and obj2 using the spread operator
// console.log(obj3); // Output the merged object


const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
]; // Create an array of user objects

// console.log(tinderuser);

// console.log(Object.keys(tinderuser)); // Output the keys of the tinderuser object
// console.log(Object.values(tinderuser)); // Output the values of the tinderuser object
// console.log(Object.entries(tinderuser)); // Output the entries of the tinderuser object

// console.log(tinderuser.hasOwnProperty("name")); // Check if the tinderuser object has a property named "name"
// console.log(tinderuser.hasOwnProperty("email")); // Check if the tinderuser object has a property named "name"



const course = {
  title: "JavaScript Basics",
  price: 29.99,
  duration: "4 weeks",
  courseInstructor: {
    name: "Om patel",
    experience: "5 years",
  },
};

const {courseInstructor:instructor}=course
// console.log(instructor.name); // Output the name of the course instructor

// give me destructuring example with array of objects
const courses = [
  { title: "JavaScript Basics", price: 29.99 },
  { title: "Python Fundamentals", price: 39.99 },
  { title: "Web Development", price: 49.99 }
];

const [firstCourse, secondCourse] = courses; // Destructure the first two courses from the array
// console.log(firstCourse.title); // Output the title of the first course
// console.log(secondCourse.price); // Output the price of the second course

// example of object destructuring 
const user = {
  id: 1,
  name: "Om Patel",
  email: "om@gamil.com",
  address: {    
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

const { name, email, address: { city } } = user; // Destructure properties from the user object
console.log(name); // Output the name of the user
console.log(email); // Output the email of the user
console.log(city); // Output the city from the address of the user

// {
//   "name": "Om Patel",
//   "courseName": "JavaScript Basics",
//   "coursePrice": "free",
// }


