const userEmail = ""

if(userEmail){
  console.log("Email is provided");
}else{
  console.log("Email is not provided");
}

//falsy values
// false, 0, -0 , Big Int 0n, "", null, undefined, NaN

// truthy values
// true, 1, -1, Big Int 1n, " ", "0", "false", [], {}, function(){}, Symbol(), new Date()

// const emptyObject = {};
// if(Object.keys(emptyObject).length === 0){
//   console.log("This object is empty");    
// }

// Nullish Coalescing Operator (??) : null or undefined check
const userName = null;
const displayName = userName ?? "Guest"; // If userName is null or undefined, use "Guest"
console.log(displayName); // Output: Guest

// ternary operator
const isLoggedIn = true;    
const message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message); // Output: Welcome back!